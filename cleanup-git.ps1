# Git Cleanup Script
# Run this if node_modules was already committed to git

$services = @(
    "achievement-service",
    "api-gateway", 
    "auth-service",
    "category-service",
    "counseling-service",
    "notification-service",
    "reporting-service",
    "schedule-service",
    "student-service",
    "user-service",
    "violation-service"
)

Write-Host "=== Git Cleanup: Remove node_modules from Git ===" -ForegroundColor Cyan
Write-Host ""

foreach ($service in $services) {
    Write-Host "Processing $service..." -ForegroundColor Yellow
    
    $servicePath = "e:\Become Full Stack\Job\candra\Microservices\$service"
    
    if (Test-Path "$servicePath\.git") {
        Push-Location $servicePath
        
        # Check if node_modules is tracked
        $tracked = git ls-files | Select-String "node_modules"
        
        if ($tracked) {
            Write-Host "  → Removing node_modules from git..." -ForegroundColor Red
            git rm -r --cached node_modules 2>$null
            
            # Add .gitignore
            git add .gitignore
            
            # Commit the change
            git commit -m "chore: add .gitignore and remove node_modules from git"
            
            Write-Host "  ✓ Cleaned!" -ForegroundColor Green
        } else {
            Write-Host "  ✓ Already clean (node_modules not tracked)" -ForegroundColor Green
        }
        
        Pop-Location
    } else {
        Write-Host "  ⚠ No git repository found, skipping..." -ForegroundColor Gray
    }
    
    Write-Host ""
}

Write-Host "=== Cleanup Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Verify with: git status (in each service)"
Write-Host "2. Push changes: git push"
