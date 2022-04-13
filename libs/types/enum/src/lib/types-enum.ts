export enum ENodeEnv {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}
export enum ScreenSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
  '5xl' = '5xl',
}
export enum EUserRole {
  DOCTOR = 'doctor',
  PATIENT = 'patient',
  ADMIN = 'admin',
}
export enum EUserAccountStatus {
  OPENED = 'opened',
  CLOSED = 'closed',
  UNVERIFIED = 'unverified',
}
export enum EGender {
  MALE = 'male',
  FEMALE = 'female',
}
export enum EModelNames {
  USER = 'User',
  TOKEN = 'Token',
  DOCTOR = 'Doctor',
  PATIENT = 'Doctor',
  CLINIC = 'Clinic',
}
export enum ETokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
  RESET_PASSWORD = 'resetPassword',
  VERIFY_EMAIL = 'verifyEmail',
}
export enum EGraphQlErrorCode {
  GRAPHQL_PARSE_FAILED = 'GRAPHQL_PARSE_FAILED',
  GRAPHQL_VALIDATION_FAILED = 'GRAPHQL_VALIDATION_FAILED',
  BAD_USER_INPUT = 'BAD_USER_INPUT',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  FORBIDDEN = 'FORBIDDEN',
  PERSISTED_QUERY_NOT_FOUND = 'PERSISTED_QUERY_NOT_FOUND',
  PERSISTED_QUERY_NOT_SUPPORTED = 'PERSISTED_QUERY_NOT_SUPPORTED',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}
export enum EAvailabilityStatus {
  AVAILABLE,
  UNAVAILABLE,
}
