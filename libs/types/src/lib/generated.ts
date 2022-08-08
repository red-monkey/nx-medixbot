import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum EAppointmentStatus {
  Canceled = 'Canceled',
  Completed = 'Completed',
  Missed = 'Missed',
  Pending = 'Pending',
}

export enum EAvailabilityStatus {
  Available = 'available',
  Unavailable = 'unavailable',
}

export enum EGender {
  Female = 'female',
  Male = 'male',
  Others = 'others',
}

export enum EMembership {
  Employer = 'Employer',
  Family = 'Family',
  Partner = 'Partner',
  Referrer = 'Referrer',
}

export enum EUserAccountStatus {
  Closed = 'closed',
  Opened = 'opened',
  Unverified = 'unverified',
}

export enum EUserRole {
  Admin = 'admin',
  Doctor = 'doctor',
  Patient = 'patient',
}

export enum EppointmentStatus {
  Canceled = 'Canceled',
  Completed = 'Completed',
  Missed = 'Missed',
  Pending = 'Pending',
}

export type IAvailability = {
  day?: InputMaybe<Scalars['Int']>;
  times?: InputMaybe<Array<InputMaybe<ITime>>>;
};

export type ICreateAppointment = {
  city?: InputMaybe<Scalars['String']>;
  clinic: Scalars['ID'];
  conditions?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  date: Scalars['String'];
  district?: InputMaybe<Scalars['String']>;
  doctor: Scalars['ID'];
  hospital: Scalars['ID'];
  symptoms?: InputMaybe<Array<Scalars['String']>>;
  time: Scalars['String'];
};

export type ICreateBlog = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ICreateCategory = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ICreateClinic = {
  description: Scalars['String'];
  hospital: Scalars['ID'];
  name: Scalars['String'];
};

export type ICreateHospital = {
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  district: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
  tracking_number: Scalars['String'];
};

export type ICreateLabTest = {
  data?: InputMaybe<Scalars['String']>;
  institutionName?: InputMaybe<Scalars['String']>;
  patientRef?: InputMaybe<Scalars['ID']>;
  processName?: InputMaybe<Scalars['String']>;
  referenceValue?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['String']>;
  resultUnit?: InputMaybe<Scalars['String']>;
};

export type ICreateMedecineImage = {
  comment?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  hospital_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  report?: InputMaybe<Scalars['String']>;
  user: Scalars['ID'];
};

export type ICreateOrder = {
  itemsPrice?: InputMaybe<Scalars['Float']>;
  orderItems?: InputMaybe<Array<InputMaybe<IOrderItem>>>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<IShippingAddress>;
  shippingPrice?: InputMaybe<Scalars['Float']>;
  taxPrice?: InputMaybe<Scalars['Float']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
};

export type ICreateProduct = {
  brand?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  countInStock?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type ICreateReview = {
  comment?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productRef?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<Scalars['Float']>;
};

export type IDocument = {
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type IOrderItem = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  product: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Float']>;
};

export type IPaymentResult = {
  email_address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type IRegisterUser = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  gender: EGender;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  membership?: InputMaybe<EMembership>;
  password: Scalars['String'];
  postCode?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['Upload']>;
  state?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
  userRole: EUserRole;
};

export type IShippingAddress = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type ITime = {
  hour?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['String']>;
};

export type IUpdateAppointment = {
  city?: InputMaybe<Scalars['String']>;
  clinic?: InputMaybe<Scalars['ID']>;
  conditions?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  doctor?: InputMaybe<Scalars['ID']>;
  hospital?: InputMaybe<Scalars['ID']>;
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  time?: InputMaybe<Scalars['String']>;
};

export type IUpdateBlog = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateCategory = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateClinic = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateDoctor = {
  about?: InputMaybe<Scalars['String']>;
  availability?: InputMaybe<Array<InputMaybe<IAvailability>>>;
  documents?: InputMaybe<Array<InputMaybe<IDocument>>>;
  domain?: InputMaybe<Scalars['String']>;
  unAvailability?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IUpdateHospital = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tracking_number?: InputMaybe<Scalars['String']>;
};

export type IUpdateLabTest = {
  data?: InputMaybe<Scalars['String']>;
  institutionName?: InputMaybe<Scalars['String']>;
  patientRef?: InputMaybe<Scalars['ID']>;
  processName?: InputMaybe<Scalars['String']>;
  referenceValue?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['String']>;
  resultUnit?: InputMaybe<Scalars['String']>;
};

export type IUpdateMedecineImage = {
  comment?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  hospital_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['Upload']>;
  report?: InputMaybe<Scalars['String']>;
  user: Scalars['ID'];
};

export type IUpdateOrder = {
  itemsPrice?: InputMaybe<Scalars['Float']>;
  orderItems?: InputMaybe<Array<InputMaybe<IOrderItem>>>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<IShippingAddress>;
  shippingPrice?: InputMaybe<Scalars['Float']>;
  taxPrice?: InputMaybe<Scalars['Float']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
};

export type IUpdateProduct = {
  brand?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  countInStock?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  rating?: InputMaybe<Scalars['Float']>;
};

export type IUpdateUser = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<EGender>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  membership?: InputMaybe<EMembership>;
  postCode?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['Upload']>;
  state?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  createBlog?: Maybe<TBlog>;
  createCategory?: Maybe<TCategory>;
  createClinic?: Maybe<TClinic>;
  createHospital?: Maybe<THospital>;
  createLabTest?: Maybe<TLabTest>;
  createMedecineImage?: Maybe<TMedecineImage>;
  createOrder?: Maybe<TOrder>;
  createProduct?: Maybe<TProduct>;
  createProductReview?: Maybe<Scalars['String']>;
  createUser?: Maybe<TUser>;
  deleteAppointment: Scalars['String'];
  deleteBlog: Scalars['String'];
  deleteCategory: Scalars['String'];
  deleteClinic: Scalars['String'];
  deleteHospital: Scalars['String'];
  deleteLabTest: Scalars['String'];
  deleteMedecineImage: Scalars['String'];
  deleteProduct: Scalars['String'];
  deleteUser: Scalars['String'];
  forgotPassword: TNormalResponse;
  login: TAuthSuccess;
  logout: TNormalResponse;
  makeAppointment?: Maybe<TAppointment>;
  refreshTokens: TToken;
  register: TAuthSuccess;
  resetPassword: TNormalResponse;
  sendVerificationEmail: TNormalResponse;
  updateAccount?: Maybe<TUser>;
  updateAppointment?: Maybe<TAppointment>;
  updateAppointmentStatus?: Maybe<TAppointment>;
  updateBlog?: Maybe<TBlog>;
  updateCategory?: Maybe<TCategory>;
  updateClinic?: Maybe<TClinic>;
  updateDoctorInfo: Scalars['String'];
  updateHospital?: Maybe<THospital>;
  updateLabTest?: Maybe<TLabTest>;
  updateMedecineImage?: Maybe<TMedecineImage>;
  updateOrder?: Maybe<TOrder>;
  updateOrderToDelivered: TOrder;
  updateOrderToPaid?: Maybe<TOrder>;
  updateProduct?: Maybe<TProduct>;
};

export type MutationCreateBlogArgs = {
  data: ICreateBlog;
};

export type MutationCreateCategoryArgs = {
  data: ICreateCategory;
};

export type MutationCreateClinicArgs = {
  data: ICreateClinic;
};

export type MutationCreateHospitalArgs = {
  data: ICreateHospital;
};

export type MutationCreateLabTestArgs = {
  data: ICreateLabTest;
};

export type MutationCreateMedecineImageArgs = {
  data: ICreateMedecineImage;
};

export type MutationCreateOrderArgs = {
  data: ICreateOrder;
};

export type MutationCreateProductArgs = {
  data: ICreateProduct;
};

export type MutationCreateProductReviewArgs = {
  data: ICreateReview;
  productId: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  email: Scalars['String'];
  gender?: InputMaybe<EGender>;
  name: Scalars['String'];
  surname: Scalars['String'];
  userRole?: InputMaybe<EUserRole>;
};

export type MutationDeleteAppointmentArgs = {
  appointmentId: Scalars['ID'];
};

export type MutationDeleteBlogArgs = {
  blogId: Scalars['ID'];
};

export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type MutationDeleteClinicArgs = {
  clinicId: Scalars['ID'];
};

export type MutationDeleteHospitalArgs = {
  hospitalId: Scalars['ID'];
};

export type MutationDeleteLabTestArgs = {
  labTestId: Scalars['ID'];
};

export type MutationDeleteMedecineImageArgs = {
  medecineImageId: Scalars['ID'];
};

