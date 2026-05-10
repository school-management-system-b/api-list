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
$results = @()

foreach ($svc in $services) {
    Write-Host ""
    Write-Host "====================================" -ForegroundColor Cyan
    Write-Host "Processing: $svc" -ForegroundColor Yellow
    Write-Host "====================================" -ForegroundColor Cyan

    $svcPath = Join-Path $root $svc
    Push-Location $svcPath

    # 1. Generate prisma client
    Write-Host "  [1/2] Generating Prisma client..." -ForegroundColor Gray
    & npx prisma generate 2>&1 | Out-Null

    # 2. Run seed
    $seedPath = "prisma/seed.ts"
    if ($svc -eq "category-service") {
        $seedPath = "prisma/seeds/seed.ts"
    }

    if (Test-Path $seedPath) {
        Write-Host "  [2/2] Running seed..." -ForegroundColor Gray
        & npx tsx $seedPath
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  DONE: $svc seeded OK" -ForegroundColor Green
            $results += [PSCustomObject]@{ Service = $svc; Status = "OK" }
        } else {
            Write-Host "  FAILED: $svc seed error" -ForegroundColor Red
            $results += [PSCustomObject]@{ Service = $svc; Status = "FAILED (seed)" }
        }
    } else {
        Write-Host "  SKIP: no seed at $seedPath" -ForegroundColor DarkYellow
        $results += [PSCustomObject]@{ Service = $svc; Status = "SKIPPED" }
    }

    Pop-Location
}

Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor White
Write-Host "====================================" -ForegroundColor Cyan
$results | Format-Table -AutoSize
