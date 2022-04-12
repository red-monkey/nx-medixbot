import * as Joi from 'joi';
import { validate } from '.';
import { IContext } from '../types';

export default function catchReq<OutputData, Args>(
  schema: Joi.ObjectSchema<Args>,
  fn: (data: Args, ctx: IContext) => OutputData
) {
  return (parent: unknown, args: Args, ctx: IContext) => {
    const data = validate<Args>(schema, args);
    return fn(data, ctx);
  };
}