export type MutationDeleteProductArgs = {
  productId: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationLogoutArgs = {
  refreshToken: Scalars['String'];
};

export type MutationMakeAppointmentArgs = {
  data: ICreateAppointment;
};

export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRegisterArgs = {
  data: IRegisterUser;
};

export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationUpdateAccountArgs = {
  data: IUpdateUser;
};

export type MutationUpdateAppointmentArgs = {
  appointmentId: Scalars['ID'];
  data: IUpdateAppointment;
};

export type MutationUpdateAppointmentStatusArgs = {
  appointmentId: Scalars['ID'];
  newStatus: EAppointmentStatus;
};

export type MutationUpdateBlogArgs = {
  data: IUpdateBlog;
};

export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID'];
  data: IUpdateCategory;
};

export type MutationUpdateClinicArgs = {
  clinicId: Scalars['ID'];
  data: IUpdateClinic;
};

export type MutationUpdateDoctorInfoArgs = {
  data: IUpdateDoctor;
};

export type MutationUpdateHospitalArgs = {
  data: IUpdateHospital;
  hospitalId: Scalars['ID'];
};

export type MutationUpdateLabTestArgs = {
  data: IUpdateLabTest;
  labTestId: Scalars['ID'];
};

export type MutationUpdateMedecineImageArgs = {
  data: IUpdateMedecineImage;
};

export type MutationUpdateOrderArgs = {
  data: IUpdateOrder;
  orderId: Scalars['ID'];
};

export type MutationUpdateOrderToDeliveredArgs = {
  orderId: Scalars['ID'];
};

export type MutationUpdateOrderToPaidArgs = {
  data: IPaymentResult;
  orderId: Scalars['ID'];
};

export type MutationUpdateProductArgs = {
  data: IUpdateProduct;
  productId: Scalars['ID'];
};

export type Query = {
  doctor?: Maybe<TDoctor>;
  doctors: TDoctorList;
  getAppointment?: Maybe<TAppointment>;
  getAppointments: TPaginatedAppointment;
  getBlog?: Maybe<TBlog>;
  getBlogs: TPaginatedBlogs;
  getCategories: TPaginatedCategories;
  getCategory?: Maybe<TCategory>;
  getClinic?: Maybe<TClinic>;
  getClinics: TPaginatedClinics;
  getHospital?: Maybe<THospital>;
  getHospitals: TPaginatedHospital;
  getLabTest?: Maybe<TLabTest>;
  getLabTests: TPaginatedLabTests;
  getMedecineImage?: Maybe<TMedecineImage>;
  getMedecineImages: TPaginatedMedecineImage;
  getMyAppointments?: Maybe<TPaginatedAppointment>;
  getMyOrders: TPaginatedOrders;
  getOrder?: Maybe<TOrder>;
  getOrders: TPaginatedOrders;
  getProduct?: Maybe<TProduct>;
  getProducts: TPaginatedProducts;
  getTopProducts: TPaginatedProducts;
  me?: Maybe<TUser>;
  patient?: Maybe<TPatient>;
  predictImage?: Maybe<TClassificationResult>;
  user?: Maybe<TUser>;
  users: TPaginatedUsers;
};

export type QueryDoctorArgs = {
  userId: Scalars['ID'];
};

export type QueryDoctorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetAppointmentArgs = {
  appointmentId: Scalars['ID'];
};

export type QueryGetAppointmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetBlogArgs = {
  blogId: Scalars['ID'];
};

export type QueryGetBlogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type QueryGetClinicArgs = {
  clinicId: Scalars['ID'];
};

export type QueryGetClinicsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetHospitalArgs = {
  hospitalId: Scalars['ID'];
};

export type QueryGetHospitalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetLabTestArgs = {
  labTestId: Scalars['ID'];
};

export type QueryGetLabTestsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetMedecineImageArgs = {
  medecineImageId: Scalars['ID'];
};

export type QueryGetMedecineImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetOrderArgs = {
  orderId: Scalars['ID'];
};

export type QueryGetOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetProductArgs = {
  productId: Scalars['ID'];
};

export type QueryGetProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryGetTopProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryPatientArgs = {
  userId: Scalars['ID'];
};

export type QueryPredictImageArgs = {
  image: Scalars['Upload'];
};

export type QueryUserArgs = {
  userId: Scalars['ID'];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  userRole?: InputMaybe<EUserRole>;
};

export type TAppointment = {
  city?: Maybe<Scalars['String']>;
  clinic?: Maybe<TClinic>;
  conditions?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  doctor?: Maybe<TUser>;
  doctorJoinAt?: Maybe<Scalars['String']>;
  doctorQuitAt?: Maybe<Scalars['String']>;
  hospital?: Maybe<THospital>;
  id?: Maybe<Scalars['ID']>;
  patient?: Maybe<TUser>;
  patientJoinAt?: Maybe<Scalars['String']>;
  patientQuitAt?: Maybe<Scalars['String']>;
  status?: Maybe<EAppointmentStatus>;
  symptoms?: Maybe<Array<Maybe<Scalars['String']>>>;
  time?: Maybe<Scalars['String']>;
};

export type TAuthSuccess = {
  tokens: TToken;
  user: TUser;
};

export type TAvailability = {
  day?: Maybe<Scalars['Int']>;
  times?: Maybe<Array<Maybe<TTime>>>;
};

export type TBlog = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TCategory = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type TClassificationResult = {
  accuracy?: Maybe<Scalars['String']>;
  foodName?: Maybe<Scalars['String']>;
  nutrients?: Maybe<TNutrient>;
  referenceWeight?: Maybe<Scalars['String']>;
};

export type TClinic = {
  description?: Maybe<Scalars['String']>;
  hospital?: Maybe<THospital>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type TDoctor = {
  about?: Maybe<Scalars['String']>;
  availability?: Maybe<Array<Maybe<TAvailability>>>;
  documents?: Maybe<Array<Maybe<TDocument>>>;
  domain?: Maybe<Scalars['String']>;
  info?: Maybe<TUser>;
  unAvailability?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TDoctorList = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TDoctor>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TDocument = {
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type THospital = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tracking_number?: Maybe<Scalars['String']>;
};

export type TLabTest = {
  data?: Maybe<Scalars['String']>;
  doctor?: Maybe<TUser>;
  id?: Maybe<Scalars['ID']>;
  institutionName?: Maybe<Scalars['String']>;
  patient?: Maybe<TUser>;
  processName?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  resultUnit?: Maybe<Scalars['String']>;
};

export type TMedecineImage = {
  comment?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  hospital_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  report?: Maybe<Scalars['String']>;
  user?: Maybe<TUser>;
};

export type TNormalResponse = {
  message: Scalars['String'];
};

export type TNutrient = {
  carb?: Maybe<Scalars['String']>;
  fat?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['String']>;
};

export type TOrder = {
  deliveredAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isDelivered?: Maybe<Scalars['Boolean']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  orderItems?: Maybe<Array<Maybe<TOrderItem>>>;
  paidAt?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentResult?: Maybe<TPaymentResult>;
  shippingAddress?: Maybe<TShippingAddress>;
  shippingPrice?: Maybe<Scalars['Float']>;
  taxPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  user?: Maybe<TUser>;
};

export type TOrderItem = {
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type TPaginatedAppointment = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TAppointment>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedBlogs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TBlog>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedCategories = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TCategory>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedClinics = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TClinic>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedHospital = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<THospital>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedLabTests = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TLabTest>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedMedecineImage = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TMedecineImage>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedOrders = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TOrder>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedProducts = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TProduct>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPaginatedUsers = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TUser>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type TPatient = {
  info?: Maybe<TUser>;
};

export type TPaymentResult = {
  email_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  update_time?: Maybe<Scalars['String']>;
};

export type TProduct = {
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<TCategory>;
  countInStock?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numReviews?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<TReview>>>;
  user?: Maybe<TUser>;
};

export type TReview = {
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  user?: Maybe<TUser>;
};

export type TShippingAddress = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type TTime = {
  hour?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['String']>;
};

export type TToken = {
  access: TTokenFormat;
  refresh: TTokenFormat;
};

export type TTokenFormat = {
  expires: Scalars['String'];
  token: Scalars['String'];
};

export type TUploadedFileResponse = {
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  url: Scalars['String'];
};

export type TUser = {
  accountStatus?: Maybe<EUserAccountStatus>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<EGender>;
  id?: Maybe<Scalars['ID']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  membership?: Maybe<EMembership>;
  postCode?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  registeredWith?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  userRole?: Maybe<EUserRole>;
};

export type AppointmentFieldsFragment = {
  id?: string | null;
  status?: EAppointmentStatus | null;
  date?: string | null;
  time?: string | null;
  conditions?: string | null;
  symptoms?: Array<string | null> | null;
  district?: string | null;
  city?: string | null;
  country?: string | null;
  doctorJoinAt?: string | null;
  doctorQuitAt?: string | null;
  patientJoinAt?: string | null;
  patientQuitAt?: string | null;
  doctor?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
  patient?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
  hospital?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    location?: string | null;
    tracking_number?: string | null;
  } | null;
  clinic?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
  } | null;
};

export type GetAppointmentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAppointmentsQuery = {
  getAppointments: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      status?: EAppointmentStatus | null;
      date?: string | null;
      time?: string | null;
      conditions?: string | null;
      symptoms?: Array<string | null> | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      doctorJoinAt?: string | null;
      doctorQuitAt?: string | null;
      patientJoinAt?: string | null;
      patientQuitAt?: string | null;
      doctor?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
      patient?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
      clinic?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        hospital?: {
          id?: string | null;
          name?: string | null;
          description?: string | null;
          district?: string | null;
          city?: string | null;
          country?: string | null;
          location?: string | null;
          tracking_number?: string | null;
        } | null;
      } | null;
    } | null>;
  };
};

