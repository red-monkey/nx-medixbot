import {
  EGraphQlErrorCode,
  EUserRole,
  IUpdateDoctor,
  TUser,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createUser(data: TUser & { password: string }, ctx: IContext) {
  data.password = 'password1';
  const user = await ctx.dataSources.users.createUser(data);
  return user;
}

interface IGetUserArgs {
  role: EUserRole;
  sortBy: string;
  limit: number;
  page: number;
}
async function getUsers(data: IGetUserArgs, ctx: IContext) {
  const filter = pick(data, ['role']);
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.users.getUsers(filter, options);
  return result;
}

async function getMe(data: unknown, ctx: IContext) {
  const user = await ctx.dataSources.users.getUser(ctx.user.id);
  if (!user) {
    throw new GraphQlApiError(
      'User not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return user;
}

async function getUser(data: { userId: string }, ctx: IContext) {
  const user = await ctx.dataSources.users.getUser(data.userId);
  if (!user) {
    throw new GraphQlApiError(
      'User not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return user;
}

async function updateUser(
  data: { userId: string; data: TUser },
  ctx: IContext
) {
  // User can't update another user
  if (ctx.user.id != data.userId && ctx.user.userRole !== EUserRole.Admin) {
    throw new GraphQlApiError(
      "You don't have access to this resource",
      EGraphQlErrorCode.FORBIDDEN
    );
  }
  return await ctx.dataSources.users.updateUser(data.userId, data.data);
}

async function deleteUser(data: { userId: string }, ctx: IContext) {
  await ctx.dataSources.users.deleteUser(data.userId);
  return 'Deleted';
}

async function getDoctor(data: { userId: string }, ctx: IContext) {
  const result = await ctx.dataSources.users.getDoctor(data.userId);
  return result;
}
async function getDoctors(
  data: { limit: number; page: number },
  ctx: IContext
) {
  return await ctx.dataSources.users.getDoctors({}, data);
}
async function getPatient(data: { userId: string }, ctx: IContext) {
  return await ctx.dataSources.users.getPatient(data.userId);
}
async function updateDoctor(data: IUpdateDoctor, ctx: IContext) {
  return await ctx.dataSources.users.createORUpdateDoctor(ctx.user.id, data);
}

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getMe,
  getDoctor,
  getDoctors,
  getPatient,
  updateDoctor,
};
