import {
  DoctorModel,
  patientModel,
  TokenModel,
  UserModel,
} from '@medixbot/models';
import { TokenDataSource } from './Token.datasource';
import { UserDataSource } from './User.datasource';

export type DataSources = {
  users: UserDataSource;
  tokens: TokenDataSource;
};

export const dataSources = () => ({
  users: new UserDataSource(UserModel, DoctorModel, patientModel),
  tokens: new TokenDataSource(TokenModel),
});
