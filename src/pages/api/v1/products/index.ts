import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma_/generated/client';
import { uuid } from 'uuidv4';
import Helper from '@/helpers/BaseResponseHelper';
import { FieldRef } from '@prisma_/generated/client/runtime/library';

const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { page = 1, limit = 10, ...query } = req.query;

    const pageNumber = parseInt(page as string);
    const pageSize = parseInt(limit as string);

    const filterableFields = { ...query };
    const filter = Object.fromEntries(
      Object.entries(filterableFields)
        .filter(([_, value]) => typeof value === 'string')
        .map(([key, value]) => {
          if (key === 'status' && typeof value === 'string') {
            return [key, { equals: parseInt(value, 10) }];
          }
          return [key, { contains: value }];
        }),
    );
    const filtered = Object.keys(filter).length ? filter : undefined;

    const products = await prisma.product.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize || ITEMS_PER_PAGE,
      where: { ...filtered, deletedAt: null },
      include: {
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

    const totalRecords = await prisma.product.count({
      where: Object.keys(filter).length ? filter : undefined,
    });

    const totalPages = Math.ceil(totalRecords / pageSize);

    const totalCurrentRecords = products?.length || 0;

    res.status(200).json(
      Helper.ResponseData(res.statusCode, 'OK', null, {
        products,
        totalRecords,
        totalCurrentRecords,
        totalPages,
        currentPage: products?.length ? pageNumber : 0,
        pageSize,
      }),
    );
  } else if (req.method === 'POST') {
    const { name, supplierId, quantity, status, createdBy, updatedBy } =
      req.body;

    const uid = uuid();
    try {
      const newProduct = await prisma.product.create({
        data: {
          code: uid,
          name,
          supplierId: Number(supplierId),
          quantity: Number(quantity),
          status,
          createdBy,
          updatedBy,
        },
      });
      res
        .status(201)
        .json(Helper.ResponseData(res.statusCode, 'Created', null, newProduct));
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, supplierId, quantity, status, createdBy, updatedBy } =
      req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        name,
        supplierId,
        quantity,
        status,
        createdBy,
        updatedBy,
      },
    });
    res
      .status(200)
      .json(
        Helper.ResponseData(res.statusCode, 'Created', null, updatedProduct),
      );
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    await prisma.product.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
