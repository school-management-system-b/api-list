const fs = require('fs');
const path = require('path');

const services = [
    "auth-service",
    "user-service",
    "student-service",
    "category-service",
    "violation-service",
    "achievement-service",
    "reporting-service",
    "counseling-service",
    "schedule-service"
];

services.forEach(svc => {
    const envPath = path.join(__dirname, svc, '.env');
    if (fs.existsSync(envPath)) {
        let content = fs.readFileSync(envPath, 'utf8');
        const schema = svc.replace('-service', '');
        
        // Correct the DIRECT_URL line
        content = content.replace(/^DIRECT_URL=.*$/m, `DIRECT_URL="postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres?schema=${schema}"`);
        
        fs.writeFileSync(envPath, content);
        console.log(`Fixed DIRECT_URL in ${svc}`);
    }
});
