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

// Security and Reliability
app.use(helmet());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true,
  })
);
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use(limiter);

// For non-proxy routes (like health check)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/health', healthCheck('api-gateway'));

// Proxy Routes - These should NOT use express.json() before they hit the proxy
// to avoid issues with body parsing in http-proxy-middleware
// (unless we use the complex fix, but for now we just place them carefully)
app.use('/api/v1', proxyRoutes);

// Error handling
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(port, () => {
    logger.info(`API Gateway listening on port ${port}`);
  });
}

export default app;
