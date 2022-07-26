import {
  EAWSS3BucketName,
  EGraphQlErrorCode,
  ETokenType,
  EUserRole,
  IRegisterUser,
} from '@medixbot/types';
import { Request, Response } from 'express';
import { awsService, tokenService } from '../services';
import { IContext } from '../types';
import { emailSender, GraphQlApiError } from '../utils';

async function register(input: { data: IRegisterUser }, ctx: IContext) {
  if (input.data.userRole === EUserRole.Admin) {
    throw new GraphQlApiError(
      'You can not register as an Admin',
      EGraphQlErrorCode.FORBIDDEN
    );
  }
  const s3 = new awsService.AWSS3();
  const registerData = input.data;
  if (!registerData.email && !registerData.tel) {
    throw new GraphQlApiError(
      'You must provide an email or a tel field',
      EGraphQlErrorCode.BAD_USER_INPUT
    );
  }
  if (input.data.profileImage) {
    const file = await s3.uploadFile(
      input.data.profileImage,
      EAWSS3BucketName.PROFILE_IMAGES
    );
    registerData.profileImage = `/rest/images/${file.key}`;
  }
  const user = await ctx.dataSources.users.createUser(registerData);
  const tokens = await ctx.dataSources.tokens.generateAuthTokens(user.id);

  const emailVerificationToken =
    await ctx.dataSources.tokens.generateVerifyEmailToken(user.id);
  await emailSender.sendVerificationEmail(user.email, emailVerificationToken);
  return { user, tokens };
}

interface ILoginArgs {
  username: string;
  password: string;
}
async function login(data: ILoginArgs, ctx: IContext) {
  const { username, password } = data;
  const user = await ctx.dataSources.users.getUserByUsername(username);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new GraphQlApiError(
      'Incorrect username or password',
      EGraphQlErrorCode.UNAUTHENTICATED
    );
  }
  const tokens = await ctx.dataSources.tokens.generateAuthTokens(user.id);
  return { user, tokens };
}

async function logout(data: { refreshToken: string }, ctx: IContext) {
  const { refreshToken } = data;
  await ctx.dataSources.tokens.delete(refreshToken, ETokenType.REFRESH);
  // await refreshTokenDoc.remove();
  return { message: 'logged out' };
}

async function refreshTokens(data: { refreshToken: string }, ctx: IContext) {
  const { refreshToken } = data;
  const refreshTokenDoc = await ctx.dataSources.tokens.verifyToken(
    refreshToken,
    ETokenType.REFRESH
  );
  const tokens = await ctx.dataSources.tokens.generateAuthTokens(
    refreshTokenDoc.user
  );
  await refreshTokenDoc.remove();
  return tokens;
}

async function forgotPassword(data: { email: string }, ctx: IContext) {
  const { email } = data;
  const resetPasswordToken =
    await ctx.dataSources.tokens.generateResetPasswordToken(email);
  await emailSender.sendResetPasswordEmail(email, resetPasswordToken);
  return { message: 'Reset password email sent to your inbox.' };
}

async function resetPassword(
  data: { token: string; password: string },
  ctx: IContext
) {
  const { token, password } = data;
  const tok = await ctx.dataSources.tokens.verifyToken(
    token,
    ETokenType.RESET_PASSWORD
  );
  await ctx.dataSources.users.updateUser(tok.user.toString(), {
    password: password,
  });
  return { message: 'Password renewed' };
}
async function sendVerificationEmail(data: unknown, ctx: IContext) {
  const emailVerificationToken =
    await ctx.dataSources.tokens.generateVerifyEmailToken(ctx.user.id);
  await emailSender.sendVerificationEmail(
    ctx.user.email,
    emailVerificationToken
  );
  return { message: 'Verification email sent.' };
}

const verifyEmail = async (req: Request, res: Response) => {
  try {
    if (!req.params.token) {
      throw new Error();
    }
    await tokenService.verifyEmail(req.params.token);
    res.send('Email verified.');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
};
