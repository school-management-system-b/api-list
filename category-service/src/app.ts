import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import dotenv from 'dotenv';
import logger from './config/logger';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { errorHandler } from '@microservices/common/middlewares/error.handler';
import { healthCheck } from '@microservices/common/utils/health';

dotenv.config();

const app = express();
const port = process.env.PORT || 3006;

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),
);

// Swagger Documentation
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'));

// Dynamically set server URL for Swagger Spec
const serverUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api/v1/categories`
  : `http://localhost:${port}/api/v1/categories`;

swaggerDocument.servers = [{ url: serverUrl }];

const swaggerOptions = {
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.min.css',
  customJs: [
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.min.js',
  ],
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
import categoryRoutes from './routes/category.routes';
app.use('/api/v1/categories', categoryRoutes);

app.get('/', (req: Request, res: Response) => {
  res.redirect('/api-docs');
});

app.get('/health', healthCheck('category-service'));

// Error handling
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    logger.info(`Category Service listening on port ${port}`);
  });
}

export default app;
