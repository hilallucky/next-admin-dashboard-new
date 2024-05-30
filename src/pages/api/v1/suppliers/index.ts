import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma_/generated/client';
import { uuid } from 'uuidv4';
import Helper from '@/helpers/BaseResponseHelper';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const suppliers = await prisma.supplier.findMany();
    res
      .status(200)
      .json(Helper.ResponseData(res.statusCode, 'OK', null, suppliers));
  } else if (req.method === 'POST') {
    // console.log({ 'req.body': req.body });

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

    // const { name, address, phone } = req.body;

    const uid = uuid();

    const newSupplier = await prisma.supplier.create({
      data: {
        code: uid,
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