export type GetAppointmentQueryVariables = Exact<{
  appointmentId: Scalars['ID'];
}>;

export type GetAppointmentQuery = {
  getAppointment?: {
    id?: string | null;
    status?: EAppointmentStatus | null;
    date?: string | null;
    time?: string | null;
    conditions?: string | null;
    symptoms?: Array<string | null> | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    doctorJoinAt?: string | null;
    doctorQuitAt?: string | null;
    patientJoinAt?: string | null;
    patientQuitAt?: string | null;
    doctor?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    patient?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
    clinic?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
    } | null;
  } | null;
};

export type GetMyAppointmentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyAppointmentsQuery = {
  getMyAppointments?: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      status?: EAppointmentStatus | null;
      date?: string | null;
      time?: string | null;
      conditions?: string | null;
      symptoms?: Array<string | null> | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      doctorJoinAt?: string | null;
      doctorQuitAt?: string | null;
      patientJoinAt?: string | null;
      patientQuitAt?: string | null;
      doctor?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
      patient?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
      clinic?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        hospital?: {
          id?: string | null;
          name?: string | null;
          description?: string | null;
          district?: string | null;
          city?: string | null;
          country?: string | null;
          location?: string | null;
          tracking_number?: string | null;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type MakeAppointmentMutationVariables = Exact<{
  data: ICreateAppointment;
}>;

export type MakeAppointmentMutation = {
  makeAppointment?: {
    id?: string | null;
    status?: EAppointmentStatus | null;
    date?: string | null;
    time?: string | null;
    conditions?: string | null;
    symptoms?: Array<string | null> | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    doctorJoinAt?: string | null;
    doctorQuitAt?: string | null;
    patientJoinAt?: string | null;
    patientQuitAt?: string | null;
    doctor?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    patient?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
    clinic?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
    } | null;
  } | null;
};

export type UpdateAppointmentMutationVariables = Exact<{
  appointmentId: Scalars['ID'];
  data: IUpdateAppointment;
}>;

export type UpdateAppointmentMutation = {
  updateAppointment?: {
    id?: string | null;
    status?: EAppointmentStatus | null;
    date?: string | null;
    time?: string | null;
    conditions?: string | null;
    symptoms?: Array<string | null> | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    doctorJoinAt?: string | null;
    doctorQuitAt?: string | null;
    patientJoinAt?: string | null;
    patientQuitAt?: string | null;
    doctor?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    patient?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
    clinic?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
    } | null;
  } | null;
};

export type UpdateAppointmentStatusMutationVariables = Exact<{
  appointmentId: Scalars['ID'];
  newStatus: EAppointmentStatus;
}>;

export type UpdateAppointmentStatusMutation = {
  updateAppointmentStatus?: {
    id?: string | null;
    status?: EAppointmentStatus | null;
    date?: string | null;
    time?: string | null;
    conditions?: string | null;
    symptoms?: Array<string | null> | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    doctorJoinAt?: string | null;
    doctorQuitAt?: string | null;
    patientJoinAt?: string | null;
    patientQuitAt?: string | null;
    doctor?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    patient?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
    clinic?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
    } | null;
  } | null;
};

export type DeleteAppointmentMutationVariables = Exact<{
  appointmentId: Scalars['ID'];
}>;

export type DeleteAppointmentMutation = { deleteAppointment: string };

export type CategoryFieldsFragment = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesQuery = {
  getCategories: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      name?: string | null;
      description?: string | null;
    } | null>;
  };
};

export type GetCategoryQueryVariables = Exact<{
  categoryId: Scalars['ID'];
}>;

export type GetCategoryQuery = {
  getCategory?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
  } | null;
};

export type CreateCategoryMutationVariables = Exact<{
  data: ICreateCategory;
}>;

export type CreateCategoryMutation = {
  createCategory?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
  } | null;
};

export type UpdateCategoryMutationVariables = Exact<{
  categoryId: Scalars['ID'];
  data: IUpdateCategory;
}>;

export type UpdateCategoryMutation = {
  updateCategory?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
  } | null;
};

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['ID'];
}>;

export type DeleteCategoryMutation = { deleteCategory: string };

export type ClinicFieldsFragment = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  hospital?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    location?: string | null;
    tracking_number?: string | null;
  } | null;
};

export type CreateClinicMutationVariables = Exact<{
  data: ICreateClinic;
}>;

export type CreateClinicMutation = {
  createClinic?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  clinicId: Scalars['ID'];
}>;

export type GetUserQuery = {
  getClinic?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
  } | null;
};

export type GetClinicsQueryVariables = Exact<{ [key: string]: never }>;

export type GetClinicsQuery = {
  getClinics: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      name?: string | null;
      description?: string | null;
      hospital?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        district?: string | null;
        city?: string | null;
        country?: string | null;
        location?: string | null;
        tracking_number?: string | null;
      } | null;
    } | null>;
  };
};

export type UpdateClinicMutationVariables = Exact<{
  clinicId: Scalars['ID'];
  data: IUpdateClinic;
}>;

export type UpdateClinicMutation = {
  updateClinic?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    hospital?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null;
  } | null;
};

export type DeleteClinicMutationVariables = Exact<{
  clinicId: Scalars['ID'];
}>;

export type DeleteClinicMutation = { deleteClinic: string };

export type HospitalFieldsFragment = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  district?: string | null;
  city?: string | null;
  country?: string | null;
  location?: string | null;
  tracking_number?: string | null;
};

export type CreateHospitalMutationVariables = Exact<{
  data: ICreateHospital;
}>;

export type CreateHospitalMutation = {
  createHospital?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    location?: string | null;
    tracking_number?: string | null;
  } | null;
};

export type GetHospitalsQueryVariables = Exact<{ [key: string]: never }>;

export type GetHospitalsQuery = {
  getHospitals: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      name?: string | null;
      description?: string | null;
      district?: string | null;
      city?: string | null;
      country?: string | null;
      location?: string | null;
      tracking_number?: string | null;
    } | null>;
  };
};

export type UpdateHospitalMutationVariables = Exact<{
  hospitalId: Scalars['ID'];
  data: IUpdateHospital;
}>;

export type UpdateHospitalMutation = {
  updateHospital?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    district?: string | null;
    city?: string | null;
    country?: string | null;
    location?: string | null;
    tracking_number?: string | null;
  } | null;
};

export type DeleteHospitalMutationVariables = Exact<{
  hospitalId: Scalars['ID'];
}>;

export type DeleteHospitalMutation = { deleteHospital: string };

export type OrderFieldsFragment = {
  id?: string | null;
  isDelivered?: boolean | null;
  isPaid?: boolean | null;
  deliveredAt?: string | null;
  paidAt?: string | null;
  paymentMethod?: string | null;
  shippingAddress?: {
    address?: string | null;
    city?: string | null;
    country?: string | null;
    postalCode?: string | null;
  } | null;
  paymentResult?: {
    id?: string | null;
    email_address?: string | null;
    status?: string | null;
    update_time?: string | null;
  } | null;
  user?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
  orderItems?: Array<{
    image?: string | null;
    name?: string | null;
    price?: number | null;
    quantity?: number | null;
    product?: string | null;
  } | null> | null;
};

export type GetOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrdersQuery = {
  getOrders: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      isDelivered?: boolean | null;
      isPaid?: boolean | null;
      deliveredAt?: string | null;
      paidAt?: string | null;
      paymentMethod?: string | null;
      shippingAddress?: {
        address?: string | null;
        city?: string | null;
        country?: string | null;
        postalCode?: string | null;
      } | null;
      paymentResult?: {
        id?: string | null;
        email_address?: string | null;
        status?: string | null;
        update_time?: string | null;
      } | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
      orderItems?: Array<{
        image?: string | null;
        name?: string | null;
        price?: number | null;
        quantity?: number | null;
        product?: string | null;
      } | null> | null;
    } | null>;
  };
};

export type GetOrderQueryVariables = Exact<{
  orderId: Scalars['ID'];
}>;

