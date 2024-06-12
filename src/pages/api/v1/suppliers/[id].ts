import Helper from '@/helpers/BaseResponseHelper';
import { PrismaClient } from '@prisma_/generated/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  console.log({ api: id });

  if (req.method === 'GET') {
    try {
      const supplier = await prisma.supplier.findUnique({
        where: { id: Number(id) },
        include: {
          createdSupplierByUser: {
            select: {
              username: true,
              email: true,
            },
          },
          updatedSupplierByUser: {
            select: {
              username: true,
              email: true,
            },
          },
          deletedSupplierByUser: {
            select: {
              username: true,
              email: true,
            },
          },
        },
      });

      if (supplier) {
        res
          .status(200)
          .json(Helper.ResponseData(res.statusCode, 'OK', null, supplier));
      } else {
        res
          .status(400)
          .json(
            Helper.ResponseData(
              res.statusCode,
              'Supplier not found',
              'Supplier not found',
              null,
            ),
          );
      }
    } catch (error) {}
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
