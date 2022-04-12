import * as Joi from 'joi';

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(4000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description('days after which refresh tokens expire'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which reset password token expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which verify email token expires'),
    VERIFICATION_EMAIL_URL: Joi.string()
      .required()
      .description('Base url for emai verification'),
    SENDGRID_API_KEY: Joi.string()
      .required()
      .description('Sendgrid api key required'),
    GOOGLE_CLIENT_ID: Joi.string()
      .required()
      .description('Google auth client ID required'),
    GOOGLE_CLIENT_SECRET: Joi.string()
      .required()
      .description('Google auth client secret required'),
    FACEBOOK_APP_ID: Joi.string()
      .required()
      .description('Facebook app ID required'),
    FACEBOOK_SECRET: Joi.string()
      .required()
      .description('Facebook auth client secret required'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  appMode: process.env.NODE_ENV,
  port: envVars.PORT as number,
  mongoose: {
    url: envVars.MONGODB_URL as string,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET as string,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES as number,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS as number,
    resetPasswordExpirationMinutes:
      envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES as number,
    verifyEmailExpirationMinutes:
      envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES as number,
  },
  email: {
    sendGridAPIKey: envVars.SENDGRID_API_KEY as string,
  },
  verificationEmailUrl: envVars.VERIFICATION_EMAIL_URL as string,
  google: {
    clientID: envVars.GOOGLE_CLIENT_ID as string,
    clientSecret: envVars.GOOGLE_CLIENT_SECRET as string,
  },
  facebook: {
    clientID: envVars.FACEBOOK_APP_ID as string,
    clientSecret: envVars.FACEBOOK_SECRET as string,
  },
};
