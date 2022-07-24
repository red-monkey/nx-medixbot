import {
  EAWSS3BucketName,
  EGraphQlErrorCode,
  TMedecineImage,
} from '@medixbot/types';
import { awsService } from '../services';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createMedecineImage(
  input: { data: TMedecineImage },
  ctx: IContext
) {
  const s3 = new awsService.AWSS3();
  const createData = input.data;

  if (input.data.image) {
    const file = await s3.uploadFile(
      input.data.image,
      EAWSS3BucketName.PROFILE_IMAGES
    );
    createData.image = `/rest/images/${file.key}`;
  }
  const medicalImage = await ctx.dataSources.medicalImages.createMedecineImage(
    createData
  );

  return medicalImage;
}

interface IGetMedicalImagesArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getMedecineImages(data: IGetMedicalImagesArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.medicalImages.getMedecineImages(
    filter,
    options
  );
  return result;
}

async function getMedecineImage(
  data: { medicalImageId: string },
  ctx: IContext
) {
  const medicalImage = await ctx.dataSources.medicalImages.getMedecineImage(
    data.medicalImageId
  );
  if (!medicalImage) {
    throw new GraphQlApiError(
      'Medical image not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return medicalImage;
}

async function updateMedecineImage(
  data: { medicalImageId: string; data: TMedecineImage },
  ctx: IContext
) {
  return await ctx.dataSources.medicalImages.updateMedecineImage(
    data.medicalImageId,
    data.data
  );
}

async function deleteMedecineImage(
  data: { medecineImageId: string },
  ctx: IContext
) {
  await ctx.dataSources.medicalImages.deleteMedecineImage(data.medecineImageId);
  return 'Deleted';
}

export default {
  getMedecineImage,
  getMedecineImages,
  createMedecineImage,
  updateMedecineImage,
  deleteMedecineImage,
};
