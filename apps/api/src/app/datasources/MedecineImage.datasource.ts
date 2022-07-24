import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  IMedicalImageDocument,
  EGraphQlErrorCode,
  IMedicalImageModel,
  TMedecineImage,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class MedecineImageDataSource extends MongoDataSource<
  IMedicalImageDocument,
  IContext
> {
  private MedicalImage: IMedicalImageModel;

  constructor(MedicalImageModel: IMedicalImageModel) {
    super(MedicalImageModel);
    this.MedicalImage = MedicalImageModel;
  }
  async getMedecineImage(medecineImageId: string) {
    return await this.findOneById(medecineImageId);
  }

  async getMedecineImages(
    filter: FilterQuery<IMedicalImageDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.MedicalImage.paginate(filter, options);
  }

  async createMedecineImage(medicalImage: TMedecineImage) {
    return this.model.create(medicalImage);
  }

  async updateMedecineImage(
    medecineImageId: string,
    data: FilterQuery<IMedicalImageDocument>
  ) {
    const medicalImage = await this.getMedecineImage(medecineImageId);
    if (!medicalImage) {
      throw new GraphQlApiError(
        'Medical Image not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(medicalImage, data);
    await medicalImage.save();
    return medicalImage;
  }

  async deleteMedecineImage(medecineImageId: string) {
    const medicalImage = await this.getMedecineImage(medecineImageId);
    if (!medicalImage) {
      throw new GraphQlApiError(
        'Medical not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await medicalImage.remove();
    return medicalImage;
  }
}
