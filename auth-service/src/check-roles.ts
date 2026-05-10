import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const roles = await prisma.role.findMany();
  console.log('Current roles in DB:', roles.map(r => r.code));
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
