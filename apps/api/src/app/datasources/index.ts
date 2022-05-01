import {
  DoctorModel,
  patientModel,
  TokenModel,
  UserModel,
  BlogModel,
} from '@medixbot/models';
import { BlogDataSource } from './Blog.datasource';
import { TokenDataSource } from './Token.datasource';
import { UserDataSource } from './User.datasource';

export type DataSources = {
  users: UserDataSource;
  tokens: TokenDataSource;
  blogs: BlogDataSource;
};

export const dataSources = () => ({
  users: new UserDataSource(UserModel, DoctorModel, patientModel),
  tokens: new TokenDataSource(TokenModel),
  blogs: new BlogDataSource(BlogModel),
});
