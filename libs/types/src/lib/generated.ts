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

export type IAvailability = {
  day?: InputMaybe<Scalars['Int']>;
  times?: InputMaybe<Array<InputMaybe<ITime>>>;
};

export type ICreateBlog = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ICreateMedecineImage = {
  comment?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  hospital_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  report?: InputMaybe<Scalars['String']>;
  user: Scalars['ID'];
};

export type IDocument = {
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type ITime = {
  hour?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['String']>;
};

export type IUpdateAppointment = {
  conditions?: InputMaybe<Scalars['String']>;
  dateTime?: InputMaybe<Scalars['String']>;
  doctorRef?: InputMaybe<Scalars['ID']>;
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IUpdateBlog = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateDoctor = {
  about?: InputMaybe<Scalars['String']>;
  availability?: InputMaybe<Array<InputMaybe<IAvailability>>>;
  documents?: InputMaybe<Array<InputMaybe<IDocument>>>;
  domain?: InputMaybe<Scalars['String']>;
  unAvailability?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  createMedecineImage?: Maybe<TMedecineImage>;
  createUser?: Maybe<TUser>;
  deleteAppointment: Scalars['String'];
  deleteBlog: Scalars['String'];
  deleteMedecineImage: Scalars['String'];
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
  updateDoctorInfo: Scalars['String'];
  updateMedecineImage?: Maybe<TMedecineImage>;
};

export type MutationCreateBlogArgs = {
  data: ICreateBlog;
};

export type MutationCreateMedecineImageArgs = {
  data: ICreateMedecineImage;
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

export type MutationDeleteMedecineImageArgs = {
  medecineImageId: Scalars['ID'];
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
  data: AddAppointmentBodyInput;
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
  data: IUpdateBlog;
};

export type MutationUpdateAppointmentStatusArgs = {
  appointmentId: Scalars['ID'];
  newStatus: EAppointmentStatus;
};

export type MutationUpdateBlogArgs = {
  data: IUpdateBlog;
};

export type MutationUpdateDoctorInfoArgs = {
  data: IUpdateDoctor;
};

export type MutationUpdateMedecineImageArgs = {
  data: IUpdateMedecineImage;
};

export type Query = {
  appointment?: Maybe<TAppointment>;
  appointments: TPaginatedAppointment;
  doctor?: Maybe<TDoctor>;
  doctors: TDoctorList;
  getBlog?: Maybe<TBlog>;
  getBlogs: TPaginatedBlogs;
  getMedecineImage?: Maybe<TMedecineImage>;
  getMedecineImages: TPaginatedMedecineImage;
  me?: Maybe<TUser>;
  patient?: Maybe<TPatient>;
  user?: Maybe<TUser>;
  users: TPaginatedUsers;
};

export type QueryAppointmentArgs = {
  appointmentId?: InputMaybe<Scalars['ID']>;
};

export type QueryAppointmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryDoctorArgs = {
  userId: Scalars['ID'];
};

export type QueryDoctorsArgs = {
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

export type QueryGetMedecineImageArgs = {
  medecineImageId: Scalars['ID'];
};

export type QueryGetMedecineImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryPatientArgs = {
  userId: Scalars['ID'];
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
  conditions?: Maybe<Scalars['String']>;
  dateTime?: Maybe<Scalars['String']>;
  doctor?: Maybe<TUser>;
  doctorJoinAt?: Maybe<Scalars['String']>;
  doctorQuitAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  patient?: Maybe<TUser>;
  patientJoinAt?: Maybe<Scalars['String']>;
  patientQuitAt?: Maybe<Scalars['String']>;
  status?: Maybe<EAppointmentStatus>;
  symptoms?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type TPaginatedMedecineImage = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Maybe<TMedecineImage>>;
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

export type AddAppointmentBodyInput = {
  conditions?: InputMaybe<Scalars['String']>;
  dateTime: Scalars['String'];
  doctorRef: Scalars['ID'];
  symptoms?: InputMaybe<Array<Scalars['String']>>;
};

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
