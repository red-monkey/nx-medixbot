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
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class UserDataSource extends MongoDataSource<IUserDocument, IContext> {
  private User: IUserModel;
  private Doctor: TDoctorModel;
  constructor(
    UserModel: IUserModel,
    DoctorModel: TDoctorModel,
    PatientModel: TPatientModel
  ) {
    super(UserModel);
    this.User = UserModel;
    this.Doctor = DoctorModel;
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

  async getDoctorField(userRef: string) {
    return await this.Doctor.findOne({
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
    return await this.model.create(data);
  }

  async getDoctor(userRef: string) {
    const doctor = await this.model.aggregate([
      { $match: { userRef } },
      {
        $lookup: {
          from: EModelNames.DOCTOR_FIELD,
          localField: '_id',
          foreignField: 'userRef',
          as: 'info',
        },
      },
      {
        $unwind: '$info',
      },
    ]);
    if (doctor && doctor.length > 0) {
      return doctor[0];
    }
    return false;
  }

  async getDoctors(options?: IPaginateOption<unknown>) {
    const doctor = await this.getUsers({ userRole: EUserRole.Doctor }, options);
    return doctor;
  }

  async getPatient(userRef: string) {
    const doctor = await this.model.aggregate([
      { $match: { userRef } },
      {
        $lookup: {
          from: EModelNames.PATIENT_FIELD,
          localField: '_id',
          foreignField: 'userRef',
          as: 'info',
        },
      },
      {
        $unwind: '$info',
      },
    ]);
    if (doctor && doctor.length > 0) {
      return doctor[0];
    }
    return false;
  }
}
