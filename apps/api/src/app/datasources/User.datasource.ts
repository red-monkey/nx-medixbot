import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  TUser,
  IUserDocument,
  IUserModel,
  EGraphQlErrorCode,
  TDoctorModel,
  TPatientModel,
  TDoctorDocument,
  EModelNames,
  EUserRole,
  IUpdateDoctor,
  TDoctor,
  TDoctorList,
  TPatient,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class UserDataSource extends MongoDataSource<IUserDocument, IContext> {
  private User: IUserModel;
  private Doctor: TDoctorModel;
  private Patient: TPatientModel;
  constructor(
    UserModel: IUserModel,
    DoctorModel: TDoctorModel,
    PatientModel: TPatientModel
  ) {
    super(UserModel);
    this.User = UserModel;
    this.Doctor = DoctorModel;
    this.Doctor = PatientModel;
  }
  getUser(userId: string) {
    return this.findOneById(userId);
  }

  async getUsers(
    filter: FilterQuery<IUserDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.User.paginate(filter, options);
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

  async getDoctorField(userRef: string) {
    return await this.Doctor.findOne({
      userRef,
    });
  }

  async getPatientField(userRef: string) {
    return await this.Patient.findOne({
      userRef,
    });
  }

  async createORUpdateDoctor(userRef: string, data: IUpdateDoctor) {
    const doctor = await this.getDoctorField(userRef);
    if (doctor) {
      Object.assign(doctor, data);
      await doctor.save();
      return doctor;
    }
    return await this.Doctor.create({ userRef, ...data });
  }

  async createORUpdatePatient(userRef: string, data: unknown) {
    const patient = await this.getPatientField(userRef);
    if (patient) {
      Object.assign(patient, data);
      await patient.save();
      return patient;
    }
    return await this.Patient.create({ userRef });
  }

  async getDoctor(userRef: string) {
    const doctor: TDoctor = await this.Doctor.findOne({ userRef });
    doctor.info = await this.getUser(userRef);
    return doctor;
  }

  async getDoctors(
    filter: FilterQuery<IUserDocument>,
    options: IPaginateOption<unknown>
  ) {
    /**
     * TO DO:
     * Need To be improved later with aggregate or populate
     */
    const users = await this.getUsers(
      { userRole: EUserRole.Doctor, ...filter },
      options
    );
    const allDoctor = await Promise.all(
      users.results?.map(async (item) => {
        const docFields: TDoctor = await this.Doctor.findOne({
          userRef: item.id,
        });
        return {
          info: item,
          ...docFields,
        };
      })
    );

    const doctors: TDoctorList = {
      results: allDoctor,
      limit: users.limit,
      page: users.page,
      totalPages: users.totalPages,
      totalResults: users.totalResults,
    };
    return doctors;
  }

  async getPatient(userRef: string) {
    const patient: TPatient = await this.Patient.findOne({ userRef });
    patient.info = await this.getUser(userRef);
    return patient;
  }
}
