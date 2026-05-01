import Joi from 'joi';

export const createCategorySchema = Joi.object({
  code: Joi.string().uppercase().min(3).max(50).required(),
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(1000).optional(),
  type: Joi.string().valid('VIOLATION', 'ACHIEVEMENT').required(),
  parentId: Joi.string().uuid().optional().allow(null),

  // For Violations
  severity: Joi.when('type', {
    is: 'VIOLATION',
    then: Joi.string().valid('RINGAN', 'SEDANG', 'BERAT').required(),
    otherwise: Joi.optional(),
  }),
  defaultPoints: Joi.when('type', {
    is: 'VIOLATION',
    then: Joi.number().integer().min(1).max(100).required(),
    otherwise: Joi.optional(),
  }),
  minPoints: Joi.number().integer().min(1).optional(),
  maxPoints: Joi.number().integer().min(Joi.ref('minPoints')).optional(),
  sanctionTemplate: Joi.string().max(2000).optional(),

  // For Achievements
  achievementType: Joi.when('type', {
    is: 'ACHIEVEMENT',
    then: Joi.string()
      .valid(
        'ACADEMIC',
        'NON_ACADEMIC',
        'SPORTS',
        'ARTS',
        'SCIENCE',
        'TECHNOLOGY',
        'LANGUAGE',
        'RELIGIOUS',
        'SOCIAL',
        'OTHER',
      )
      .required(),
    otherwise: Joi.optional(),
  }),
  basePoints: Joi.when('type', {
    is: 'ACHIEVEMENT',
    then: Joi.number().integer().min(1).max(100).required(),
    otherwise: Joi.optional(),
  }),

  // Display
  icon: Joi.string().max(50).optional(),
  color: Joi.string()
    .pattern(/^#[0-9A-F]{6}$/i)
    .optional(),
  order: Joi.number().integer().min(0).default(0),
  isActive: Joi.boolean().default(true),
});

export const updateCategorySchema = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  description: Joi.string().max(1000).optional(),
  defaultPoints: Joi.number().integer().min(1).max(100).optional(),
  basePoints: Joi.number().integer().min(1).max(100).optional(),
  minPoints: Joi.number().integer().min(1).optional(),
  maxPoints: Joi.number().integer().optional(),
  sanctionTemplate: Joi.string().max(2000).optional(),
  icon: Joi.string().max(50).optional(),
  color: Joi.string()
    .pattern(/^#[0-9A-F]{6}$/i)
    .optional(),
  order: Joi.number().integer().min(0).optional(),
  isActive: Joi.boolean().optional(),
});
