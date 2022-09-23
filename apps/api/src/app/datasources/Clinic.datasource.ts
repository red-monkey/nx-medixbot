import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IClinicDocument,
  IClinicModel,
  ICreateClinic,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class ClinicDataSource extends MongoDataSource<
  IClinicDocument,
  IContext
> {
  private Clinic: IClinicModel;

  constructor(ClinicModel: IClinicModel) {
    super(ClinicModel);
    this.Clinic = ClinicModel;
  }

  async getClinic(clinicId: string) {
    return (await this.findOneById(clinicId)).populate('hospital');
  }

  async getClinics(
    filter: FilterQuery<IClinicDocument>,
    options: IPaginateOption<unknown>
  ) {
    options.populate = [{ path: 'hospital' }];
    return await this.Clinic.paginate(filter, options);
  }

  async createClinic(clinic: ICreateClinic) {
    return (await this.model.create(clinic)).populate('hospital');
  }

  async updateClinic(clinicId: string, data: FilterQuery<IClinicDocument>) {
    const clinic = await this.getClinic(clinicId);
    if (!clinic) {
      throw new GraphQlApiError(
        'clinic not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(clinic, data);
    await clinic.save();
    return clinic;
  }

  async deleteClinic(clinicId: string) {
    const clinic = await this.getClinic(clinicId);
    if (!clinic) {
      throw new GraphQlApiError(
        'Clinic not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await clinic.remove();
    return clinic;
  }
}
