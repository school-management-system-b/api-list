import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient({
  datasourceUrl: process.env.DIRECT_URL || process.env.DATABASE_URL
});

async function main() {
  try {
    const sqlPath = path.join(__dirname, '../../database_seed.sql');
    console.log(`Reading SQL file from ${sqlPath}`);
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Split by semicolons for multiple statements, ignoring empty ones
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    console.log(`Found ${statements.length} statements to execute.`);

    for (let i = 0; i < statements.length; i++) {
      try {
        await prisma.$executeRawUnsafe(statements[i]);
        console.log(`Executed statement ${i + 1}/${statements.length}`);
      } catch (err) {
        console.error(`Error executing statement ${i + 1}:`, err);
      }
    }
    console.log('Seeding completed.');
  } catch (err) {
    console.error('Fatal error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
