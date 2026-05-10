# sync-db.ps1
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "1. Merging All Prisma Schemas" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Cyan
node merge-schemas.js
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to merge schemas!" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`n====================================" -ForegroundColor Cyan
Write-Host "2. Pushing Master Schema to Database" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Cyan
npx prisma db push --schema=master-schema.prisma --accept-data-loss
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push database!" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`n====================================" -ForegroundColor Cyan
Write-Host "3. Generating Clients & Seeding Data" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Cyan
powershell -ExecutionPolicy Bypass -File seed-all.ps1
