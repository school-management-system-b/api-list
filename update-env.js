const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const services = [
  'api-gateway',
  'auth-service',
  'user-service',
  'student-service',
  'violation-service',
  'achievement-service',
  'category-service',
  'notification-service',
  'reporting-service',
  'counseling-service',
  'schedule-service'
];

const newDbUrl = 'postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true';
const newDirectUrl = 'postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres';
const rabbitmqUrl = 'amqp://guest:guest@rabbitmq:5672';

services.forEach(service => {
  const envPath = path.join(rootDir, service, '.env');
  if (fs.existsSync(envPath)) {
    let content = fs.readFileSync(envPath, 'utf8');
    
    // Update Database URL
    content = content.replace(/DATABASE_URL=".*"/g, `DATABASE_URL="${newDbUrl}"`);
    content = content.replace(/DIRECT_URL=".*"/g, `DIRECT_URL="${newDirectUrl}"`);
    
    // Add or Update RabbitMQ URL
    if (content.includes('RABBITMQ_URL')) {
      content = content.replace(/RABBITMQ_URL=".*"/g, `RABBITMQ_URL="${rabbitmqUrl}"`);
    } else {
      content += `\n# Message Broker\nRABBITMQ_URL="${rabbitmqUrl}"\n`;
    }
    
    fs.writeFileSync(envPath, content);
    console.log(`Updated ${envPath}`);
  } else {
    console.log(`File not found: ${envPath}`);
  }
});
