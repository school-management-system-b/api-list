const { Client } = require('pg');

const connectionString = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

async function checkTables() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    const result = await client.query(`
      SELECT table_schema, table_name 
      FROM information_schema.tables 
      WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
    `);
    console.log(result.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

checkTables();
