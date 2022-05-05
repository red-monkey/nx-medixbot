import { EGender, EUserRole } from '@medixbot/types';
import * as Joi from 'joi';
import validation from './validation';

const register = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required().email(),
  tel: Joi.string(),
  password: Joi.string().required().custom(validation.password),
  gender: Joi.string().valid(EGender.Female, EGender.Male),
  userRole: Joi.string().valid(EUserRole.Patient, EUserRole.Doctor).required(),
  accountStatus: Joi.forbidden(),
});

const login = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const logout = Joi.object().keys({
  refreshToken: Joi.string().required(),
});

const refreshTokens = Joi.object().keys({
  refreshToken: Joi.string().required(),
});

const forgotPassword = Joi.object().keys({
  email: Joi.string().email().required(),
});

const resetPassword = Joi.object().keys({
  token: Joi.string().required(),
  password: Joi.string().required().custom(validation.password),
});

const sendVerificationEmail = Joi.object().keys({});

export default {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
};
