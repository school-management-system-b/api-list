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

services.forEach(service => {
  const envPath = path.join(rootDir, service, '.env');
  if (fs.existsSync(envPath)) {
    let content = fs.readFileSync(envPath, 'utf8');
    
    // Replace @rabbitmq with @localhost (handling cases with/without credentials)
    if (content.includes('@rabbitmq')) {
      content = content.replace(/@rabbitmq/g, '@localhost');
      fs.writeFileSync(envPath, content);
      console.log(`✅ Updated RabbitMQ host to localhost in ${service}/.env`);
    } else {
      console.log(`ℹ️ No changes needed for ${service}/.env`);
    }
  }
});
