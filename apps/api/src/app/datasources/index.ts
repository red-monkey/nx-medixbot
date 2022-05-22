import {
  DoctorModel,
  patientModel,
  TokenModel,
  UserModel,
  BlogModel,
  AppointmentModel,
  MedicalImageModel,
} from '@medixbot/models';
import { AppointmentDataSource } from './Appointment.datasource';
import { BlogDataSource } from './Blog.datasource';
import { TokenDataSource } from './Token.datasource';
import { UserDataSource } from './User.datasource';
import { MedecineImageDataSource } from './MedecineImage.datasource';

export type DataSources = {
  users: UserDataSource;
  tokens: TokenDataSource;
  blogs: BlogDataSource;
  appointments: AppointmentDataSource;
  medicalImages: MedecineImageDataSource;
};

export const dataSources = () => ({
  users: new UserDataSource(UserModel, DoctorModel, patientModel),
  tokens: new TokenDataSource(TokenModel),
  blogs: new BlogDataSource(BlogModel),
  appointemnts: new AppointmentDataSource(AppointmentModel),
  medicalImages: new MedecineImageDataSource(MedicalImageModel),
});
