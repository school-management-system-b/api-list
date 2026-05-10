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

const baseUrl = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true";
const directUrl = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

services.forEach(svc => {
    const envPath = path.join(__dirname, svc, '.env');
    if (fs.existsSync(envPath)) {
        let content = fs.readFileSync(envPath, 'utf8');
        const schema = "svc_" + svc.replace('-service', '');
        
        // Correct both URLs
        content = content.replace(/^DATABASE_URL=.*$/m, `DATABASE_URL="${baseUrl}&schema=${schema}"`);
        content = content.replace(/^DIRECT_URL=.*$/m, `DIRECT_URL="${directUrl}?schema=${schema}"`);
        
        fs.writeFileSync(envPath, content);
        console.log(`Fixed BOTH URLs in ${svc}`);
    }
});
