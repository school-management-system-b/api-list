import Joi from 'joi';

export const createUserSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  username: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string().email().required(),
  name: Joi.string().min(3).max(100).required(),
  nip: Joi.string().length(18).optional(),
  phone: Joi.string()
    .pattern(/^08\d{8,11}$/)
    .optional(),
  address: Joi.string().max(500).optional(),
  city: Joi.string().max(100).optional(),
  province: Joi.string().max(100).optional(),
  birthDate: Joi.date().optional(),
  birthPlace: Joi.string().max(100).optional(),
  gender: Joi.string().valid('MALE', 'FEMALE').optional(),
  religion: Joi.string()
    .valid('ISLAM', 'KRISTEN', 'KATOLIK', 'HINDU', 'BUDDHA', 'KONGHUCU')
    .optional(),
  employeeType: Joi.string().valid('PNS', 'PPPK', 'GTT', 'PTT', 'HONORER').optional(),
  department: Joi.string().max(100).optional(),
  position: Joi.string().max(100).optional(),
  joinDate: Joi.date().optional(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  email: Joi.string().email().optional(),
  nip_nis: Joi.string().max(50).optional(),
  phone: Joi.string().pattern(/^08\d{8,11}$/).optional(),
  mobilePhone: Joi.string().pattern(/^08\d{8,11}$/).optional(),
  address: Joi.string().max(500).optional(),
  city: Joi.string().max(100).optional(),
  province: Joi.string().max(100).optional(),
  postalCode: Joi.string().max(10).optional(),
  photoUrl: Joi.string().uri().optional(),
  avatar: Joi.string().optional(),
  birthDate: Joi.date().optional(),
  birthPlace: Joi.string().max(100).optional(),
  gender: Joi.string().valid('MALE', 'FEMALE').optional(),
  religion: Joi.string().valid('ISLAM', 'KRISTEN', 'KATOLIK', 'HINDU', 'BUDDHA', 'KONGHUCU').optional(),
  bloodType: Joi.string().valid('A', 'B', 'AB', 'O').optional(),
  maritalStatus: Joi.string().valid('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED').optional(),
  emergencyContactName: Joi.string().max(100).optional(),
  emergencyContactPhone: Joi.string().pattern(/^08\d{8,11}$/).optional(),
  emergencyContactRelation: Joi.string().max(50).optional(),
  employeeType: Joi.string().valid('PNS', 'PPPK', 'GTT', 'PTT', 'HONORER').optional(),
  department: Joi.string().max(100).optional(),
  position: Joi.string().max(100).optional(),
  joinDate: Joi.date().optional(),
});

