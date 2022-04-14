import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  TUser,
  IUserDocument,
  IUserModel,
  EGraphQlErrorCode,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class UserDataSource extends MongoDataSource<IUserDocument, IContext> {
  private User: IUserModel;
  constructor(UserModel: IUserModel) {
    super(UserModel);
    this.User = UserModel;
  }
  getUser(userId: string) {
    return this.findOneById(userId);
  }

  getUsers(
    filter: FilterQuery<IUserDocument>,
    options: IPaginateOption<unknown>
  ) {
    return this.User.paginate(filter, options);
  }

  getUserByField(fields: FilterQuery<IUserDocument>) {
    return this.model.findOne(fields);
  }

  getUserByUsername(username: string) {
    return this.model.findOne({
      $or: [{ email: username }, { tel: username }],
    });
  }

  async createUser(user: TUser) {
    if (await this.User.isEmailTaken(user.email)) {
      throw new GraphQlApiError(
        'This email is already taken!',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_SUPPORTED
      );
    }
    return this.model.create(user);
  }

  async updateUser(userId: string, data: FilterQuery<IUserDocument>) {
    const user = await this.getUser(userId);
    if (!user) {
      throw new GraphQlApiError(
        'User not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    if (
      data.email &&
      (await this.User.isEmailTaken(data.email.toString(), userId))
    ) {
      throw new GraphQlApiError(
        'Email already taken',
        EGraphQlErrorCode.BAD_USER_INPUT
      );
    }
    Object.assign(user, data);
    await user.save();
    return user;
  }

  async deleteUser(userId: string) {
    const user = await this.getUser(userId);
    if (!user) {
      throw new GraphQlApiError(
        'User not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await user.remove();
    return user;
  }
}
