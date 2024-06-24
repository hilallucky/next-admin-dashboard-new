import Helper from '@/helpers/BaseResponseHelper';
import { PrismaClient } from '@prisma_/generated/client';
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
              code: true,
              name: true,
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
    try {
      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: { deletedAt: new Date() },
      });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete product id : ${id}`,
            null,
            product,
          ),
        );
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    const { code, supplierId, quantity, status, updatedBy } = req.body;

    try {
      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: {
          code,
          supplierId: Number(supplierId),
          quantity: Number(quantity),
          status,
          updatedBy,
          updatedAt: new Date(),
        },
      });
      console.log({ product: product });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete product id : ${id}`,
            null,
            product,
          ),
        );
    } catch (error) {
      res.status(500).json({ error: `Internal server error/${error}` });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
