const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

async function runSeed() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    console.log('Connected to DB');

    const seedPath = path.join(__dirname, 'database_seed.sql');
    const sql = fs.readFileSync(seedPath, 'utf8');

    console.log('Running seed script...');
    await client.query(sql);
    console.log('Seed completed successfully!');

  } catch (err) {
    console.error('Error executing seed:', err);
  } finally {
    await client.end();
  }
}

runSeed();
