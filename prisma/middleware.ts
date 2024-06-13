// In a file like prisma/middleware.ts

import { Prisma, PrismaClient } from '@prisma_/generated/client';

const softDeleteMiddleware: Prisma.Middleware = async (params, next) => {
  // Check if it's a delete operation
  if (params.action === 'delete') {
    params.action = 'update';
    params.args.data = { deletedAt: new Date() };
  }

  // Check if it's a deleteMany operation
  if (params.action === 'deleteMany') {
    params.action = 'updateMany';
    if (params.args.data !== undefined) {
      params.args.data.deletedAt = new Date();
    } else {
      params.args.data = { deletedAt: new Date() };
    }
  }

  return next(params);
};

export default softDeleteMiddleware;
