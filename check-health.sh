#!/bin/bash

echo "🔍 Testing Microservices Health..."
echo ""

SERVICES=(
  "3000:API Gateway"
  "3001:Auth Service"
  "3002:User Service"
  "3003:Student Service"
  "3004:Violation Service"
  "3005:Achievement Service"
  "3006:Category Service"
  "3007:Notification Service"
  "3008:Reporting Service"
  "3009:Counseling Service"
  "3010:Schedule Service"
)

FAILED=0
PASSED=0

for service in "${SERVICES[@]}"; do
  IFS=':' read -r port name <<< "$service"
  echo -n "Testing $name (port $port)... "
  
  response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$port/health 2>/dev/null)
  
  if [ "$response" = "200" ]; then
    echo "✅ OK"
    ((PASSED++))
  else
    echo "❌ FAILED (HTTP $response)"
    ((FAILED++))
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Results: $PASSED passed, $FAILED failed"

if [ $FAILED -eq 0 ]; then
  echo "✅ All services are healthy!"
  exit 0
else
  echo "❌ Some services are down. Check logs with: docker-compose logs -f"
  exit 1
fi
