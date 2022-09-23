import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IBreathinRateDocument,
  IBreathingRateModel,
  IBreathingInput,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class BreathingRateDataSource extends MongoDataSource<
  IBreathinRateDocument,
  IContext
> {
  private BreathingRate: IBreathingRateModel;

  constructor(BreathingRateModel: IBreathingRateModel) {
    super(BreathingRateModel);
    this.BreathingRate = BreathingRateModel;
  }
  async getBreathingData(breathingId: string) {
    return await (
      await this.findOneById(breathingId)
    ).populate({ path: 'patient', select: '-password' });
  }

  async getMyBreathingData(
    patientId: string,
    filter: FilterQuery<IBreathinRateDocument>,
    options: IPaginateOption<unknown>
  ) {
    filter = { patient: patientId };
    options.populate = [{ path: 'patient' }];
    return await this.BreathingRate.paginate(filter, options);
  }

  async createBreathingData(breathingData: IBreathingInput) {
    return await this.model.create(breathingData);
  }

  async updateBreathingData(
    breathingId: string,
    data: FilterQuery<IBreathinRateDocument>
  ) {
    const breathingRate = await this.getBreathingData(breathingId);
    if (!breathingRate) {
      throw new GraphQlApiError(
        'BreathingRate not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(breathingRate, data);
    await breathingRate.save();
    return breathingRate.populate({ path: 'patient', select: '-password' });
  }

  async deleteBreathingData(breathingId: string) {
    const breathingRate = await this.getBreathingData(breathingId);
    if (!breathingRate) {
      throw new GraphQlApiError(
        'BreathingRate data not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await breathingRate.remove();
    return breathingRate;
  }
}
