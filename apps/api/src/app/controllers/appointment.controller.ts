import {
  EAppointmentStatus,
  EGraphQlErrorCode,
  ICreateAppointment,
  TAppointment,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function makeAppointment(
  input: { data: ICreateAppointment & { patient: string } },
  ctx: IContext
) {
  const appointmentData = input.data;
  appointmentData.patient = ctx.user.id;
  const appointemnt = await ctx.dataSources.appointments.makeAppointment(
    appointmentData
  );

  return appointemnt;
}

interface IGetAppointmentArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getAppointments(data: IGetAppointmentArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'populate', 'limit', 'page']);
  const result = await ctx.dataSources.appointments.getAppointments(
    filter,
    options
  );
  return result;
}
async function getMyAppointments(data: IGetAppointmentArgs, ctx: IContext) {
  const filter = {};

  const options = pick(data, ['sortBy', 'populate', 'limit', 'page']);
  const result = await ctx.dataSources.appointments.getMyAppointments(
    ctx.user.id,
    filter,
    options
  );
  return result;
}

async function getAppointment(data: { appointmentId: string }, ctx: IContext) {
  const appointemnt = await ctx.dataSources.appointments.getAppointment(
    data.appointmentId
  );
  if (!appointemnt) {
    throw new GraphQlApiError(
      'Appointment not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }

  return appointemnt;
}

async function updateAppointment(
  data: { appointmentId: string; data: TAppointment },
  ctx: IContext
) {
  return await ctx.dataSources.appointments.updateAppointment(
    data.appointmentId,
    data.data
  );
}

async function updateAppointmentStatus(
  data: { appointmentId: string; newStatus: EAppointmentStatus },
  ctx: IContext
) {
  const appointemnt = await ctx.dataSources.appointments.getAppointment(
    data.appointmentId
  );
  if (!appointemnt) {
    throw new GraphQlApiError(
      'Appointment not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  if (
    ctx.user.id !== appointemnt.patient.id &&
    ctx.user.id !== appointemnt.doctor.id
  ) {
    throw new GraphQlApiError(
      'You can not update this appointment',
      EGraphQlErrorCode.FORBIDDEN
    );
  }
  return await ctx.dataSources.appointments.updateAppointment(
    data.appointmentId,
    { status: data.newStatus }
  );
}

async function deleteAppointment(
  data: { appointmentId: string },
  ctx: IContext
) {
  await ctx.dataSources.appointments.deleteAppointment(data.appointmentId);
  return 'Deleted';
}

export default {
  getAppointments,
  makeAppointment,
  getAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
  getMyAppointments,
};
