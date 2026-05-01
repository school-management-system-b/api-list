#!/bin/bash

echo "🧪 Running Tests for All Microservices..."
echo "=========================================="
echo ""

SERVICES=(
  "api-gateway"
  "auth-service"
  "user-service"
  "student-service"
  "violation-service"
  "achievement-service"
  "category-service"
  "notification-service"
  "reporting-service"
  "counseling-service"
  "schedule-service"
)

TOTAL=0
PASSED=0
FAILED=0

for service in "${SERVICES[@]}"; do
  echo "📦 Testing $service..."
  
  if [ -d "$service" ]; then
    cd "$service"
    
    if npm test -- --passWithNoTests 2>&1 | tee "../test-output-$service.log"; then
      echo "✅ $service: PASSED"
      ((PASSED++))
    else
      echo "❌ $service: FAILED"
      ((FAILED++))
    fi
    
    cd ..
    echo ""
  else
    echo "⚠️  $service directory not found, skipping..."
    echo ""
  fi
  
  ((TOTAL++))
done

echo "=========================================="
echo "📊 Test Summary"
echo "=========================================="
echo "Total Services: $TOTAL"
echo "✅ Passed: $PASSED"
echo "❌ Failed: $FAILED"
echo ""

if [ $FAILED -eq 0 ]; then
  echo "🎉 All tests passed!"
  exit 0
else
  echo "❌ Some tests failed. Check logs above."
  exit 1
fi
