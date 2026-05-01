import { Request, Response } from 'express';

export interface RequestWithUser extends Request {
  user?: {
    id: string;
    username?: string;
    roles?: string[];
    name?: string;
  };
}

export const mockRequest = (data: Partial<RequestWithUser> = {}): Partial<RequestWithUser> => {
  return {
    body: {},
    params: {},
    query: {},
    headers: {},
    ip: '127.0.0.1',
    user: undefined,
    ...data,
  } as Partial<RequestWithUser>;
};

export const mockResponse = (): Partial<Response> => {
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  };
  return res;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockPrismaClient: any = {
  category: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    count: jest.fn(),
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $transaction: jest.fn((operations: any) => Promise.all(operations)),
};

export const mockCategory = {
  id: 'category-123',
  parentId: null,
  name: 'Academic',
  code: 'ACADEMIC',
  type: 'ACHIEVEMENT',
  level: 0,
  order: 1,
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const resetAllMocks = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.values(mockPrismaClient).forEach((model: any) => {
    if (typeof model === 'object' && model !== null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.values(model).forEach((method: any) => {
        if (typeof method?.mockReset === 'function') {
          method.mockReset();
        }
      });
    }
  });
};