export type GetOrderQuery = {
  getOrder?: {
    id?: string | null;
    isDelivered?: boolean | null;
    isPaid?: boolean | null;
    deliveredAt?: string | null;
    paidAt?: string | null;
    paymentMethod?: string | null;
    shippingAddress?: {
      address?: string | null;
      city?: string | null;
      country?: string | null;
      postalCode?: string | null;
    } | null;
    paymentResult?: {
      id?: string | null;
      email_address?: string | null;
      status?: string | null;
      update_time?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    orderItems?: Array<{
      image?: string | null;
      name?: string | null;
      price?: number | null;
      quantity?: number | null;
      product?: string | null;
    } | null> | null;
  } | null;
};

export type GetMyOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyOrdersQuery = {
  getMyOrders: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      isDelivered?: boolean | null;
      isPaid?: boolean | null;
      deliveredAt?: string | null;
      paidAt?: string | null;
      paymentMethod?: string | null;
      shippingAddress?: {
        address?: string | null;
        city?: string | null;
        country?: string | null;
        postalCode?: string | null;
      } | null;
      paymentResult?: {
        id?: string | null;
        email_address?: string | null;
        status?: string | null;
        update_time?: string | null;
      } | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
      orderItems?: Array<{
        image?: string | null;
        name?: string | null;
        price?: number | null;
        quantity?: number | null;
        product?: string | null;
      } | null> | null;
    } | null>;
  };
};

export type CreateOrderMutationVariables = Exact<{
  data: ICreateOrder;
}>;

export type CreateOrderMutation = {
  createOrder?: {
    id?: string | null;
    isDelivered?: boolean | null;
    isPaid?: boolean | null;
    deliveredAt?: string | null;
    paidAt?: string | null;
    paymentMethod?: string | null;
    shippingAddress?: {
      address?: string | null;
      city?: string | null;
      country?: string | null;
      postalCode?: string | null;
    } | null;
    paymentResult?: {
      id?: string | null;
      email_address?: string | null;
      status?: string | null;
      update_time?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    orderItems?: Array<{
      image?: string | null;
      name?: string | null;
      price?: number | null;
      quantity?: number | null;
      product?: string | null;
    } | null> | null;
  } | null;
};

export type UpdateOrderMutationVariables = Exact<{
  orderId: Scalars['ID'];
  data: IUpdateOrder;
}>;

export type UpdateOrderMutation = {
  updateOrder?: {
    id?: string | null;
    totalPrice?: number | null;
    orderItems?: Array<{ price?: number | null } | null> | null;
  } | null;
};

export type UpdateOrderToDeliveredMutationVariables = Exact<{
  orderId: Scalars['ID'];
}>;

export type UpdateOrderToDeliveredMutation = {
  updateOrderToDelivered: {
    id?: string | null;
    isDelivered?: boolean | null;
    isPaid?: boolean | null;
    deliveredAt?: string | null;
    paidAt?: string | null;
    paymentMethod?: string | null;
    shippingAddress?: {
      address?: string | null;
      city?: string | null;
      country?: string | null;
      postalCode?: string | null;
    } | null;
    paymentResult?: {
      id?: string | null;
      email_address?: string | null;
      status?: string | null;
      update_time?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    orderItems?: Array<{
      image?: string | null;
      name?: string | null;
      price?: number | null;
      quantity?: number | null;
      product?: string | null;
    } | null> | null;
  };
};

export type UpdateOrderToPaidMutationVariables = Exact<{
  orderId: Scalars['ID'];
  data: IPaymentResult;
}>;

export type UpdateOrderToPaidMutation = {
  updateOrderToPaid?: {
    id?: string | null;
    isDelivered?: boolean | null;
    isPaid?: boolean | null;
    deliveredAt?: string | null;
    paidAt?: string | null;
    paymentMethod?: string | null;
    shippingAddress?: {
      address?: string | null;
      city?: string | null;
      country?: string | null;
      postalCode?: string | null;
    } | null;
    paymentResult?: {
      id?: string | null;
      email_address?: string | null;
      status?: string | null;
      update_time?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
    orderItems?: Array<{
      image?: string | null;
      name?: string | null;
      price?: number | null;
      quantity?: number | null;
      product?: string | null;
    } | null> | null;
  } | null;
};

export type ProductFieldsFragment = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  brand?: string | null;
  rating?: number | null;
  price?: number | null;
  countInStock?: number | null;
  image?: string | null;
  numReviews?: number | null;
  reviews?: Array<{
    comment?: string | null;
    name?: string | null;
    rating?: number | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
  } | null> | null;
  category?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
  } | null;
  user?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
};

export type CreateProductMutationVariables = Exact<{
  data: ICreateProduct;
}>;

export type CreateProductMutation = {
  createProduct?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    brand?: string | null;
    rating?: number | null;
    price?: number | null;
    countInStock?: number | null;
    image?: string | null;
    numReviews?: number | null;
    reviews?: Array<{
      comment?: string | null;
      name?: string | null;
      rating?: number | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
    } | null> | null;
    category?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
  } | null;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  getProducts: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      name?: string | null;
      description?: string | null;
      brand?: string | null;
      rating?: number | null;
      price?: number | null;
      countInStock?: number | null;
      image?: string | null;
      numReviews?: number | null;
      reviews?: Array<{
        comment?: string | null;
        name?: string | null;
        rating?: number | null;
        user?: {
          id?: string | null;
          fullName?: string | null;
          email?: string | null;
          tel?: string | null;
          gender?: EGender | null;
          userRole?: EUserRole | null;
          accountStatus?: EUserAccountStatus | null;
          registeredWith?: string | null;
          dateOfBirth?: string | null;
          country?: string | null;
          city?: string | null;
          state?: string | null;
          postCode?: string | null;
          membership?: EMembership | null;
          languages?: Array<string | null> | null;
        } | null;
      } | null> | null;
      category?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
      } | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
    } | null>;
  };
};

export type GetTopProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTopProductsQuery = {
  getTopProducts: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      name?: string | null;
      description?: string | null;
      brand?: string | null;
      rating?: number | null;
      price?: number | null;
      countInStock?: number | null;
      image?: string | null;
      numReviews?: number | null;
      reviews?: Array<{
        comment?: string | null;
        name?: string | null;
        rating?: number | null;
        user?: {
          id?: string | null;
          fullName?: string | null;
          email?: string | null;
          tel?: string | null;
          gender?: EGender | null;
          userRole?: EUserRole | null;
          accountStatus?: EUserAccountStatus | null;
          registeredWith?: string | null;
          dateOfBirth?: string | null;
          country?: string | null;
          city?: string | null;
          state?: string | null;
          postCode?: string | null;
          membership?: EMembership | null;
          languages?: Array<string | null> | null;
        } | null;
      } | null> | null;
      category?: {
        id?: string | null;
        name?: string | null;
        description?: string | null;
      } | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
    } | null>;
  };
};

export type GetProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;

export type GetProductQuery = {
  getProduct?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    brand?: string | null;
    rating?: number | null;
    price?: number | null;
    countInStock?: number | null;
    image?: string | null;
    numReviews?: number | null;
    reviews?: Array<{
      comment?: string | null;
      name?: string | null;
      rating?: number | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
    } | null> | null;
    category?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
  } | null;
};

export type UpdateProductMutationVariables = Exact<{
  productId: Scalars['ID'];
  data: IUpdateProduct;
}>;

export type UpdateProductMutation = {
  updateProduct?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    brand?: string | null;
    rating?: number | null;
    price?: number | null;
    countInStock?: number | null;
    image?: string | null;
    numReviews?: number | null;
    reviews?: Array<{
      comment?: string | null;
      name?: string | null;
      rating?: number | null;
      user?: {
        id?: string | null;
        fullName?: string | null;
        email?: string | null;
        tel?: string | null;
        gender?: EGender | null;
        userRole?: EUserRole | null;
        accountStatus?: EUserAccountStatus | null;
        registeredWith?: string | null;
        dateOfBirth?: string | null;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        postCode?: string | null;
        membership?: EMembership | null;
        languages?: Array<string | null> | null;
      } | null;
    } | null> | null;
    category?: {
      id?: string | null;
      name?: string | null;
      description?: string | null;
    } | null;
    user?: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null;
  } | null;
};

export type CreateProductReviewMutationVariables = Exact<{
  productId: Scalars['ID'];
  data: ICreateReview;
}>;

export type CreateProductReviewMutation = {
  createProductReview?: string | null;
};

export type DeleteProductMutationVariables = Exact<{
  productId: Scalars['ID'];
}>;

export type DeleteProductMutation = { deleteProduct: string };

export type UserFieldsFragment = {
  id?: string | null;
  fullName?: string | null;
  email?: string | null;
  tel?: string | null;
  gender?: EGender | null;
  userRole?: EUserRole | null;
  accountStatus?: EUserAccountStatus | null;
  registeredWith?: string | null;
  dateOfBirth?: string | null;
  country?: string | null;
  city?: string | null;
  state?: string | null;
  postCode?: string | null;
  membership?: EMembership | null;
  languages?: Array<string | null> | null;
};

export type TokenFieldsFragment = {
  access: { token: string; expires: string };
  refresh: { token: string; expires: string };
};

