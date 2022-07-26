import * as mongoose from 'mongoose';
import { TMedecineImage } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IMedicalImageDocument
  extends mongoose.Document,
    Omit<TMedecineImage, 'id'> {}

export interface IMedicalImageModel extends Model<IMedicalImageDocument> {
  paginate?: (
    filter: FilterQuery<TMedecineImage>,
    options: IPaginateOption<unknown>
  ) => Promise<[TMedecineImage, unknown]>;
}
