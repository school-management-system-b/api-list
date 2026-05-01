import { Prisma } from '@prisma/client';
import prisma from '../config/prisma';

export const findAll = async (offset: number, limit: number, search?: string) => {
  const where: Prisma.UserWhereInput = {
    deletedAt: null,
    ...(search && {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
        { nip: { contains: search, mode: 'insensitive' } },
      ],
    }),
  };

  const [items, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: { name: 'asc' },
    }),
    prisma.user.count({ where }),
  ]);

  return { items, total };
};

export const findById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const create = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const update = async (id: string, data: Prisma.UserUpdateInput) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const softDelete = async (id: string, deletedBy: string) => {
  return prisma.user.update({
    where: { id },
    data: {
      deletedAt: new Date(),
      isActive: false,
      deletedBy,
    },
  });
};