export type UserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;

export type UserQuery = {
  user?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  me?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  users: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    results: Array<{
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    } | null>;
  };
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  login: {
    user: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    };
    tokens: {
      access: { token: string; expires: string };
      refresh: { token: string; expires: string };
    };
  };
};

export type RegisterMutationVariables = Exact<{
  data: IRegisterUser;
}>;

export type RegisterMutation = {
  register: {
    user: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      tel?: string | null;
      gender?: EGender | null;
      userRole?: EUserRole | null;
      accountStatus?: EUserAccountStatus | null;
      registeredWith?: string | null;
      dateOfBirth?: string | null;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      postCode?: string | null;
      membership?: EMembership | null;
      languages?: Array<string | null> | null;
    };
    tokens: {
      access: { token: string; expires: string };
      refresh: { token: string; expires: string };
    };
  };
};

export type RefreshTokensMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type RefreshTokensMutation = {
  refreshTokens: {
    access: { token: string; expires: string };
    refresh: { token: string; expires: string };
  };
};

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;

export type DeleteUserMutation = { deleteUser: string };

export type UpdateAccountMutationVariables = Exact<{
  data: IUpdateUser;
}>;

export type UpdateAccountMutation = {
  updateAccount?: {
    id?: string | null;
    fullName?: string | null;
    email?: string | null;
    tel?: string | null;
    gender?: EGender | null;
    userRole?: EUserRole | null;
    accountStatus?: EUserAccountStatus | null;
    registeredWith?: string | null;
    dateOfBirth?: string | null;
    country?: string | null;
    city?: string | null;
    state?: string | null;
    postCode?: string | null;
    membership?: EMembership | null;
    languages?: Array<string | null> | null;
  } | null;
};

export type LogoutMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type LogoutMutation = { logout: { message: string } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = { forgotPassword: { message: string } };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;

export type ResetPasswordMutation = { resetPassword: { message: string } };

export type SendVerificationEmailMutationVariables = Exact<{
  [key: string]: never;
}>;

export type SendVerificationEmailMutation = {
  sendVerificationEmail: { message: string };
};

export const UserFieldsFragmentDoc = gql`
  fragment UserFields on TUser {
    id
    fullName
    email
    tel
    gender
    userRole
    accountStatus
    registeredWith
    dateOfBirth
    country
    city
    state
    postCode
    membership
    languages
  }
`;
export const HospitalFieldsFragmentDoc = gql`
  fragment HospitalFields on THospital {
    id
    name
    description
    district
    city
    country
    location
    tracking_number
  }
`;
export const ClinicFieldsFragmentDoc = gql`
  fragment ClinicFields on TClinic {
    id
    name
    description
    hospital {
      ...HospitalFields
    }
  }
  ${HospitalFieldsFragmentDoc}
`;
export const AppointmentFieldsFragmentDoc = gql`
  fragment AppointmentFields on TAppointment {
    id
    status
    date
    time
    conditions
    symptoms
    district
    city
    country
    doctor {
      ...UserFields
    }
    patient {
      ...UserFields
    }
    hospital {
      ...HospitalFields
    }
    clinic {
      ...ClinicFields
    }
    doctorJoinAt
    doctorQuitAt
    patientJoinAt
    patientQuitAt
  }
  ${UserFieldsFragmentDoc}
  ${HospitalFieldsFragmentDoc}
  ${ClinicFieldsFragmentDoc}
`;
export const OrderFieldsFragmentDoc = gql`
  fragment OrderFields on TOrder {
    id
    isDelivered
    isPaid
    deliveredAt
    paidAt
    paymentMethod
    shippingAddress {
      address
      city
      country
      postalCode
    }
    paymentResult {
      id
      email_address
      status
      update_time
    }
    user {
      ...UserFields
    }
    orderItems {
      image
      name
      price
      quantity
      product
    }
  }
  ${UserFieldsFragmentDoc}
`;
export const CategoryFieldsFragmentDoc = gql`
  fragment CategoryFields on TCategory {
    id
    name
    description
  }
`;
export const ProductFieldsFragmentDoc = gql`
  fragment ProductFields on TProduct {
    id
    name
    description
    brand
    rating
    price
    countInStock
    image
    numReviews
    reviews {
      comment
      name
      rating
      user {
        ...UserFields
      }
    }
    category {
      ...CategoryFields
    }
    user {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
  ${CategoryFieldsFragmentDoc}
`;
export const TokenFieldsFragmentDoc = gql`
  fragment TokenFields on TToken {
    access {
      token
      expires
    }
    refresh {
      token
      expires
    }
  }
`;
export const GetAppointmentsDocument = gql`
  query GetAppointments {
    getAppointments {
      page
      results {
        ...AppointmentFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${AppointmentFieldsFragmentDoc}
`;

/**
 * __useGetAppointmentsQuery__
 *
 * To run a query within a React component, call `useGetAppointmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppointmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppointmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppointmentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAppointmentsQuery,
    GetAppointmentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAppointmentsQuery, GetAppointmentsQueryVariables>(
    GetAppointmentsDocument,
    options
  );
}
export function useGetAppointmentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppointmentsQuery,
    GetAppointmentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAppointmentsQuery,
    GetAppointmentsQueryVariables
  >(GetAppointmentsDocument, options);
}
export type GetAppointmentsQueryHookResult = ReturnType<
  typeof useGetAppointmentsQuery
>;
export type GetAppointmentsLazyQueryHookResult = ReturnType<
  typeof useGetAppointmentsLazyQuery
>;
export type GetAppointmentsQueryResult = Apollo.QueryResult<
  GetAppointmentsQuery,
  GetAppointmentsQueryVariables
>;
export const GetAppointmentDocument = gql`
  query GetAppointment($appointmentId: ID!) {
    getAppointment(appointmentId: $appointmentId) {
      ...AppointmentFields
    }
  }
  ${AppointmentFieldsFragmentDoc}
`;

/**
 * __useGetAppointmentQuery__
 *
 * To run a query within a React component, call `useGetAppointmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppointmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppointmentQuery({
 *   variables: {
 *      appointmentId: // value for 'appointmentId'
 *   },
 * });
 */
export function useGetAppointmentQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAppointmentQuery,
    GetAppointmentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAppointmentQuery, GetAppointmentQueryVariables>(
    GetAppointmentDocument,
    options
  );
}
export function useGetAppointmentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppointmentQuery,
    GetAppointmentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAppointmentQuery, GetAppointmentQueryVariables>(
    GetAppointmentDocument,
    options
  );
}
export type GetAppointmentQueryHookResult = ReturnType<
  typeof useGetAppointmentQuery
>;
export type GetAppointmentLazyQueryHookResult = ReturnType<
  typeof useGetAppointmentLazyQuery
>;
export type GetAppointmentQueryResult = Apollo.QueryResult<
  GetAppointmentQuery,
  GetAppointmentQueryVariables
>;
export const GetMyAppointmentsDocument = gql`
  query GetMyAppointments {
    getMyAppointments {
      page
      results {
        ...AppointmentFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${AppointmentFieldsFragmentDoc}
`;

