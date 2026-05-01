import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

export const getPointsConfig = async (req: Request, res: Response) => {
  const configs = await prisma.pointsConfiguration.findMany();
  return sendResponse(res, 200, true, 'Points configuration retrieved', configs);
};

export const updatePointsConfig = async (req: Request, res: Response) => {
  const { key } = req.params;
  const { configValue, description } = req.body;

  const existing = await prisma.pointsConfiguration.findUnique({ where: { configKey: key } });

  const updated = await prisma.pointsConfiguration.upsert({
    where: { configKey: key },
    update: {
      configValue,
      description,
      previousValue: existing?.configValue as any,
      changedBy: (req as any).user?.id || 'SYSTEM',
      changedAt: new Date(),
    },
    create: {
      configKey: key,
      configValue,
      description,
      changedBy: (req as any).user?.id || 'SYSTEM',
      changedAt: new Date(),
    },
  });

  return sendResponse(res, 200, true, 'Configuration updated', updated);
};

export const getCategoryStats = async (req: Request, res: Response) => {
  const totalCategories = await prisma.category.count({ where: { deletedAt: null } });
  const byType = await prisma.category.groupBy({
    by: ['type'],
    where: { deletedAt: null },
    _count: true,
  });

  return sendResponse(res, 200, true, 'Category statistics retrieved', {
    totalCategories,
    byType: byType.reduce((acc: any, curr: any) => ({ ...acc, [curr.type]: curr._count }), {}),
  });
};
