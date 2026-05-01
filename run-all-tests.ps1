#!/usr/bin/env pwsh

Write-Host "🧪 Running Tests for All Services..." -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
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

$passed = 0
$failed = 0
$results = @()

foreach ($service in $services) {
  Write-Host "📦 Testing $service..." -ForegroundColor Yellow
  
  if (Test-Path $service) {
    Push-Location $service
    
    $output = npm test -- --passWithNoTests --silent 2>&1 | Out-String
    $exitCode = $LASTEXITCODE
    
    if ($exitCode -eq 0) {
      Write-Host "✅ $service`: PASSED" -ForegroundColor Green
      $passed++
      $results += [PSCustomObject]@{
        Service = $service
        Status = "PASSED"
      }
    } else {
      # Check if it's just missing tests
      if ($output -match "No tests found") {
        Write-Host "⚠️  $service`: No tests" -ForegroundColor Yellow
      } else {
        Write-Host "❌ $service`: FAILED" -ForegroundColor Red
        $failed++
      }
      $results += [PSCustomObject]@{
        Service = $service
        Status = if ($output -match "No tests") { "NO_TESTS" } else { "FAILED" }
      }
    }
    
    Pop-Location
  } else {
    Write-Host "⚠️  $service directory not found" -ForegroundColor Gray
  }
  
  Write-Host ""
}

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "📊 Test Summary" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

$results | Format-Table -Property Service, Status -AutoSize

Write-Host ""
Write-Host "Total Services: $($services.Count)"
Write-Host "✅ Passed: $passed" -ForegroundColor Green
Write-Host "❌ Failed: $failed" -ForegroundColor Red

if ($failed -eq 0) {
  Write-Host ""
  Write-Host "🎉 All tests passed!" -ForegroundColor Green
  exit 0
} else {
  exit 1
}
