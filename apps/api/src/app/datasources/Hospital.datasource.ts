import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IHospitalDocument,
  IHospitalModel,
  ICreateHospital,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class HospitalDataSource extends MongoDataSource<
  IHospitalDocument,
  IContext
> {
  private Hospital: IHospitalModel;

  constructor(HospitalModel: IHospitalModel) {
    super(HospitalModel);
    this.Hospital = HospitalModel;
  }
  async getHospital(hospitalId: string) {
    return await this.findOneById(hospitalId);
  }

  async getHospitals(
    filter: FilterQuery<IHospitalDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.Hospital.paginate(filter, options);
  }

  async createHospital(hospital: ICreateHospital) {
    return this.model.create(hospital);
  }

  async updateHospital(
    hospitalId: string,
    data: FilterQuery<IHospitalDocument>
  ) {
    const hospital = await this.getHospital(hospitalId);
    if (!hospital) {
      throw new GraphQlApiError(
        'Hospital not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(hospital, data);
    await hospital.save();
    return hospital;
  }

  async deleteHospital(hospitalId: string) {
    const hospital = await this.getHospital(hospitalId);
    if (!hospital) {
      throw new GraphQlApiError(
        'Hospital not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await hospital.remove();
    return hospital;
  }
}
