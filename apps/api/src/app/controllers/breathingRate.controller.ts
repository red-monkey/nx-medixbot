import { IBreathingInput } from '@medixbot/types';
import { IContext } from '../types';
import { pick } from '../utils';

async function createBreathingData(data: IBreathingInput, ctx: IContext) {
  return await ctx.dataSources.breathingRates.createBreathingData(data);
}

interface IGetBreathingDataArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getMyBreathingData(data: IGetBreathingDataArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.breathingRates.getMyBreathingData(
    ctx.user.id,
    filter,
    options
  );
  return result;
}

async function getBreathingData(data: { breathingId: string }, ctx: IContext) {
  return await ctx.dataSources.breathingRates.getBreathingData(
    data.breathingId
  );
}

async function updateBreathingData(
  data: { breathingId: string; data: IBreathingInput },
  ctx: IContext
) {
  return await ctx.dataSources.breathingRates.updateBreathingData(
    data.breathingId,
    data.data
  );
}

async function deleteBreathingData(
  data: { breathingId: string },
  ctx: IContext
) {
  await ctx.dataSources.breathingRates.deleteBreathingData(data.breathingId);
  return 'Deleted';
}

export default {
  getBreathingData,
  getMyBreathingData,
  createBreathingData,
  updateBreathingData,
  deleteBreathingData,
};
