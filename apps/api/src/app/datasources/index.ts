import {
  DoctorModel,
  patientModel,
  TokenModel,
  UserModel,
  BlogModel,
  AppointmentModel,
} from '@medixbot/models';
import { AppointmentDataSource } from './Appointment.datasource';
import { BlogDataSource } from './Blog.datasource';
import { TokenDataSource } from './Token.datasource';
import { UserDataSource } from './User.datasource';

export type DataSources = {
  users: UserDataSource;
  tokens: TokenDataSource;
  blogs: BlogDataSource;
  appointments: AppointmentDataSource;
};

export const dataSources = () => ({
  users: new UserDataSource(UserModel, DoctorModel, patientModel),
  tokens: new TokenDataSource(TokenModel),
  blogs: new BlogDataSource(BlogModel),
  appointemnts: new AppointmentDataSource(AppointmentModel),
});
