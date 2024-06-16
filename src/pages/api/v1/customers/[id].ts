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
      const customer = await prisma.customer.findUnique({
        where: { id: Number(id), deletedAt: null },
        include: {
          createdCustomerByUser: {
            select: {
              username: true,
              email: true,
            },
          },
          updatedCustomerByUser: {
            select: {
              username: true,
              email: true,
            },
          },
          deletedCustomerByUser: {
            select: {
              username: true,
              email: true,
            },
          },
        },
      });

      if (customer) {
        res
          .status(200)
          .json(Helper.ResponseData(res.statusCode, 'OK', null, customer));
      } else {
        res
          .status(400)
          .json(
            Helper.ResponseData(
              res.statusCode,
              'Customer not found',
              'Customer not found',
              null,
            ),
          );
      }
    } catch (error) {}
  } else if (req.method === 'DELETE') {
    try {
      const customer = await prisma.customer.update({
        where: { id: Number(id) },
        data: { deletedAt: new Date() },
      });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete customer id : ${id}`,
            null,
            customer,
          ),
        );
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
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
      const customer = await prisma.customer.update({
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
      console.log({ customer: customer });

      res
        .status(200)
        .json(
          Helper.ResponseData(
            res.statusCode,
            `Success to delete customer id : ${id}`,
            null,
            customer,
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
