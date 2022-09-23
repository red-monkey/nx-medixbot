import { IGlucoseInput } from '@medixbot/types';
import { IContext } from '../types';
import { pick } from '../utils';

async function createGlucoseTest(data: IGlucoseInput, ctx: IContext) {
  return await ctx.dataSources.glucoses.createGlucoseTest(data);
}

interface IGetGlucosesArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getMyGlucoseTests(data: IGetGlucosesArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.glucoses.getMyGlucoseTests(
    ctx.user.id,
    filter,
    options
  );
  return result;
}

async function getGlucoseTest(data: { glucoseId: string }, ctx: IContext) {
  return await ctx.dataSources.glucoses.getglucoseTest(data.glucoseId);
}

async function updateGlucoseTest(
  data: { glucoseId: string; data: IGlucoseInput },
  ctx: IContext
) {
  return await ctx.dataSources.oxygens.updateOxygenSaturationLevel(
    data.glucoseId,
    data.data
  );
}

async function deleteGlucoseTest(data: { glucoseId: string }, ctx: IContext) {
  await ctx.dataSources.glucoses.deleteGlucoseTest(data.glucoseId);
  return 'Deleted';
}

export default {
  getMyGlucoseTests,
  getGlucoseTest,
  createGlucoseTest,
  updateGlucoseTest,
  deleteGlucoseTest,
};
