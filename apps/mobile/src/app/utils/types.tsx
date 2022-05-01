import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {Animated} from 'react-native';
import {
  Asset,
  ErrorCode,
  MediaType,
  PhotoQuality,
} from 'react-native-image-picker';
import {
  ADD_OR_REMOVE_LANGUAGE,
  CLOSE_LANGUAGE_MODAL,
  CLOSE_LOCATION_MODAL,
  CLOSE_MEMBERSHIP_MODAL,
  CLOSE_PICTURE_PICKER_MODAL,
  OPEN_LANGUAGE_MODAL,
  OPEN_LOCATION_MODAL,
  OPEN_MEMBERSHIP_MODAL,
  OPEN_PICTURE_PICKER_MODAL,
  SET_LOGIN_METHOD_EMAIL,
  SET_LOGIN_METHOD_PHONE_NUMBER,
  SET_USER_IS_LOGGED_IN,
  SET_USER_PICTURE,
} from '../redux/actions/actionTypes';
export type RootStackParamList = {
  Home: undefined;
  Information: {title: string};
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  VerificationCode: undefined;
  Register: undefined;
  Dashboard: undefined
};

export type InformationProps = {
  title: string,
  description: string,
};

export type InformationScreenHeaderProps = {
  extended: boolean
};
export type HomeNavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ForgotPassProps = StackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;
export type LoginProps = StackNavigationProp<RootStackParamList, 'Login'>;
export type ResetPassProps = StackNavigationProp<
  RootStackParamList,
  'ResetPassword'
>;
export type VerificationCode = StackNavigationProp<
  RootStackParamList,
  'VerificationCode'
>;
export type RegisterProps = StackNavigationProp<RootStackParamList, 'Register'>;
export type IndicatorProps = {
  scrollx: Animated.Value;
};
export type gender = 'Male' | 'Female' | 'Other';
export type membership = 'Referrer' | 'Partner' | 'Employer' | 'Family';
export const CountryCodeList = [
  'AF',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'BE',
  'BZ',
  'BJ',
  'BM',
  'BT',
  'BO',
  'BA',
  'BW',
  'BV',
  'BR',
  'IO',
  'VG',
  'BN',
  'BG',
  'BF',
  'BI',
  'KH',
  'CM',
  'CA',
  'CV',
  'BQ',
  'KY',
  'CF',
  'TD',
  'CL',
  'CN',
  'CX',
  'CC',
  'CO',
  'KM',
  'CK',
  'CR',
  'HR',
  'CU',
  'CW',
  'CY',
  'CZ',
  'CD',
  'DK',
  'DJ',
  'DM',
  'DO',
  'EC',
  'EG',
  'SV',
  'GQ',
  'ER',
  'EE',
  'SZ',
  'ET',
  'FK',
  'FO',
  'FJ',
  'FI',
  'FR',
  'GF',
  'PF',
  'TF',
  'GA',
  'GM',
  'GE',
  'DE',
  'GH',
  'GI',
  'GR',
  'GL',
  'GD',
  'GP',
  'GU',
  'GT',
  'GG',
  'GN',
  'GW',
  'GY',
  'HT',
  'HM',
  'HN',
  'HU',
  'IS',
  'IN',
  'ID',
  'IR',
  'IQ',
  'IE',
  'IM',
  'IL',
  'IT',
  'CI',
  'JM',
  'JP',
  'JE',
  'JO',
  'KZ',
  'KE',
  'XK',
  'KW',
  'KG',
  'LA',
  'LV',
  'LB',
  'LS',
  'LR',
  'LY',
  'LI',
  'LT',
  'LU',
  'MO',
  'MK',
  'MG',
  'MW',
  'MY',
  'MV',
  'ML',
  'MT',
  'MH',
  'MQ',
  'MR',
  'MU',
  'YT',
  'MX',
  'FM',
  'MD',
  'MC',
  'MN',
  'ME',
  'MS',
  'MA',
  'MZ',
  'MM',
  'NA',
  'NR',
  'NP',
  'NL',
  'NC',
  'NZ',
  'NI',
  'NE',
  'NG',
  'NU',
  'NF',
  'KP',
  'MP',
  'NO',
  'OM',
  'PK',
  'PW',
  'PS',
  'PA',
  'PG',
  'PY',
  'PE',
  'PH',
  'PN',
  'PL',
  'PT',
  'PR',
  'QA',
  'CG',
  'RO',
  'RU',
  'RW',
  'RE',
  'BL',
  'SH',
  'KN',
  'LC',
  'MF',
  'PM',
  'VC',
  'WS',
  'SM',
  'SA',
  'SN',
  'RS',
  'SC',
  'SL',
  'SG',
  'SX',
  'SK',
  'SI',
  'SB',
  'SO',
  'ZA',
  'GS',
  'KR',
  'SS',
  'ES',
  'LK',
  'SD',
  'SR',
  'SJ',
  'SE',
  'CH',
  'SY',
  'ST',
  'TW',
  'TJ',
  'TZ',
  'TH',
  'TL',
  'TG',
  'TK',
  'TO',
  'TT',
  'TN',
  'TR',
  'TM',
  'TC',
  'TV',
  'UG',
  'UA',
  'AE',
  'GB',
  'US',
  'UM',
  'VI',
  'UY',
  'UZ',
  'VU',
  'VA',
  'VE',
  'VN',
  'WF',
  'EH',
  'YE',
  'ZM',
  'ZW',
  'KI',
  'HK',
  'AX',
] as const;

