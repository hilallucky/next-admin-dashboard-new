import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma_/generated/client';
import Helper from '@/helpers/BaseResponseHelper';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { ...query } = req.query;

    const suppliers = await prisma.supplier.findMany({
      where: { status: 1, deletedAt: null },
      select: {
        id: true,
        name: true,
      },
    });

    const suppliersWithAliases = suppliers.map((supplier) => ({
      value: supplier.id,
      label: supplier.name,
    }));

    res.status(200).json(
      Helper.ResponseData(res.statusCode, 'OK', null, {
        suppliers: suppliersWithAliases,
      }),
    );
  } else {
    res.status(405).end();
  }
}
