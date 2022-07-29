import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  ILabTestDocument,
  ILabTestModel,
  ICreateLabTest,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class LabTestDataSource extends MongoDataSource<
  ILabTestDocument,
  IContext
> {
  private LabTest: ILabTestModel;

  constructor(LabTestModel: ILabTestModel) {
    super(LabTestModel);
    this.LabTest = LabTestModel;
  }
  async getLabTest(labTestId: string) {
    return await this.findOneById(labTestId);
  }

  async getLabTests(
    filter: FilterQuery<ILabTestDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.LabTest.paginate(filter, options);
  }

  async createLabTest(labTest: ICreateLabTest) {
    return await this.model.create({ ...labTest, patient: labTest.patientRef });
  }

  async updateLabTest(labTestId: string, data: FilterQuery<ILabTestDocument>) {
    const labTest = await this.getLabTest(labTestId);
    if (!labTest) {
      throw new GraphQlApiError(
        'LabTest not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(labTest, data);
    await labTest.save();
    return labTest;
  }

  async deleteLabTest(labTestId: string) {
    const labTest = await this.getLabTest(labTestId);
    if (!labTest) {
      throw new GraphQlApiError(
        'LabTest not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await labTest.remove();
    return labTest;
  }
}
