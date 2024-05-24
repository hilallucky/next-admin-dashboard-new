import { PrismaClient } from '../generated/client';
// import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { uuid } from 'uuidv4';

const prisma = new PrismaClient();
async function main() {
  const role = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      uid: uuid(),
      name: 'Admin',
      description: 'Admin Role',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  const user = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      uid: uuid(),
      email: 'admin@admin.com',
      username: 'admin',
      password: bcrypt.hashSync('admin123', 12),
      firstName: 'Administrator User',
      status: 1,
      role: { connect: { id: 1 } },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ role, user });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
