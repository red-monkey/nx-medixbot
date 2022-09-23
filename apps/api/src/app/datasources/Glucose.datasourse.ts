import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IGlucoseDocument,
  IGlucoseModel,
  IGlucoseInput,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class GlucoseDataSource extends MongoDataSource<
  IGlucoseDocument,
  IContext
> {
  private Glucose: IGlucoseModel;

  constructor(GlucoseModel: IGlucoseModel) {
    super(GlucoseModel);
    this.Glucose = GlucoseModel;
  }
  async getglucoseTest(glucoseId: string) {
    return await (
      await this.findOneById(glucoseId)
    ).populate({ path: 'patient', select: '-password' });
  }

  async getMyGlucoseTests(
    patientId: string,
    filter: FilterQuery<IGlucoseDocument>,
    options: IPaginateOption<unknown>
  ) {
    filter = { patient: patientId };
    options.populate = [{ path: 'patient' }];
    return await this.Glucose.paginate(filter, options);
  }

  async createGlucoseTest(glucose: IGlucoseInput) {
    console.log(glucose);
    return await (
      await this.model.create(glucose)
    ).populate({ path: 'patient', select: '-password' });
  }

  async updateGlucoseTest(
    glucoseId: string,
    data: FilterQuery<IGlucoseDocument>
  ) {
    const glucose = await this.getglucoseTest(glucoseId);
    if (!glucose) {
      throw new GraphQlApiError(
        'Glucose Test not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(glucose, data);
    await glucose.save();
    return glucose.populate({ path: 'patient', select: '-password' });
  }

  async deleteGlucoseTest(glucoseId: string) {
    const glucose = await this.getglucoseTest(glucoseId);
    if (!glucose) {
      throw new GraphQlApiError(
        'Glucose test not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }

    await glucose.remove();
    return glucose;
  }
}
