# Multi-stage build for production optimization
FROM node:20-alpine AS builder

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copy shared common folder
COPY common ./common
RUN cd common && npm install --registry=https://registry.npmjs.org/


# Setup service directory
WORKDIR /app/api-gateway

# Copy package files
COPY api-gateway/package*.json ./
COPY api-gateway/tsconfig.json ./
# Install dependencies
RUN npm install --registry=https://registry.npmjs.org/

# Copy source code
COPY api-gateway .

# Build TypeScript
RUN npm run build

# Production stage
FROM node:20-alpine

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copy common folder to production stage
COPY common ./common

WORKDIR /app/api-gateway

# Copy package files
COPY api-gateway/package*.json ./

# Install production dependencies only
RUN npm install --registry=https://registry.npmjs.org/ --omit=dev --ignore-scripts

# Copy built application
COPY --from=builder /app/api-gateway/dist ./dist

# Run as non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["node", "dist/app.js"]
