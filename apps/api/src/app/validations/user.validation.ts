import { EGender, EUserRole } from '@medixbot/types';
import * as Joi from 'joi';
import validation from './validation';

const createUser = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required().email(),
  userRole: Joi.string().valid(EUserRole.Admin).default(EUserRole.Admin),
  gender: Joi.string().valid(EGender.Female, EGender.Female),
});

const getUsers = Joi.object().keys({
  role: Joi.string().valid(
    EUserRole.Admin,
    EUserRole.Doctor,
    EUserRole.Patient
  ),
  sortBy: Joi.string(),
  limit: Joi.number().integer(),
  page: Joi.number().integer(),
});

const getUser = Joi.object().keys({
  userId: Joi.string().required().custom(validation.objectId),
});

const getMe = Joi.object().keys({
  userId: Joi.forbidden(),
});

const updateUser = Joi.object().keys({
  userId: Joi.required().custom(validation.objectId),
  data: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(validation.password),
      name: Joi.string(),
      surname: Joi.string(),
      gender: Joi.string().valid(EGender.Female, EGender.Male),
      role: Joi.forbidden(),
    })
    .min(1),
});

const deleteUser = Joi.object().keys({
  userId: Joi.string().custom(validation.objectId),
});

const getDoctor = Joi.object().keys({
  userId: Joi.required().custom(validation.objectId),
});

const getDoctors = Joi.object().keys({
  limit: Joi.number().integer(),
  page: Joi.number().integer(),
});

const getPatient = Joi.object().keys({
  userId: Joi.required().custom(validation.objectId),
});

const updateDoctor = Joi.object().keys({
  about: Joi.any(),
  availability: Joi.any(),
  documents: Joi.any(),
  domain: Joi.any(),
  unAvailability: Joi.any(),
});

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  getDoctor,
  getDoctors,
  getPatient,
  updateDoctor,
};
