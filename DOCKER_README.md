# Docker Compose Quick Reference

## Production (Recommended)

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild specific service
docker-compose up -d --build auth-service
```

## Development (Hot-reload)

```bash
# Start with development config
docker-compose -f docker-compose.dev.yml up -d

# View logs for specific service
docker-compose -f docker-compose.dev.yml logs -f auth-service

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

## Useful Commands

```bash
# Check status of all containers
docker-compose ps

# Restart specific service
docker-compose restart auth-service

# Execute command in running container
docker-compose exec auth-service sh

# View resource usage
docker stats

# Remove all stopped containers and unused images
docker system prune -a
```

## Health Checks

- API Gateway: <http://localhost:3000/health>
- Auth Service: <http://localhost:3001/health>
- User Service: <http://localhost:3002/health>
- (and so on for all services...)

## Notes

- All services connect to Neon PostgreSQL (cloud-hosted)
- Make sure all `.env` files have valid `DATABASE_URL`
- Services communicate via `microservices-network`
- Ports 3000-3010 must be available on host
