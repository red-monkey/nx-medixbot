import { EGraphQlErrorCode, IOxygenLevelInput } from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createOxygenSaturationLevel(
  data: IOxygenLevelInput,
  ctx: IContext
) {
  return await ctx.dataSources.oxygens.createOxygenSaturationLevel(data);
}

interface IGetOxygenLevelsArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getMyOxygenSaturationLevels(
  data: IGetOxygenLevelsArgs,
  ctx: IContext
) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.oxygens.getMyOxygenSaturationLevels(
    ctx.user.id,
    filter,
    options
  );
  return result;
}

async function getOxygenSaturationLevel(
  data: { levelId: string },
  ctx: IContext
) {
  const oxygenLevel = await ctx.dataSources.oxygens.getOxygenSaturationLevel(
    data.levelId
  );
  if (!oxygenLevel) {
    throw new GraphQlApiError(
      'Oxygen Level not found ',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return oxygenLevel;
}

async function updateOxygenSaturationLevel(
  data: { levelId: string; data: IOxygenLevelInput },
  ctx: IContext
) {
  return await ctx.dataSources.oxygens.updateOxygenSaturationLevel(
    data.levelId,
    data.data
  );
}

async function deleteOxygenSaturationLevel(
  data: { levelId: string },
  ctx: IContext
) {
  await ctx.dataSources.oxygens.deleteOxygenSaturationLevel(data.levelId);
  return 'Deleted';
}

export default {
  getOxygenSaturationLevel,
  getMyOxygenSaturationLevels,
  createOxygenSaturationLevel,
  updateOxygenSaturationLevel,
  deleteOxygenSaturationLevel,
};
