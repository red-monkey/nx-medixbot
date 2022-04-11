export enum ENodeEnv {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}
export enum EUserRole {
  DOCTOR = 'doctor',
  PATIENT = 'patient',
  ADMIN = 'admin',
}
export enum EUserAccountStatus {
  OPENED = 'opened',
  CLOSED = 'closed',
  NOT_VERIFIED = 'not verified',
}
export enum EGender {
  MALE = 'male',
  FEMALE = 'female',
}
export enum EModelNames {
  USER = 'User',
  TOKEN = 'Token',
}
export enum ETokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
  RESET_PASSWORD = 'resetPassword',
  VERIFY_EMAIL = 'verifyEmail',
}
