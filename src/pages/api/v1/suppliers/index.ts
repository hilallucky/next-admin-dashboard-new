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

    const suppliers = await prisma.supplier.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize || ITEMS_PER_PAGE,
      where: Object.keys(filter).length ? filter : undefined,
    });

    const totalRecords = await prisma.supplier.count({
      where: Object.keys(filter).length ? filter : undefined,
    });

    const totalPages = Math.ceil(totalRecords / pageSize);

    const totalCurrentRecords = suppliers?.length || 0;

    res.status(200).json(
      Helper.ResponseData(res.statusCode, 'OK', null, {
        suppliers,
        totalRecords,
        totalCurrentRecords,
        totalPages,
        currentPage: suppliers?.length ? pageNumber : 0,
        pageSize,
      }),
    );
  } else if (req.method === 'POST') {
    const {
      name,
      email,
      address,
      officePhone,
      contactPerson,
      mobilePhone,
      status,
      createdBy,
      updatedBy,
    } = req.body;

    // const { name, address, phone } = req.body;

    const uid = uuid();

    const newSupplier = await prisma.supplier.create({
      data: {
        code: uid,
        name,
        email,
        address,
        officePhone,
        contactPerson,
        mobilePhone,
        status,
        createdBy,
        updatedBy,
      },
    });
    res
      .status(201)
      .json(Helper.ResponseData(res.statusCode, 'Created', null, newSupplier));
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const {
      name,
      address,
      officePhone,
      contactPerson,
      mobilePhone,
      status,
      createdBy,
      updatedBy,
    } = req.body;

    const updatedSupplier = await prisma.supplier.update({
      where: { id: Number(id) },
      data: {
        name,
        address,
        officePhone,
        contactPerson,
        mobilePhone,
        status,
        createdBy,
        updatedBy,
      },
    });
    res
      .status(200)
      .json(
        Helper.ResponseData(res.statusCode, 'Created', null, updatedSupplier),
      );
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    await prisma.supplier.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
