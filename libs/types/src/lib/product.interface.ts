import * as mongoose from 'mongoose';
import { TProduct, TReview } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IReviewDocument
  extends mongoose.Document,
    Omit<TReview, 'id'> {}

export interface IReviewModel extends Model<IReviewDocument> {
  paginate?: (
    filter: FilterQuery<TReview>,
    options: IPaginateOption<unknown>
  ) => Promise<[TReview, unknown]>;
}

export interface IProductDocument
  extends mongoose.Document,
    Omit<TProduct, 'id'> {}

export interface IProductModel extends Model<IProductDocument> {
  paginate?: (
    filter: FilterQuery<TProduct>,
    options: IPaginateOption<unknown>
  ) => Promise<[TProduct, unknown]>;
}
