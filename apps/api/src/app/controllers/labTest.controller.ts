import {
  EGraphQlErrorCode,
  ICreateLabTest,
  IUpdateLabTest,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createLabTest(
  input: { data: ICreateLabTest & { doctor: string } },
  ctx: IContext
) {
  const createData = input.data;
  createData.doctor = ctx.user.id;
  const labTest = await ctx.dataSources.labTests.createLabTest(createData);

  return labTest;
}

interface IGetLabTestArgs {
  sortBy: string;
  limit: number;
  page: number;
}

async function getLabTests(data: IGetLabTestArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.labTests.getLabTests(filter, options);
  return result;
}

async function getLabTest(data: { labTestId: string }, ctx: IContext) {
  const labtest = await ctx.dataSources.labTests.getLabTest(data.labTestId);
  if (!labtest) {
    throw new GraphQlApiError(
      'LabTest not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return labtest;
}

async function updateLabTest(
  data: { labTestId: string; data: IUpdateLabTest },
  ctx: IContext
) {
  return await ctx.dataSources.labTests.updateLabTest(
    data.labTestId,
    data.data
  );
}

async function deleteLabTest(data: { labTestId: string }, ctx: IContext) {
  await ctx.dataSources.labTests.deleteLabTest(data.labTestId);
  return 'Deleted';
}

export default {
  getLabTest,
  getLabTests,
  createLabTest,
  updateLabTest,
  deleteLabTest,
};
