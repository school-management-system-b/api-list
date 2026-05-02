const { Client } = require('pg');
const connectionString = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

async function fixStudents() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    const result = await client.query('UPDATE students SET "userId" = id WHERE "userId" IS NULL');
    console.log(`Updated ${result.rowCount} students.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
fixStudents();
