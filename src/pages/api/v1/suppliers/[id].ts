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
      const supplier = await prisma.supplier.findUnique({
        where: { id: Number(id), deletedAt: null },
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
  } else if (req.method === 'DELETE') {
    try {
      const supplier = await prisma.supplier.update({
        where: { id: Number(id) },
        data: { deletedAt: new Date() },
      });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete supplier id : ${id}`,
            null,
            supplier,
          ),
        );
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    console.log({ method: req.method });
    console.log({ body_PUT: req.body });

    const {
      code,
      name,
      email,
      address,
      officePhone,
      contactPerson,
      mobilePhone,
      status,
      updatedBy,
    } = req.body;

    try {
      const supplier = await prisma.supplier.update({
        where: { id: Number(id) },
        data: {
          code,
          name,
          email,
          address,
          officePhone,
          contactPerson,
          mobilePhone,
          status,
          updatedBy,
          updatedAt: new Date(),
        },
      });
      console.log({ supplier: supplier });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete supplier id : ${id}`,
            null,
            supplier,
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