/**
 * __useGetMyAppointmentsQuery__
 *
 * To run a query within a React component, call `useGetMyAppointmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyAppointmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyAppointmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyAppointmentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyAppointmentsQuery,
    GetMyAppointmentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMyAppointmentsQuery,
    GetMyAppointmentsQueryVariables
  >(GetMyAppointmentsDocument, options);
}
export function useGetMyAppointmentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyAppointmentsQuery,
    GetMyAppointmentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMyAppointmentsQuery,
    GetMyAppointmentsQueryVariables
  >(GetMyAppointmentsDocument, options);
}
export type GetMyAppointmentsQueryHookResult = ReturnType<
  typeof useGetMyAppointmentsQuery
>;
export type GetMyAppointmentsLazyQueryHookResult = ReturnType<
  typeof useGetMyAppointmentsLazyQuery
>;
export type GetMyAppointmentsQueryResult = Apollo.QueryResult<
  GetMyAppointmentsQuery,
  GetMyAppointmentsQueryVariables
>;
export const MakeAppointmentDocument = gql`
  mutation MakeAppointment($data: ICreateAppointment!) {
    makeAppointment(data: $data) {
      ...AppointmentFields
    }
  }
  ${AppointmentFieldsFragmentDoc}
`;
export type MakeAppointmentMutationFn = Apollo.MutationFunction<
  MakeAppointmentMutation,
  MakeAppointmentMutationVariables
>;

/**
 * __useMakeAppointmentMutation__
 *
 * To run a mutation, you first call `useMakeAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeAppointmentMutation, { data, loading, error }] = useMakeAppointmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useMakeAppointmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MakeAppointmentMutation,
    MakeAppointmentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MakeAppointmentMutation,
    MakeAppointmentMutationVariables
  >(MakeAppointmentDocument, options);
}
export type MakeAppointmentMutationHookResult = ReturnType<
  typeof useMakeAppointmentMutation
>;
export type MakeAppointmentMutationResult =
  Apollo.MutationResult<MakeAppointmentMutation>;
export type MakeAppointmentMutationOptions = Apollo.BaseMutationOptions<
  MakeAppointmentMutation,
  MakeAppointmentMutationVariables
>;
export const UpdateAppointmentDocument = gql`
  mutation UpdateAppointment($appointmentId: ID!, $data: IUpdateAppointment!) {
    updateAppointment(appointmentId: $appointmentId, data: $data) {
      ...AppointmentFields
    }
  }
  ${AppointmentFieldsFragmentDoc}
`;
export type UpdateAppointmentMutationFn = Apollo.MutationFunction<
  UpdateAppointmentMutation,
  UpdateAppointmentMutationVariables
>;

/**
 * __useUpdateAppointmentMutation__
 *
 * To run a mutation, you first call `useUpdateAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppointmentMutation, { data, loading, error }] = useUpdateAppointmentMutation({
 *   variables: {
 *      appointmentId: // value for 'appointmentId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAppointmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAppointmentMutation,
    UpdateAppointmentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAppointmentMutation,
    UpdateAppointmentMutationVariables
  >(UpdateAppointmentDocument, options);
}
export type UpdateAppointmentMutationHookResult = ReturnType<
  typeof useUpdateAppointmentMutation
>;
export type UpdateAppointmentMutationResult =
  Apollo.MutationResult<UpdateAppointmentMutation>;
export type UpdateAppointmentMutationOptions = Apollo.BaseMutationOptions<
  UpdateAppointmentMutation,
  UpdateAppointmentMutationVariables
>;
export const UpdateAppointmentStatusDocument = gql`
  mutation UpdateAppointmentStatus(
    $appointmentId: ID!
    $newStatus: EAppointmentStatus!
  ) {
    updateAppointmentStatus(
      appointmentId: $appointmentId
      newStatus: $newStatus
    ) {
      ...AppointmentFields
    }
  }
  ${AppointmentFieldsFragmentDoc}
`;
export type UpdateAppointmentStatusMutationFn = Apollo.MutationFunction<
  UpdateAppointmentStatusMutation,
  UpdateAppointmentStatusMutationVariables
>;

/**
 * __useUpdateAppointmentStatusMutation__
 *
 * To run a mutation, you first call `useUpdateAppointmentStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppointmentStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppointmentStatusMutation, { data, loading, error }] = useUpdateAppointmentStatusMutation({
 *   variables: {
 *      appointmentId: // value for 'appointmentId'
 *      newStatus: // value for 'newStatus'
 *   },
 * });
 */
export function useUpdateAppointmentStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAppointmentStatusMutation,
    UpdateAppointmentStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAppointmentStatusMutation,
    UpdateAppointmentStatusMutationVariables
  >(UpdateAppointmentStatusDocument, options);
}
export type UpdateAppointmentStatusMutationHookResult = ReturnType<
  typeof useUpdateAppointmentStatusMutation
>;
export type UpdateAppointmentStatusMutationResult =
  Apollo.MutationResult<UpdateAppointmentStatusMutation>;
export type UpdateAppointmentStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateAppointmentStatusMutation,
  UpdateAppointmentStatusMutationVariables
>;
export const DeleteAppointmentDocument = gql`
  mutation DeleteAppointment($appointmentId: ID!) {
    deleteAppointment(appointmentId: $appointmentId)
  }
`;
export type DeleteAppointmentMutationFn = Apollo.MutationFunction<
  DeleteAppointmentMutation,
  DeleteAppointmentMutationVariables
>;

/**
 * __useDeleteAppointmentMutation__
 *
 * To run a mutation, you first call `useDeleteAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAppointmentMutation, { data, loading, error }] = useDeleteAppointmentMutation({
 *   variables: {
 *      appointmentId: // value for 'appointmentId'
 *   },
 * });
 */
export function useDeleteAppointmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAppointmentMutation,
    DeleteAppointmentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteAppointmentMutation,
    DeleteAppointmentMutationVariables
  >(DeleteAppointmentDocument, options);
}
export type DeleteAppointmentMutationHookResult = ReturnType<
  typeof useDeleteAppointmentMutation
>;
export type DeleteAppointmentMutationResult =
  Apollo.MutationResult<DeleteAppointmentMutation>;
export type DeleteAppointmentMutationOptions = Apollo.BaseMutationOptions<
  DeleteAppointmentMutation,
  DeleteAppointmentMutationVariables
>;
export const GetCategoriesDocument = gql`
  query GetCategories {
    getCategories {
      page
      results {
        ...CategoryFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${CategoryFieldsFragmentDoc}
`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    GetCategoriesDocument,
    options
  );
}
export function useGetCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    GetCategoriesDocument,
    options
  );
}
export type GetCategoriesQueryHookResult = ReturnType<
  typeof useGetCategoriesQuery
>;
export type GetCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetCategoriesLazyQuery
>;
export type GetCategoriesQueryResult = Apollo.QueryResult<
  GetCategoriesQuery,
  GetCategoriesQueryVariables
>;
export const GetCategoryDocument = gql`
  query GetCategory($categoryId: ID!) {
    getCategory(categoryId: $categoryId) {
      ...CategoryFields
    }
  }
  ${CategoryFieldsFragmentDoc}
`;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCategoryQuery,
    GetCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(
    GetCategoryDocument,
    options
  );
}
export function useGetCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryQuery,
    GetCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(
    GetCategoryDocument,
    options
  );
}
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<
  typeof useGetCategoryLazyQuery
>;
export type GetCategoryQueryResult = Apollo.QueryResult<
  GetCategoryQuery,
  GetCategoryQueryVariables
>;
export const CreateCategoryDocument = gql`
  mutation CreateCategory($data: ICreateCategory!) {
    createCategory(data: $data) {
      ...CategoryFields
    }
  }
  ${CategoryFieldsFragmentDoc}
`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CreateCategoryDocument, options);
}
export type CreateCategoryMutationHookResult = ReturnType<
  typeof useCreateCategoryMutation
>;
export type CreateCategoryMutationResult =
  Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;
export const UpdateCategoryDocument = gql`
  mutation UpdateCategory($categoryId: ID!, $data: IUpdateCategory!) {
    updateCategory(categoryId: $categoryId, data: $data) {
      ...CategoryFields
    }
  }
  ${CategoryFieldsFragmentDoc}
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >(UpdateCategoryDocument, options);
}
export type UpdateCategoryMutationHookResult = ReturnType<
  typeof useUpdateCategoryMutation
>;
export type UpdateCategoryMutationResult =
  Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export const DeleteCategoryDocument = gql`
  mutation DeleteCategory($categoryId: ID!) {
    deleteCategory(categoryId: $categoryId)
  }
`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >(DeleteCategoryDocument, options);
}
export type DeleteCategoryMutationHookResult = ReturnType<
  typeof useDeleteCategoryMutation
>;
export type DeleteCategoryMutationResult =
  Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;
export const CreateClinicDocument = gql`
  mutation CreateClinic($data: ICreateClinic!) {
    createClinic(data: $data) {
      ...ClinicFields
    }
  }
  ${ClinicFieldsFragmentDoc}
`;
export type CreateClinicMutationFn = Apollo.MutationFunction<
  CreateClinicMutation,
  CreateClinicMutationVariables
>;

/**
 * __useCreateClinicMutation__
 *
 * To run a mutation, you first call `useCreateClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClinicMutation, { data, loading, error }] = useCreateClinicMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateClinicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateClinicMutation,
    CreateClinicMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateClinicMutation,
    CreateClinicMutationVariables
  >(CreateClinicDocument, options);
}
export type CreateClinicMutationHookResult = ReturnType<
  typeof useCreateClinicMutation
>;
export type CreateClinicMutationResult =
  Apollo.MutationResult<CreateClinicMutation>;
export type CreateClinicMutationOptions = Apollo.BaseMutationOptions<
  CreateClinicMutation,
  CreateClinicMutationVariables
