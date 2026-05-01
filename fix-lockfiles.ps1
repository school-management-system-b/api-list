$services = @(
    "api-gateway",
    "auth-service",
    "user-service",
    "student-service",
    "violation-service",
    "achievement-service",
    "category-service",
    "notification-service",
    "reporting-service",
    "counseling-service",
    "schedule-service"
)

foreach ($service in $services) {
    Write-Host "----------------------------------------"
    Write-Host "Updating lockfile for $service..."
    if (Test-Path "$service\package.json") {
        Push-Location $service
        try {
            # Running npm install --package-lock-only to update lockfile without full install if possible, 
            # but usually a full install is safer to verify consistency. 
            # We'll do a quick install to ensure everything is synced.
            cmd /c "npm install"
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ Successfully updated $service" -ForegroundColor Green
            } else {
                Write-Host "❌ Failed to update $service" -ForegroundColor Red
            }
        } catch {
            Write-Host "Error running npm in $service" -ForegroundColor Red
        }
        Pop-Location
    } else {
        Write-Host "⚠️  Directory or package.json not found for $service" -ForegroundColor Yellow
    }
}
