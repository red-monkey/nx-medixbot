import { EGraphQlErrorCode, ISleepInput } from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createSleepData(data: ISleepInput, ctx: IContext) {
  return await ctx.dataSources.sleeps.createSleepData(data);
}

interface IGetSleepsArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getMySleepsData(data: IGetSleepsArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.sleeps.getMySleepsData(
    ctx.user.id,
    filter,
    options
  );
  return result;
}

async function getSleepData(data: { sleepId: string }, ctx: IContext) {
  const sleep = await ctx.dataSources.sleeps.getSleepData(data.sleepId);
  if (!sleep) {
    throw new GraphQlApiError(
      'Sleep data not found ',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return sleep;
}

async function updateSleepData(
  data: { sleepId: string; data: ISleepInput },
  ctx: IContext
) {
  return await ctx.dataSources.sleeps.updateSleepData(data.sleepId, data.data);
}

async function deleteSleepData(data: { sleepId: string }, ctx: IContext) {
  await ctx.dataSources.sleeps.deleteSleepData(data.sleepId);
  return 'Deleted';
}

export default {
  getSleepData,
  getMySleepsData,
  createSleepData,
  updateSleepData,
  deleteSleepData,
};