>;
export const GetUserDocument = gql`
  query GetUser($clinicId: ID!) {
    getClinic(clinicId: $clinicId) {
      ...ClinicFields
    }
  }
  ${ClinicFieldsFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const GetClinicsDocument = gql`
  query GetClinics {
    getClinics {
      page
      results {
        ...ClinicFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${ClinicFieldsFragmentDoc}
`;

/**
 * __useGetClinicsQuery__
 *
 * To run a query within a React component, call `useGetClinicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClinicsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetClinicsQuery,
    GetClinicsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetClinicsQuery, GetClinicsQueryVariables>(
    GetClinicsDocument,
    options
  );
}
export function useGetClinicsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetClinicsQuery,
    GetClinicsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetClinicsQuery, GetClinicsQueryVariables>(
    GetClinicsDocument,
    options
  );
}
export type GetClinicsQueryHookResult = ReturnType<typeof useGetClinicsQuery>;
export type GetClinicsLazyQueryHookResult = ReturnType<
  typeof useGetClinicsLazyQuery
>;
export type GetClinicsQueryResult = Apollo.QueryResult<
  GetClinicsQuery,
  GetClinicsQueryVariables
>;
export const UpdateClinicDocument = gql`
  mutation UpdateClinic($clinicId: ID!, $data: IUpdateClinic!) {
    updateClinic(clinicId: $clinicId, data: $data) {
      ...ClinicFields
    }
  }
  ${ClinicFieldsFragmentDoc}
`;
export type UpdateClinicMutationFn = Apollo.MutationFunction<
  UpdateClinicMutation,
  UpdateClinicMutationVariables
>;

/**
 * __useUpdateClinicMutation__
 *
 * To run a mutation, you first call `useUpdateClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClinicMutation, { data, loading, error }] = useUpdateClinicMutation({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateClinicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateClinicMutation,
    UpdateClinicMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateClinicMutation,
    UpdateClinicMutationVariables
  >(UpdateClinicDocument, options);
}
export type UpdateClinicMutationHookResult = ReturnType<
  typeof useUpdateClinicMutation
>;
export type UpdateClinicMutationResult =
  Apollo.MutationResult<UpdateClinicMutation>;
export type UpdateClinicMutationOptions = Apollo.BaseMutationOptions<
  UpdateClinicMutation,
  UpdateClinicMutationVariables
>;
export const DeleteClinicDocument = gql`
  mutation DeleteClinic($clinicId: ID!) {
    deleteClinic(clinicId: $clinicId)
  }
`;
export type DeleteClinicMutationFn = Apollo.MutationFunction<
  DeleteClinicMutation,
  DeleteClinicMutationVariables
>;

/**
 * __useDeleteClinicMutation__
 *
 * To run a mutation, you first call `useDeleteClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClinicMutation, { data, loading, error }] = useDeleteClinicMutation({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *   },
 * });
 */
export function useDeleteClinicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteClinicMutation,
    DeleteClinicMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteClinicMutation,
    DeleteClinicMutationVariables
  >(DeleteClinicDocument, options);
}
export type DeleteClinicMutationHookResult = ReturnType<
  typeof useDeleteClinicMutation
>;
export type DeleteClinicMutationResult =
  Apollo.MutationResult<DeleteClinicMutation>;
export type DeleteClinicMutationOptions = Apollo.BaseMutationOptions<
  DeleteClinicMutation,
  DeleteClinicMutationVariables
>;
export const CreateHospitalDocument = gql`
  mutation createHospital($data: ICreateHospital!) {
    createHospital(data: $data) {
      ...HospitalFields
    }
  }
  ${HospitalFieldsFragmentDoc}
`;
export type CreateHospitalMutationFn = Apollo.MutationFunction<
  CreateHospitalMutation,
  CreateHospitalMutationVariables
>;

/**
 * __useCreateHospitalMutation__
 *
 * To run a mutation, you first call `useCreateHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHospitalMutation, { data, loading, error }] = useCreateHospitalMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateHospitalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateHospitalMutation,
    CreateHospitalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateHospitalMutation,
    CreateHospitalMutationVariables
  >(CreateHospitalDocument, options);
}
export type CreateHospitalMutationHookResult = ReturnType<
  typeof useCreateHospitalMutation
>;
export type CreateHospitalMutationResult =
  Apollo.MutationResult<CreateHospitalMutation>;
export type CreateHospitalMutationOptions = Apollo.BaseMutationOptions<
  CreateHospitalMutation,
  CreateHospitalMutationVariables
>;
export const GetHospitalsDocument = gql`
  query GetHospitals {
    getHospitals {
      page
      results {
        ...HospitalFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${HospitalFieldsFragmentDoc}
`;

/**
 * __useGetHospitalsQuery__
 *
 * To run a query within a React component, call `useGetHospitalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHospitalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHospitalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHospitalsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHospitalsQuery,
    GetHospitalsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHospitalsQuery, GetHospitalsQueryVariables>(
    GetHospitalsDocument,
    options
  );
}
export function useGetHospitalsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHospitalsQuery,
    GetHospitalsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHospitalsQuery, GetHospitalsQueryVariables>(
    GetHospitalsDocument,
    options
  );
}
export type GetHospitalsQueryHookResult = ReturnType<
  typeof useGetHospitalsQuery
>;
export type GetHospitalsLazyQueryHookResult = ReturnType<
  typeof useGetHospitalsLazyQuery
>;
export type GetHospitalsQueryResult = Apollo.QueryResult<
  GetHospitalsQuery,
  GetHospitalsQueryVariables
>;
export const UpdateHospitalDocument = gql`
  mutation UpdateHospital($hospitalId: ID!, $data: IUpdateHospital!) {
    updateHospital(hospitalId: $hospitalId, data: $data) {
      ...HospitalFields
    }
  }
  ${HospitalFieldsFragmentDoc}
`;
export type UpdateHospitalMutationFn = Apollo.MutationFunction<
  UpdateHospitalMutation,
  UpdateHospitalMutationVariables
>;

/**
 * __useUpdateHospitalMutation__
 *
 * To run a mutation, you first call `useUpdateHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHospitalMutation, { data, loading, error }] = useUpdateHospitalMutation({
 *   variables: {
 *      hospitalId: // value for 'hospitalId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateHospitalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateHospitalMutation,
    UpdateHospitalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateHospitalMutation,
    UpdateHospitalMutationVariables
  >(UpdateHospitalDocument, options);
}
export type UpdateHospitalMutationHookResult = ReturnType<
  typeof useUpdateHospitalMutation
>;
export type UpdateHospitalMutationResult =
  Apollo.MutationResult<UpdateHospitalMutation>;
export type UpdateHospitalMutationOptions = Apollo.BaseMutationOptions<
  UpdateHospitalMutation,
  UpdateHospitalMutationVariables
>;
export const DeleteHospitalDocument = gql`
  mutation DeleteHospital($hospitalId: ID!) {
    deleteHospital(hospitalId: $hospitalId)
  }
`;
export type DeleteHospitalMutationFn = Apollo.MutationFunction<
  DeleteHospitalMutation,
  DeleteHospitalMutationVariables
>;

/**
 * __useDeleteHospitalMutation__
 *
 * To run a mutation, you first call `useDeleteHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHospitalMutation, { data, loading, error }] = useDeleteHospitalMutation({
 *   variables: {
 *      hospitalId: // value for 'hospitalId'
 *   },
 * });
 */
export function useDeleteHospitalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteHospitalMutation,
    DeleteHospitalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteHospitalMutation,
    DeleteHospitalMutationVariables
  >(DeleteHospitalDocument, options);
}
export type DeleteHospitalMutationHookResult = ReturnType<
  typeof useDeleteHospitalMutation
>;
export type DeleteHospitalMutationResult =
  Apollo.MutationResult<DeleteHospitalMutation>;
export type DeleteHospitalMutationOptions = Apollo.BaseMutationOptions<
  DeleteHospitalMutation,
  DeleteHospitalMutationVariables
>;
export const GetOrdersDocument = gql`
  query GetOrders {
    getOrders {
      page
      results {
        ...OrderFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${OrderFieldsFragmentDoc}
`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options
  );
}
export function useGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options
  );
}
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<
  typeof useGetOrdersLazyQuery
>;
export type GetOrdersQueryResult = Apollo.QueryResult<
  GetOrdersQuery,
  GetOrdersQueryVariables
