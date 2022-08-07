import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IAppointmentDocument,
  IAppointmentModel,
  ICreateAppointment,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class AppointmentDataSource extends MongoDataSource<
  IAppointmentDocument,
  IContext
> {
  private Appointment: IAppointmentModel;

  constructor(AppointmentModel: IAppointmentModel) {
    super(AppointmentModel);
    this.Appointment = AppointmentModel;
  }

  async getAppointment(appointmentId: string) {
    return await (
      await (
        await (
          await (
            await this.findOneById(appointmentId)
          ).populate({ path: 'patient', select: '-password' })
        ).populate({ path: 'doctor', select: '-password' })
      ).populate('hospital')
    ).populate('clinic');
  }

  async getAppointments(
    filter: FilterQuery<IAppointmentDocument>,
    options: IPaginateOption<unknown>
  ) {
    options.populate = [
      { path: 'patient' },
      { path: 'doctor' },
      { path: 'hospital' },
      { path: 'clinic' },
    ];
    return await this.Appointment.paginate(filter, options);
  }
  async getMyAppointments(
    patientID,
    filter: FilterQuery<IAppointmentDocument>,
    options: IPaginateOption<unknown>
  ) {
    filter = { patient: patientID };
    options.populate = [
      { path: 'patient' },
      { path: 'doctor' },
      { path: 'hospital' },
      { path: 'clinic' },
    ];
    return await this.Appointment.paginate(filter, options);
  }

  async makeAppointment(appointment: ICreateAppointment) {
    return (
      await (
        await await await this.model.create(appointment)
      ).populate({ path: 'patient', select: '-password' })
    ).populate({ path: 'doctor', select: '-password' });
  }

  async updateAppointment(
    appointmentId: string,
    data: FilterQuery<IAppointmentDocument>
  ) {
    const appointment = await this.getAppointment(appointmentId);
    if (!appointment) {
      throw new GraphQlApiError(
        'Appointment not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(appointment, data);
    await appointment.save();
    return appointment;
  }

  async deleteAppointment(appointmentId: string) {
    const appointment = await this.getAppointment(appointmentId);
    if (!appointment) {
      throw new GraphQlApiError(
        'Appointment not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await appointment.remove();
    return appointment;
  }
}
