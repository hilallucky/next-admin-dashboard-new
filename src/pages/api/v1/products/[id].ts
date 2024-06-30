import Helper from '@/helpers/BaseResponseHelper';
import { Prisma, PrismaClient } from '@prisma_/generated/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(id), deletedAt: null },
        include: {
          supplier: {
            select: {
              id: true,
              code: true,
              name: true,
            },
          },
          productAliases: {
            select: {
              id: true,
              uid: true,
              code: true,
              name: true,
              status: true,
            },
          },
          createdProductByUser: {
            select: {
              username: true,
              email: true,
            },
          },
          updatedProductByUser: {
            select: {
              username: true,
              email: true,
            },
          },
          deletedProductByUser: {
            select: {
              username: true,
              email: true,
            },
          },
        },
      });

      if (product) {
        res
          .status(200)
          .json(Helper.ResponseData(res.statusCode, 'OK', null, product));
      } else {
        res
          .status(400)
          .json(
            Helper.ResponseData(
              res.statusCode,
              'Product not found',
              'Product not found',
              null,
            ),
          );
      }
    } catch (error) {}
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const result = await prisma.$transaction(async (prisma) => {
        const product = await prisma.product.update({
          where: { id: Number(id) },
          data: { deletedAt: new Date() },
        });

        const updatedAliases = await prisma.productAlias.updateMany({
          where: {
            productId: Number(id),
          },
          data: {
            deletedAt: new Date(),
          },
        });

        return { product, updatedAliases };
      });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete product id : ${id}`,
            null,
            result,
          ),
        );
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Internal server error' + '+++++' + error });
    }
  } else if (req.method === 'PUT') {
    const {
      uid,
      code,
      name,
      productId,
      supplierId,
      quantity,
      price,
      status,
      createdBy,
      updatedBy,
      productAliases,
    } = req.body;

    try {
      const result = await prisma.$transaction(async (prisma) => {
        const product = await prisma.product.update({
          where: { id: Number(id) },
          data: {
            name,
            code,
            supplierId: Number(supplierId),
            quantity: Number(quantity),
            price: Number(price),
            status,
            updatedBy,
            updatedAt: new Date(),
          },
        });

        // Bulk update product aliases
        const updatedAliases = await Promise.all(
          productAliases.map((alias) =>
            prisma.productAlias.upsert({
              where: { id: alias.id, productId: Number(id), uid: alias.uid },
              update: {
                code: alias.code,
                name: alias.name,
                supplierId: Number(supplierId),
                status: alias.status,
              },
              create: {
                code: alias.code,
                name: alias.name,
                supplierId: Number(supplierId),
                productId: Number(id),
                status: alias.status,
                createdBy,
                updatedBy,
              },
            }),
          ),
        );

        return { product, updatedAliases };
      });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete product id : ${id}`,
            null,
            result,
          ),
        );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      res.status(500).json({ error: `Internal server error/${error}` });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
