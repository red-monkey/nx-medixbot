import { EGraphQlErrorCode, ETokenType, TUser } from '@medixbot/types';
import { IContext } from '../types';
import { emailSender, GraphQlApiError } from '../utils';

async function register(data: TUser, ctx: IContext) {
  const registerData = data;
  const user = await ctx.dataSources.users.createUser(registerData);
  const tokens = await ctx.dataSources.tokens.generateAuthTokens(user.id);
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
  return 'logged out';
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
  return 'Reset password email sent to your inbox.';
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
  return 'Password reseted';
}
async function sendVerificationEmail(data: unknown, ctx: IContext) {
  const emailVerificationToken =
    await ctx.dataSources.tokens.generateVerifyEmailToken(ctx.user.id);
  await emailSender.sendVerificationEmail(
    ctx.user.email,
    emailVerificationToken
  );
  return 'Verification email sent.';
}
async function verifyEmail(data: { verifyEmailToken: string }, ctx: IContext) {
  const { verifyEmailToken } = data;
  const verifyEmailTokenDoc = await ctx.dataSources.tokens.verifyToken(
    verifyEmailToken,
    ETokenType.VERIFY_EMAIL
  );
  const user = await ctx.dataSources.users.getUser(
    verifyEmailTokenDoc.user.toString()
  );
  if (!user) {
    throw new GraphQlApiError(
      'User not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  await ctx.dataSources.tokens.deleteMany(user.id, ETokenType.VERIFY_EMAIL);
  await ctx.dataSources.users.updateUser(user.id, { isEmailVerified: true });
  return 'Email verified';
}

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