>;
export const GetOrderDocument = gql`
  query GetOrder($orderId: ID!) {
    getOrder(orderId: $orderId) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useGetOrderQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options
  );
}
export function useGetOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderQuery,
    GetOrderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options
  );
}
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<
  typeof useGetOrderLazyQuery
>;
export type GetOrderQueryResult = Apollo.QueryResult<
  GetOrderQuery,
  GetOrderQueryVariables
>;
export const GetMyOrdersDocument = gql`
  query GetMyOrders {
    getMyOrders {
      page
      results {
        ...OrderFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${OrderFieldsFragmentDoc}
`;

/**
 * __useGetMyOrdersQuery__
 *
 * To run a query within a React component, call `useGetMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyOrdersQuery,
    GetMyOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(
    GetMyOrdersDocument,
    options
  );
}
export function useGetMyOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyOrdersQuery,
    GetMyOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(
    GetMyOrdersDocument,
    options
  );
}
export type GetMyOrdersQueryHookResult = ReturnType<typeof useGetMyOrdersQuery>;
export type GetMyOrdersLazyQueryHookResult = ReturnType<
  typeof useGetMyOrdersLazyQuery
>;
export type GetMyOrdersQueryResult = Apollo.QueryResult<
  GetMyOrdersQuery,
  GetMyOrdersQueryVariables
>;
export const CreateOrderDocument = gql`
  mutation CreateOrder($data: ICreateOrder!) {
    createOrder(data: $data) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options
  );
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>;
export type CreateOrderMutationResult =
  Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const UpdateOrderDocument = gql`
  mutation UpdateOrder($orderId: ID!, $data: IUpdateOrder!) {
    updateOrder(orderId: $orderId, data: $data) {
      id
      totalPrice
      orderItems {
        price
      }
    }
  }
`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderMutation,
    UpdateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(
    UpdateOrderDocument,
    options
  );
}
export type UpdateOrderMutationHookResult = ReturnType<
  typeof useUpdateOrderMutation
>;
export type UpdateOrderMutationResult =
  Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
>;
export const UpdateOrderToDeliveredDocument = gql`
  mutation UpdateOrderToDelivered($orderId: ID!) {
    updateOrderToDelivered(orderId: $orderId) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;
export type UpdateOrderToDeliveredMutationFn = Apollo.MutationFunction<
  UpdateOrderToDeliveredMutation,
  UpdateOrderToDeliveredMutationVariables
>;

/**
 * __useUpdateOrderToDeliveredMutation__
 *
 * To run a mutation, you first call `useUpdateOrderToDeliveredMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderToDeliveredMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderToDeliveredMutation, { data, loading, error }] = useUpdateOrderToDeliveredMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useUpdateOrderToDeliveredMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderToDeliveredMutation,
    UpdateOrderToDeliveredMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOrderToDeliveredMutation,
    UpdateOrderToDeliveredMutationVariables
  >(UpdateOrderToDeliveredDocument, options);
}
export type UpdateOrderToDeliveredMutationHookResult = ReturnType<
  typeof useUpdateOrderToDeliveredMutation
>;
export type UpdateOrderToDeliveredMutationResult =
  Apollo.MutationResult<UpdateOrderToDeliveredMutation>;
export type UpdateOrderToDeliveredMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderToDeliveredMutation,
  UpdateOrderToDeliveredMutationVariables
>;
export const UpdateOrderToPaidDocument = gql`
  mutation UpdateOrderToPaid($orderId: ID!, $data: IPaymentResult!) {
    updateOrderToPaid(orderId: $orderId, data: $data) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;
export type UpdateOrderToPaidMutationFn = Apollo.MutationFunction<
  UpdateOrderToPaidMutation,
  UpdateOrderToPaidMutationVariables
>;

/**
 * __useUpdateOrderToPaidMutation__
 *
 * To run a mutation, you first call `useUpdateOrderToPaidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderToPaidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderToPaidMutation, { data, loading, error }] = useUpdateOrderToPaidMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOrderToPaidMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderToPaidMutation,
    UpdateOrderToPaidMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOrderToPaidMutation,
    UpdateOrderToPaidMutationVariables
  >(UpdateOrderToPaidDocument, options);
}
export type UpdateOrderToPaidMutationHookResult = ReturnType<
  typeof useUpdateOrderToPaidMutation
>;
export type UpdateOrderToPaidMutationResult =
  Apollo.MutationResult<UpdateOrderToPaidMutation>;
export type UpdateOrderToPaidMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderToPaidMutation,
  UpdateOrderToPaidMutationVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct($data: ICreateProduct!) {
    createProduct(data: $data) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const GetProductsDocument = gql`
  query GetProducts {
    getProducts {
      page
      results {
        ...ProductFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
export const GetTopProductsDocument = gql`
  query GetTopProducts {
    getTopProducts {
      page
      results {
        ...ProductFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useGetTopProductsQuery__
 *
 * To run a query within a React component, call `useGetTopProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTopProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTopProductsQuery,
    GetTopProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTopProductsQuery, GetTopProductsQueryVariables>(
    GetTopProductsDocument,
    options
  );
}
export function useGetTopProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTopProductsQuery,
    GetTopProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTopProductsQuery, GetTopProductsQueryVariables>(
    GetTopProductsDocument,
    options
  );
}
export type GetTopProductsQueryHookResult = ReturnType<
  typeof useGetTopProductsQuery
>;
export type GetTopProductsLazyQueryHookResult = ReturnType<
  typeof useGetTopProductsLazyQuery
>;
export type GetTopProductsQueryResult = Apollo.QueryResult<
  GetTopProductsQuery,
  GetTopProductsQueryVariables
>;
export const GetProductDocument = gql`
  query GetProduct($productId: ID!) {
    getProduct(productId: $productId) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options
  );
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options
  );
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<
  typeof useGetProductLazyQuery
>;
export type GetProductQueryResult = Apollo.QueryResult<
  GetProductQuery,
  GetProductQueryVariables
>;
export const UpdateProductDocument = gql`
  mutation UpdateProduct($productId: ID!, $data: IUpdateProduct!) {
    updateProduct(productId: $productId, data: $data) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult =
  Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const CreateProductReviewDocument = gql`
  mutation CreateProductReview($productId: ID!, $data: ICreateReview!) {
    createProductReview(productId: $productId, data: $data)
  }
`;
export type CreateProductReviewMutationFn = Apollo.MutationFunction<
  CreateProductReviewMutation,
  CreateProductReviewMutationVariables
>;

/**
 * __useCreateProductReviewMutation__
 *
 * To run a mutation, you first call `useCreateProductReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductReviewMutation, { data, loading, error }] = useCreateProductReviewMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductReviewMutation,
    CreateProductReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductReviewMutation,
    CreateProductReviewMutationVariables
  >(CreateProductReviewDocument, options);
}
export type CreateProductReviewMutationHookResult = ReturnType<
  typeof useCreateProductReviewMutation
>;
export type CreateProductReviewMutationResult =
  Apollo.MutationResult<CreateProductReviewMutation>;
export type CreateProductReviewMutationOptions = Apollo.BaseMutationOptions<
  CreateProductReviewMutation,
  CreateProductReviewMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >(DeleteProductDocument, options);
}
export type DeleteProductMutationHookResult = ReturnType<
  typeof useDeleteProductMutation
>;
export type DeleteProductMutationResult =
  Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const UserDocument = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const MeDocument = gql`
  query Me {
    me {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UsersDocument = gql`
  query Users {
    users {
      page
      results {
        ...UserFields
      }
      limit
      totalPages
      totalResults
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        ...UserFields
      }
      tokens {
        ...TokenFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
  ${TokenFieldsFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($data: IRegisterUser!) {
    register(data: $data) {
      user {
        ...UserFields
      }
      tokens {
        ...TokenFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
  ${TokenFieldsFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const RefreshTokensDocument = gql`
  mutation RefreshTokens($refreshToken: String!) {
    refreshTokens(refreshToken: $refreshToken) {
      ...TokenFields
    }
  }
  ${TokenFieldsFragmentDoc}
`;
export type RefreshTokensMutationFn = Apollo.MutationFunction<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokensMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokensMutation,
    RefreshTokensMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefreshTokensMutation,
    RefreshTokensMutationVariables
  >(RefreshTokensDocument, options);
}
export type RefreshTokensMutationHookResult = ReturnType<
  typeof useRefreshTokensMutation
>;
export type RefreshTokensMutationResult =
  Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId)
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const UpdateAccountDocument = gql`
  mutation UpdateAccount($data: IUpdateUser!) {
    updateAccount(data: $data) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type UpdateAccountMutationFn = Apollo.MutationFunction<
  UpdateAccountMutation,
  UpdateAccountMutationVariables
>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAccountMutation,
    UpdateAccountMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAccountMutation,
    UpdateAccountMutationVariables
  >(UpdateAccountDocument, options);
}
export type UpdateAccountMutationHookResult = ReturnType<
  typeof useUpdateAccountMutation
>;
export type UpdateAccountMutationResult =
  Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<
  UpdateAccountMutation,
  UpdateAccountMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout($refreshToken: String!) {
    logout(refreshToken: $refreshToken) {
      message
    }
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password) {
      message
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const SendVerificationEmailDocument = gql`
  mutation SendVerificationEmail {
    sendVerificationEmail {
      message
    }
  }
`;
export type SendVerificationEmailMutationFn = Apollo.MutationFunction<
  SendVerificationEmailMutation,
  SendVerificationEmailMutationVariables
>;

/**
 * __useSendVerificationEmailMutation__
 *
 * To run a mutation, you first call `useSendVerificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendVerificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendVerificationEmailMutation, { data, loading, error }] = useSendVerificationEmailMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendVerificationEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendVerificationEmailMutation,
    SendVerificationEmailMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SendVerificationEmailMutation,
    SendVerificationEmailMutationVariables
  >(SendVerificationEmailDocument, options);
}
export type SendVerificationEmailMutationHookResult = ReturnType<
  typeof useSendVerificationEmailMutation
>;
export type SendVerificationEmailMutationResult =
  Apollo.MutationResult<SendVerificationEmailMutation>;
export type SendVerificationEmailMutationOptions = Apollo.BaseMutationOptions<
  SendVerificationEmailMutation,
  SendVerificationEmailMutationVariables
>;
