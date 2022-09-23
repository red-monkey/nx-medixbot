import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  ISleepDocument,
  ISleepModel,
  ISleepInput,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class SleepDataSource extends MongoDataSource<ISleepDocument, IContext> {
  private Sleep: ISleepModel;

  constructor(SleepModel: ISleepModel) {
    super(SleepModel);
    this.Sleep = SleepModel;
  }

  async getSleepData(sleepId: string) {
    return await (
      await this.findOneById(sleepId)
    ).populate({ path: 'patient', select: '-password' });
  }

  async getMySleepsData(
    patientId: string,
    filter: FilterQuery<ISleepDocument>,
    options: IPaginateOption<unknown>
  ) {
    filter = { patient: patientId };
    options.populate = [{ path: 'patient' }];
    return await this.Sleep.paginate(filter, options);
  }

  async createSleepData(sleep: ISleepInput) {
    return await this.model.create(sleep);
  }

  async updateSleepData(sleepId: string, data: FilterQuery<ISleepDocument>) {
    const sleep = await this.getSleepData(sleepId);
    if (!sleep) {
      throw new GraphQlApiError(
        'Sleep data not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(sleep, data);
    await sleep.save();
    return sleep.populate({ path: 'patient', select: '-password' });
  }

  async deleteSleepData(sleepId: string) {
    const sleep = await this.getSleepData(sleepId);
    if (!sleep) {
      throw new GraphQlApiError(
        'Sleep data not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await sleep.remove();
    return sleep;
  }
}
