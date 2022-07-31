import {
  EGraphQlErrorCode,
  ICreateHospital,
  IUpdateHospital,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createHospital(data: ICreateHospital, ctx: IContext) {
  return await ctx.dataSources.hospitals.createHospital(data);
}

interface IGetHospitalsArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getHospitals(data: IGetHospitalsArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.hospitals.getHospitals(filter, options);
  return result;
}

async function getHospital(data: { hospitalId: string }, ctx: IContext) {
  const hospital = await ctx.dataSources.hospitals.getHospital(data.hospitalId);
  if (!hospital) {
    throw new GraphQlApiError(
      'Hospital not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return hospital;
}

async function updateHospital(
  data: { hospitalId: string; data: IUpdateHospital },
  ctx: IContext
) {
  return await ctx.dataSources.hospitals.updateHospital(
    data.hospitalId,
    data.data
  );
}

async function deleteHospital(data: { hospitalId: string }, ctx: IContext) {
  await ctx.dataSources.hospitals.deleteHospital(data.hospitalId);
  return 'Deleted';
}

export default {
  getHospitals,
  getHospital,
  createHospital,
  updateHospital,
  deleteHospital,
};
