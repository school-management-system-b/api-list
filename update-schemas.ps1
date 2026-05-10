$services = @(
    "auth-service",
    "user-service",
    "student-service",
    "category-service",
    "violation-service",
    "achievement-service",
    "reporting-service",
    "counseling-service",
    "schedule-service"
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$originalDbUrl = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
$originalDirectUrl = "postgresql://postgres.wunylxmkdulrlgvscdty:Xn3491rOLIUO70MA@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres"

foreach ($svc in $services) {
    $envPath = Join-Path $root "$svc\.env"
    if (Test-Path $envPath) {
        $content = Get-Content $envPath
        $newContent = @()
        $schemaName = "svc_" + ($svc -replace "-service", "")
        
        foreach ($line in $content) {
            if ($line -match "^DATABASE_URL=") {
                $newContent += "DATABASE_URL=`"$originalDbUrl&schema=$schemaName`""
            } elseif ($line -match "^DIRECT_URL=") {
                $newContent += "DIRECT_URL=`"$originalDirectUrl?schema=$schemaName`""
            } else {
                $newContent += $line
            }
        }
        $newContent | Set-Content $envPath
        Write-Host "Fixed .env for $svc (Schema: $schemaName)" -ForegroundColor Green
    }
}
