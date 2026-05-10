import { Request, Response } from 'express';
import prisma from '../config/prisma';
import axios from 'axios';
import { sendResponse } from '../utils/response';

export const getHallOfFame = async (req: Request, res: Response) => {
  const academicYear = req.query.academicYear as string;
  const items = await prisma.hallOfFame.findMany({
    where: {
      isActive: true,
      ...(academicYear && { academicYear }),
    },
    orderBy: [{ level: 'desc' }, { achievementDate: 'desc' }],
  });
  return sendResponse(res, 200, true, 'Hall of Fame retrieved', items);
};

export const getStatsSummary = async (req: Request, res: Response) => {
  const academicYear = req.query.academicYear as string;
  const startDate = req.query.startDate as string;
  const endDate = req.query.endDate as string;

  const where: any = {
    deletedAt: null,
    ...(academicYear && { academicYear }),
  };

  if (startDate || endDate) {
    where.achievementDate = {};
    if (startDate) where.achievementDate.gte = new Date(startDate);
    if (endDate) where.achievementDate.lte = new Date(endDate);
  }

  const total = await prisma.achievement.count({ where });

  const byStatus = await prisma.achievement.groupBy({
    by: ['status'],
    where,
    _count: true,
  });

  const byCategory = await prisma.achievement.groupBy({
    by: ['categoryName'],
    where,
    _count: true,
    orderBy: { _count: { id: 'desc' } },
    take: 5,
  });

  const byClass = await prisma.achievement.groupBy({
    by: ['studentClass'],
    where,
    _count: true,
    orderBy: { _count: { id: 'desc' } },
    take: 5,
  });

  const topAchievers = await prisma.achievement.groupBy({
    by: ['studentId', 'studentName', 'studentClass'],
    where,
    _sum: { points: true },
    _count: { id: true },
    orderBy: { _sum: { points: 'desc' } },
    take: 5,
  });

  return sendResponse(res, 200, true, 'Achievement statistics retrieved', {
    total,
    byStatus: byStatus.reduce(
      (acc: any, curr: any) => ({ ...acc, [curr.status]: curr._count }),
      {}
    ),
    byCategory: byCategory.map(c => ({ name: c.categoryName, count: c._count })),
    byClass: byClass.map(c => ({ name: c.studentClass, count: c._count })),
    topAchievers: topAchievers.map(a => ({
      studentId: a.studentId,
      name: a.studentName,
      class: a.studentClass,
      points: a._sum.points,
      count: a._count.id
    }))
  });
};
