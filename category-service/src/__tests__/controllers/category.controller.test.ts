import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../../controllers/category.controller';
import {
  mockRequest,
  mockResponse,
  mockPrismaClient,
  mockCategory,
  resetAllMocks,
} from '../utils/test-helpers';
import { Response, Request } from 'express';

jest.mock('../../config/prisma', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { mockPrismaClient } = require('../utils/test-helpers');
  return {
    __esModule: true,
    default: mockPrismaClient,
  };
});

describe('Category Controller', () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = mockRequest() as Request;
    res = mockResponse() as Response;
    resetAllMocks();
    jest.clearAllMocks();
  });

  describe('getCategories', () => {
    it('should return paginated categories', async () => {
      req.headers = { 'x-paging-offset': '0', 'x-paging-limit': '25' };

      mockPrismaClient.category.findMany.mockResolvedValue([mockCategory]);
      mockPrismaClient.category.count.mockResolvedValue(1);

      await getCategories(req, res);

      expect(mockPrismaClient.category.findMany).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return hierarchical categories', async () => {
      req.query = { hierarchical: 'true' };

      const parent = { ...mockCategory, id: 'p1', parentId: null };
      const child = { ...mockCategory, id: 'c1', parentId: 'p1' };

      mockPrismaClient.category.findMany.mockResolvedValue([parent, child]);

      await getCategories(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      // Access 4th argument of sendResponse call, which is the data
      const data = (res.json as jest.Mock).mock.calls[0][0].data;
      expect(data).toHaveLength(1); // Only parent
      expect(data[0].children).toHaveLength(1); // Child nested
    });
  });

  describe('createCategory', () => {
    it('should create root category', async () => {
      req.body = {
        name: 'New Cat',
        code: 'NEW',
        type: 'VIOLATION',
        severity: 'RINGAN',
        defaultPoints: 5,
      };

      mockPrismaClient.category.create.mockResolvedValue({ ...mockCategory, ...req.body });

      await createCategory(req, res);

      expect(mockPrismaClient.category.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ level: 0 }),
        }),
      );
      expect(res.status).toHaveBeenCalledWith(201);
    });

    it('should create child category with incremented level', async () => {
      req.body = {
        name: 'Child',
        code: 'CHILD',
        type: 'VIOLATION',
        severity: 'RINGAN',
        defaultPoints: 5,
        parentId: '123e4567-e89b-12d3-a456-426614174002',
      };

      mockPrismaClient.category.findUnique.mockResolvedValue({ ...mockCategory, level: 1 });
      mockPrismaClient.category.create.mockResolvedValue({ ...mockCategory, ...req.body });

      await createCategory(req, res);

      expect(mockPrismaClient.category.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ level: 2 }),
        }),
      );
    });
  });

  describe('updateCategory', () => {
    it('should update category', async () => {
      req.params = { id: 'cat-123' };
      req.body = { name: 'Updated' };

      mockPrismaClient.category.update.mockResolvedValue({ ...mockCategory, name: 'Updated' });

      await updateCategory(req, res);

      expect(mockPrismaClient.category.update).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('deleteCategory', () => {
    it('should soft delete category', async () => {
      req.params = { id: 'cat-123' };

      mockPrismaClient.category.findUnique.mockResolvedValue(mockCategory);
      mockPrismaClient.category.update.mockResolvedValue({});

      await deleteCategory(req, res);

      expect(mockPrismaClient.category.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ isActive: false }),
        }),
      );
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should prevent deleting system categories', async () => {
      req.params = { id: 'sys-cat' };

      mockPrismaClient.category.findUnique.mockResolvedValue({ ...mockCategory, isSystem: true });

      await deleteCategory(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });
});
