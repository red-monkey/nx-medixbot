import { UserInputError } from 'apollo-server-express';
import * as Joi from 'joi';

export default function <Args>(schema: Joi.ObjectSchema<Args>, data: Args) {
  const { value, error } = schema
    .prefs({ errors: { label: 'key' } })
    .validate(data);
  if (error) {
    throw new UserInputError('Argument validation error', {
      details: error.message,
    });
  }

  return value;
}
