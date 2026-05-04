import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { templateSchema } from '../validators/notification.validator';

export const getTemplates = async (req: Request, res: Response) => {
  const items = await prisma.notificationTemplate.findMany();
  return sendResponse(res, 200, true, 'Templates retrieved', items);
};

export const createTemplate = async (req: Request, res: Response) => {
  const { error, value } = templateSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const item = await prisma.notificationTemplate.create({ data: value });
  return sendResponse(res, 201, true, 'Template created', item);
};

export const updateTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await prisma.notificationTemplate.update({
    where: { id },
    data: req.body,
  });
  return sendResponse(res, 200, true, 'Template updated', item);
};
