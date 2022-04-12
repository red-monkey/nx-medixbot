import { EUserRole, EGender } from '@medixbot/types/enum';
import * as Joi from 'joi';
import validation from './validation';

const createUser = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required().email(),
  userRole: Joi.string().valid(EUserRole.ADMIN).default(EUserRole.ADMIN),
  gender: Joi.string().valid(EGender.FEMALE, EGender.MALE),
});

const getUsers = Joi.object().keys({
  role: Joi.string().valid(
    EUserRole.ADMIN,
    EUserRole.PATIENT,
    EUserRole.PATIENT
  ),
  sortBy: Joi.string(),
  limit: Joi.number().integer(),
  page: Joi.number().integer(),
});

const getUser = Joi.object().keys({
  userId: Joi.string().required().custom(validation.objectId),
});

const updateUser = Joi.object().keys({
  userId: Joi.required().custom(validation.objectId),
  data: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(validation.password),
      name: Joi.string(),
      surname: Joi.string(),
      gender: Joi.string().valid(EGender.FEMALE, EGender.MALE),
      role: Joi.forbidden(),
    })
    .min(1),
});

const deleteUser = Joi.object().keys({
  userId: Joi.string().custom(validation.objectId),
});

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