export type CountryCode = typeof CountryCodeList[number];

export type CallingCode = string;

export interface Country {
  callingCode: CallingCode[];
  flag: string;
  name: string;
  cca2: CountryCode;
}

export type loginMethod = 'phone' | 'email';

export interface SetLoginMethodAction {
  type: typeof SET_LOGIN_METHOD_PHONE_NUMBER | typeof SET_LOGIN_METHOD_EMAIL;
  payload: loginMethod;
}

export interface SetModaldAction {
  type: typeof OPEN_PICTURE_PICKER_MODAL | typeof CLOSE_PICTURE_PICKER_MODAL;
  payload: boolean;
}

export interface SetLocationModaldAction {
  type: typeof OPEN_LOCATION_MODAL | typeof CLOSE_LOCATION_MODAL;
  payload: boolean;
}

export interface SetLanguageModaldAction {
  type: typeof OPEN_LANGUAGE_MODAL | typeof CLOSE_LANGUAGE_MODAL | typeof ADD_OR_REMOVE_LANGUAGE;
  payload: boolean | string;
}

export interface SetMembershipModaldAction {
  type: typeof OPEN_MEMBERSHIP_MODAL | typeof CLOSE_MEMBERSHIP_MODAL;
  payload: boolean;
}

export interface SetPictureAction {
  type: typeof SET_USER_PICTURE;
  payload: Asset | null;
}

export interface SetIsloggedIn {
  type: typeof SET_USER_IS_LOGGED_IN;
  payload: boolean;
}

export type LoginActionTypes = SetLoginMethodAction;
//export type AppDispatch = typeof store.dispatch

export type VerificationForm = {
  email: string;
  phoneNumber: string;
};

export interface ImageLibraryOptions {
  selectionLimit?: number;
  mediaType: MediaType;
  maxWidth?: number;
  maxHeight?: number;
  quality?: PhotoQuality;
  includeBase64?: boolean;
}

export interface CameraOptions
  extends Omit<ImageLibraryOptions, 'selectionLimit'> {
  durationLimit?: number;
  saveToPhotos?: boolean;
  cameraType?: CameraOptions;
}

export interface ImagePickerResponse {
  didCancel?: boolean;
  errorCode?: ErrorCode;
  errorMessage?: string;
  assets?: Asset[];
}

export interface buttonStyle {
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderRightColor?: string;
  borderLeftColor?: string;
  borderTopLeftRadius?: number;
  borderBottomLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  paddingLeft?: number;
  backgroundColor?: string;
}

export type loginmutationParams = {
  email?: string;
  phone?: string;
  password: string;
  method: loginMethod;
};