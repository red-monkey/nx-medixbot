import { EGender } from '@medixbot/types/enum';
import * as Joi from 'joi';
import validation from './validation';

const register = Joi.object().keys({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().custom(validation.password),
  gender: Joi.string().valid(EGender.FEMALE, EGender.MALE),
  role: Joi.forbidden(),
  accountStatus: Joi.forbidden(),
});

const login = Joi.object().keys({
  email: Joi.string().required(),
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
