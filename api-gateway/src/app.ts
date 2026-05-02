import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import logger from './config/logger';
import proxyRoutes from './routes/proxy.routes';
import { errorHandler, healthCheck } from '@microservices/common';

const app = express();
const port = process.env.PORT || 3000;

// Trust proxy (Vercel / Load Balancer)
app.set('trust proxy', 1);

// Security
app.use(helmet());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true,
  })
);
app.use(cookieParser());

// ── Rate Limiters ──────────────────────────────────────────────
// Strict limiter for auth endpoints (login, register)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many auth attempts, please try again in 15 minutes' },
});

// Standard limiter for all other routes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later' },
});

app.use(globalLimiter);

// ── Request Logging ────────────────────────────────────────────
// Placed BEFORE proxy routes so all requests are logged
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`${req.method} ${req.originalUrl} → ${res.statusCode} [${duration}ms]`);
  });
  next();
});

// ── Health Check ───────────────────────────────────────────────
app.get('/health', express.json(), healthCheck('api-gateway'));

// ── Apply strict rate limit for auth routes before proxying ───
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/auth/forgot-password', authLimiter);
app.use('/api/v1/auth/reset-password', authLimiter);

// ── Proxy Routes ───────────────────────────────────────────────
// Must come BEFORE global body parsing (no buffering proxy streams)
app.use('/api/v1', proxyRoutes);

// Global body parsing for non-proxy routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(port, () => {
    logger.info(`🚀 API Gateway listening on port ${port}`);
  });
}

export default app;
