import {
  EGraphQlErrorCode,
  ICreateClinic,
  IUpdateClinic,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createClinic(input: { data: ICreateClinic }, ctx: IContext) {
  const clinicData = input.data;
  const clinic = await ctx.dataSources.clinics.createClinic(clinicData);

  return clinic;
}

interface IGetClinicArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getClinics(data: IGetClinicArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'populate', 'limit', 'page']);
  const result = await ctx.dataSources.clinics.getClinics(filter, options);
  return result;
}

async function getClinic(data: { clinicId: string }, ctx: IContext) {
  const clinic = await ctx.dataSources.clinics.getClinic(data.clinicId);
  if (!clinic) {
    throw new GraphQlApiError(
      'Clinic not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }

  return clinic;
}

async function updateClinic(
  data: { clinicId: string; data: IUpdateClinic },
  ctx: IContext
) {
  return await ctx.dataSources.clinics.updateClinic(data.clinicId, data.data);
}

async function deleteClinic(data: { clinicId: string }, ctx: IContext) {
  await ctx.dataSources.clinics.deleteClinic(data.clinicId);
  return 'Deleted';
}

export default {
  getClinics,
  getClinic,
  updateClinic,
  createClinic,
  deleteClinic,
};
