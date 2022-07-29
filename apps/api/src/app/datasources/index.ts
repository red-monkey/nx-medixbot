import {
  DoctorModel,
  patientModel,
  TokenModel,
  UserModel,
  BlogModel,
  AppointmentModel,
  MedicalImageModel,
  CategoryModel,
  ProductModel,
  OrderModel,
  LabTestModel,
} from '@medixbot/models';
import { AppointmentDataSource } from './Appointment.datasource';
import { BlogDataSource } from './Blog.datasource';
import { TokenDataSource } from './Token.datasource';
import { UserDataSource } from './User.datasource';
import { MedecineImageDataSource } from './MedecineImage.datasource';
import { CategoryDataSource } from './Category.datasource';
import { ProductDataSource } from './Product.datasource';
import { OrderDataSource } from './Order.datasource';
import { LabTestDataSource } from './LabTest.datasource';

export type DataSources = {
  users: UserDataSource;
  tokens: TokenDataSource;
  blogs: BlogDataSource;
  appointments: AppointmentDataSource;
  medicalImages: MedecineImageDataSource;
  categories: CategoryDataSource;
  products: ProductDataSource;
  orders: OrderDataSource;
  labTests: LabTestDataSource;
};

export const dataSources = () => ({
  users: new UserDataSource(UserModel, DoctorModel, patientModel),
  tokens: new TokenDataSource(TokenModel),
  blogs: new BlogDataSource(BlogModel),
  appointemnts: new AppointmentDataSource(AppointmentModel),
  medicalImages: new MedecineImageDataSource(MedicalImageModel),
  categories: new CategoryDataSource(CategoryModel),
  products: new ProductDataSource(ProductModel),
  orders: new OrderDataSource(OrderModel),
  labTests: new LabTestDataSource(LabTestModel),
});
