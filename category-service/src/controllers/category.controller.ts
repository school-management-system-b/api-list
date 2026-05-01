import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { createCategorySchema, updateCategorySchema } from '../validators/category.validator';

export const getCategories = async (req: Request, res: Response) => {
  const offset = parseInt(req.headers['x-paging-offset'] as string) || 0;
  const limit = parseInt(req.headers['x-paging-limit'] as string) || 25;
  const search = req.headers['x-paging-search'] as string;
  const type = req.query.type as any;
  const severity = req.query.severity as any;
  const hierarchical = req.query.hierarchical === 'true';

  const where: any = {
    deletedAt: null,
    ...(type && { type }),
    ...(severity && { severity }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { code: { contains: search, mode: 'insensitive' } },
      ],
    }),
  };

  if (hierarchical) {
    const categories = await prisma.category.findMany({
      where,
      orderBy: [{ order: 'asc' }, { name: 'asc' }],
    });

    const buildHierarchy = (parentId: string | null = null, level: number = 0): any[] => {
      return categories
        .filter((c: any) => c.parentId === parentId)
        .map((c: any) => ({
          ...c,
          children: buildHierarchy(c.id, level + 1),
        }));
    };

    return sendResponse(res, 200, true, 'Categories hierarchical retrieved', buildHierarchy());
  }

  const [items, total] = await Promise.all([
    prisma.category.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: [{ order: 'asc' }, { name: 'asc' }],
    }),
    prisma.category.count({ where }),
  ]);

  return sendResponse(res, 200, true, 'Categories retrieved', {
    items,
    pagination: {
      offset,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};

export const createCategory = async (req: Request, res: Response) => {
  const { error, value } = createCategorySchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  let level = 0;
  if (value.parentId) {
    const parent = await prisma.category.findUnique({ where: { id: value.parentId } });
    if (!parent) return sendError(res, 400, 'Parent category not found');
    level = parent.level + 1;
  }

  const category = await prisma.category.create({
    data: {
      ...value,
      level,
      createdBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  return sendResponse(res, 201, true, 'Category created successfully', category);
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await prisma.category.findUnique({
    where: { id },
    include: {
      children: {
        where: { deletedAt: null },
      },
      parent: true,
    },
  });

  if (!item) return sendError(res, 404, 'Category not found');

  return sendResponse(res, 200, true, 'Category detail retrieved', item);
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = updateCategorySchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const updated = await prisma.category.update({
    where: { id },
    data: {
      ...value,
      updatedBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  return sendResponse(res, 200, true, 'Category updated', updated);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) return sendError(res, 404, 'Category not found');
  if (category.isSystem) return sendError(res, 400, 'System categories cannot be deleted');

  await prisma.category.update({
    where: { id },
    data: {
      deletedAt: new Date(),
      isActive: false,
      updatedBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  return sendResponse(res, 200, true, 'Category deleted successfully');
};
