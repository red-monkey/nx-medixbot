import {
  DoctorModel,
  patientModel,
  TokenModel,
  UserModel,
  BlogModel,
  MedicalImageModel,
  CategoryModel,
  ProductModel,
  OrderModel,
  LabTestModel,
  HospitalModel,
  AppointmentModel,
  ClinicModel,
  BreathingRateModel,
  SleepModel,
  OxygenModel,
  GlucoseModel,
} from '@medixbot/models';

import { BlogDataSource } from './Blog.datasource';
import { TokenDataSource } from './Token.datasource';
import { UserDataSource } from './User.datasource';
import { MedecineImageDataSource } from './MedecineImage.datasource';
import { CategoryDataSource } from './Category.datasource';
import { ProductDataSource } from './Product.datasource';
import { OrderDataSource } from './Order.datasource';
import { LabTestDataSource } from './LabTest.datasource';
import { HospitalDataSource } from './Hospital.datasource';
import { AppointmentDataSource } from './Appointment.datasource';
import { ClinicDataSource } from './Clinic.datasource';
import { BreathingRateDataSource } from './BreathingRate.datasource';
import { SleepDataSource } from './Sleep.datasource';
import { OxygenDataSource } from './Oxygen.datasourse';
import { GlucoseDataSource } from './Glucose.datasourse';

export type DataSources = {
  users: UserDataSource;
  tokens: TokenDataSource;
  blogs: BlogDataSource;
  medicalImages: MedecineImageDataSource;
  categories: CategoryDataSource;
  products: ProductDataSource;
  orders: OrderDataSource;
  labTests: LabTestDataSource;
  hospitals: HospitalDataSource;
  appointments: AppointmentDataSource;
  clinics: ClinicDataSource;
  breathingRates: BreathingRateDataSource;
  oxygens: OxygenDataSource;
  sleeps: SleepDataSource;
  glucoses: GlucoseDataSource;
};

export const dataSources = () => ({
  users: new UserDataSource(UserModel, DoctorModel, patientModel),
  tokens: new TokenDataSource(TokenModel),
  blogs: new BlogDataSource(BlogModel),
  medicalImages: new MedecineImageDataSource(MedicalImageModel),
  categories: new CategoryDataSource(CategoryModel),
  products: new ProductDataSource(ProductModel),
  orders: new OrderDataSource(OrderModel),
  labTests: new LabTestDataSource(LabTestModel),
  hospitals: new HospitalDataSource(HospitalModel),
  appointments: new AppointmentDataSource(AppointmentModel),
  clinics: new ClinicDataSource(ClinicModel),
  breathingRates: new BreathingRateDataSource(BreathingRateModel),
  oxygens: new OxygenDataSource(OxygenModel),
  sleeps: new SleepDataSource(SleepModel),
  glucoses: new GlucoseDataSource(GlucoseModel),
});
