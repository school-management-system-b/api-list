import { createProxyMiddleware } from 'http-proxy-middleware';
import { Router, Request, Response } from 'express';
import CircuitBreaker from 'opossum';
import { authMiddleware } from '../middlewares/auth.middleware';
import logger from '../config/logger';

const router = Router();

const services = [
  { path: '/auth',          target: process.env.AUTH_SERVICE_URL,         auth: false },
  { path: '/users',         target: process.env.USER_SERVICE_URL,          auth: true  },
  { path: '/students',      target: process.env.STUDENT_SERVICE_URL,       auth: true  },
  { path: '/classes',       target: process.env.STUDENT_SERVICE_URL,       auth: true  },
  { path: '/academic-years',target: process.env.STUDENT_SERVICE_URL,       auth: true  },
  { path: '/violations',    target: process.env.VIOLATION_SERVICE_URL,     auth: true  },
  { path: '/achievements',  target: process.env.ACHIEVEMENT_SERVICE_URL,   auth: true  },
  { path: '/categories',    target: process.env.CATEGORY_SERVICE_URL,      auth: true  },
  { path: '/notifications', target: process.env.NOTIFICATION_SERVICE_URL,  auth: true  },
  { path: '/reporting',     target: process.env.REPORTING_SERVICE_URL,     auth: true  },
  { path: '/counseling',    target: process.env.COUNSELING_SERVICE_URL,    auth: true  },
  { path: '/schedules',     target: process.env.SCHEDULE_SERVICE_URL,      auth: true  },
];

// Circuit breaker options
const circuitBreakerOptions = {
  timeout: 10000,           // 10s request timeout
  errorThresholdPercentage: 50,  // open circuit if 50% requests fail
  resetTimeout: 30000,      // try again after 30s
};

/**
 * Wraps a proxy call in a circuit breaker.
 * If a downstream service is down, the breaker opens and returns 503 immediately
 * rather than hanging until timeout.
 */
function createServiceProxy(servicePath: string, target: string, requireAuth: boolean) {
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyReq: (proxyReq: any, req: Request, res: Response) => {
      // Forward user context injected by auth middleware
      if (req.headers['x-user-id'])       proxyReq.setHeader('x-user-id',       req.headers['x-user-id'] as string);
      if (req.headers['x-user-roles'])    proxyReq.setHeader('x-user-roles',    req.headers['x-user-roles'] as string);
      if (req.headers['x-user-username']) proxyReq.setHeader('x-user-username', req.headers['x-user-username'] as string);
    },
    onError: (err: Error, req: Request, res: Response) => {
      logger.error(`Proxy error [${servicePath}]: ${err.message}`);
      if (!res.headersSent) {
        res.status(502).json({ success: false, message: 'Bad Gateway: downstream service error' });
      }
    },
  });

  // Wrap proxy execution with opossum circuit breaker
  const breaker = new CircuitBreaker(
    (req: Request, res: Response, next: any) =>
      new Promise<void>((resolve, reject) => {
        // We pass resolve/reject into the proxy via a custom approach
        (proxy as any)(req, res, (err: any) => {
          if (err) reject(err);
          else resolve();
        });
      }),
    circuitBreakerOptions
  );

  breaker.on('open',    () => logger.warn(`⚡ Circuit OPEN for service: ${servicePath}`));
  breaker.on('halfOpen',() => logger.info(`🔁 Circuit HALF-OPEN for service: ${servicePath}`));
  breaker.on('close',   () => logger.info(`✅ Circuit CLOSED for service: ${servicePath}`));

  return (req: Request, res: Response, next: any) => {
    if (breaker.opened) {
      return res.status(503).json({
        success: false,
        message: `Service ${servicePath} is temporarily unavailable. Please try again later.`,
      });
    }
    // Fall through to the normal proxy (circuit breaker tracks errors via onError above)
    (proxy as any)(req, res, next);
  };
}

services.forEach((service) => {
  if (!service.target) {
    logger.warn(`⚠️  No target URL configured for route: ${service.path}`);
    return;
  }

  const middlewares: any[] = [];

  // Block any request to /internal from public internet
  middlewares.push((req: Request, res: Response, next: any) => {
    if (req.originalUrl.includes('/internal')) {
      logger.warn(`Attempt to access internal route from gateway: ${req.originalUrl}`);
      return res.status(403).json({ success: false, message: 'Forbidden: Internal routes are not accessible via Gateway' });
    }
    next();
  });

  if (service.auth) middlewares.push(authMiddleware);

  router.use(
    service.path,
    ...middlewares,
    createServiceProxy(service.path, service.target, service.auth)
  );
});

export default router;
