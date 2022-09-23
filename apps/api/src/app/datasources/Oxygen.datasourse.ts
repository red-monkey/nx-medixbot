import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IOxygenDocument,
  IOxygenModel,
  IOxygenLevelInput,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class OxygenDataSource extends MongoDataSource<
  IOxygenDocument,
  IContext
> {
  private Oxygen: IOxygenModel;

  constructor(OxygenModel: IOxygenModel) {
    super(OxygenModel);
    this.Oxygen = OxygenModel;
  }
  async getOxygenSaturationLevel(levelId: string) {
    return await (
      await this.findOneById(levelId)
    ).populate({ path: 'patient', select: '-password' });
  }

  async getMyOxygenSaturationLevels(
    patientId: string,
    filter: FilterQuery<IOxygenDocument>,
    options: IPaginateOption<unknown>
  ) {
    filter = { patient: patientId };
    options.populate = [{ path: 'patient' }];
    return await this.Oxygen.paginate(filter, options);
  }

  async createOxygenSaturationLevel(oxygen: IOxygenLevelInput) {
    return await this.model.create(oxygen);
  }

  async updateOxygenSaturationLevel(
    levelId: string,
    data: FilterQuery<IOxygenDocument>
  ) {
    const oxygen = await this.getOxygenSaturationLevel(levelId);
    if (!oxygen) {
      throw new GraphQlApiError(
        'Oxygen saturation level not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(oxygen, data);
    await oxygen.save();
    return oxygen.populate({ path: 'patient', select: '-password' });
  }

  async deleteOxygenSaturationLevel(levelId: string) {
    const oxygenLevel = await this.getOxygenSaturationLevel(levelId);
    if (!oxygenLevel) {
      throw new GraphQlApiError(
        'Oxygen saturation level not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await oxygenLevel.remove();
    return oxygenLevel;
  }
}
