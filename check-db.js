const { PrismaClient } = require('./auth-service/node_modules/@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const res = await prisma.$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;
  console.log(res.map(r => r.table_name));
}
run().catch(console.error).finally(() => prisma.$disconnect());
