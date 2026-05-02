const { Client } = require('pg');
const connectionString = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

async function fixPasswords() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    const correctHash = '$2a$10$TW5TofIYQZN/69qnngDgYehMG7quxwsEHtLLWQEZwBNCTWTzsBaKS';
    const result = await client.query('UPDATE users SET password = $1', [correctHash]);
    console.log(`Updated ${result.rowCount} users with correct password123 hash.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
fixPasswords();
