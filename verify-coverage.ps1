#!/usr/bin/env pwsh

Write-Host "🧪 Running Coverage Tests for All Services..." -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

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

$results = @()

foreach ($service in $services) {
  Write-Host "📦 Testing $service..." -ForegroundColor Yellow
  
  if (Test-Path $service) {
    Push-Location $service
    
    $output = npm run test:coverage -- --silent 2>&1 | Out-String
    
    # Parse coverage from output
    if ($output -match "All files\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)") {
      $stmts = [double]$matches[1]
      $branch = [double]$matches[2]
      $funcs = [double]$matches[3]
      $lines = [double]$matches[4]
      
      $avgCoverage = ($stmts + $branch + $funcs + $lines) / 4
      
      $status = if ($avgCoverage -ge 95) { "✅" } else { "❌" }
      $color = if ($avgCoverage -ge 95) { "Green" } else { "Red" }
      
      Write-Host "$status $service`: $([math]::Round($avgCoverage, 2))% coverage" -ForegroundColor $color
      
      $results += [PSCustomObject]@{
        Service = $service
        Coverage = $avgCoverage
        Statements = $stmts
        Branches = $branch
        Functions = $funcs
        Lines = $lines
        Status = if ($avgCoverage -ge 95) { "PASS" } else { "FAIL" }
      }
    } else {
      Write-Host "⚠️  Could not parse coverage for $service" -ForegroundColor Yellow
      $results += [PSCustomObject]@{
        Service = $service
        Coverage = 0
        Status = "ERROR"
      }
    }
    
    Pop-Location
    Write-Host ""
  } else {
    Write-Host "⚠️  $service directory not found" -ForegroundColor Gray
    Write-Host ""
  }
}

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "📊 Coverage Summary" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

$results | Format-Table -Property Service, @{Label="Coverage"; Expression={"{0:N2}%" -f $_.Coverage}}, Status -AutoSize

$passed = ($results | Where-Object { $_.Coverage -ge 95 }).Count
$failed = ($results | Where-Object { $_.Coverage -lt 95 -and $_.Coverage -gt 0 }).Count

Write-Host ""
Write-Host "Total Services: $($services.Count)"
Write-Host "✅ Passed (≥95%): $passed" -ForegroundColor Green
Write-Host "❌ Failed (<95%): $failed" -ForegroundColor Red

if ($failed -eq 0) {
  Write-Host ""
  Write-Host "🎉 All services meet 95% coverage threshold!" -ForegroundColor Green
  exit 0
} else {
  Write-Host ""
  Write-Host "❌ Some services need more tests to reach 95% coverage" -ForegroundColor Red
  exit 1
}
