
import { EAppointmentStatus, EMembership } from '@medixbot/types';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated } from 'react-native';
import {
  Asset,
  ErrorCode,
  MediaType,
  PhotoQuality,
} from 'react-native-image-picker';
import { IUser } from '../apollo/GraphQL/types';
import {
  ADD_OR_REMOVE_LANGUAGE,
  CLOSE_LANGUAGE_MODAL,
  OPEN_LANGUAGE_MODAL,
  SET_LOCATION,
  SET_LOGIN_METHOD_EMAIL,
  SET_LOGIN_METHOD_PHONE_NUMBER,
  SET_USER_BADGES,
  SET_USER_CHALLENGES,
  SET_USER_GOALS,
  SET_MEMBERSHIP,
  SET_USER_IS_LOGGED_IN,
  SET_USER_MOOD,
  CLOSE_MEMBERSHIP_MODAL,
  CLOSE_PICTURE_PICKER_MODAL,
  OPEN_MEMBERSHIP_MODAL,
  OPEN_PICTURE_PICKER_MODAL,
  SET_USER_REWARDS,
  SET_USER_SCORE,
  OPEN_DATE_PICKER_MODAL,
  CLOSE_DATE_PICKER_MODAL,
  SET_BIRTH_DATE,
  ADD_ORDER,
  CHANGE_ORDER_STATUS,
  SET_HEALTHCARE_TYPE,
  SET_NATURE_OF_HEALTH,
  SET_DOCTOR,
  ADD_APPOINTMENT,
  RESET_APPOINTMENT,
  ADD_FOOD,
} from '../redux/actions/actionTypes';
import { FoodRecognitionData } from '../screens/MetabolicHealth/components/AddFood';

export type RootStackParamList = {
  Home: undefined;
  Information: { title: string };
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  VerificationCode: undefined;
  Register: undefined;
  Dashboard: undefined;
  Blogs: undefined;
  Gamification: undefined;
  BlogDetails: undefined;
  FoodRecognition: undefined;
  SelectLocation: undefined;
  MedicalHistory: undefined;
  SubscriptionDetails: undefined;
  PatientProfile: undefined;
  Visits: undefined;
  MyOrders: undefined;
  OrderStatus: { orderID: string, orderDate: string, trackingNum: string, quantity: number, totalAmount: number, setDelivered: undefined};
};

export type MarketplaceStackParamList = {
  Marketplace: undefined,
  ProductDetails: {id: number, added: boolean},
  Cart: undefined,
  Checkout: {totalPrice: number},
  SetShipping: {userInfo: IUser }
}

export type TDoctor = {
  title: string, 
  name:string, 
  description: string, 
  rate: string, 
  reviewNumber: string, 
  imgUri: string,
  patients: number,
  experience: string,
  about: string,
  availability: string[]
}
export type AppointmentStackParamList = {
  AppointmentHome: undefined,
  MakeAppointment: undefined,
  BookAppointment: {step ?: number},
  DoctorDetails: {doctor: TDoctor}
}

export type MetabolicHealthStackParamList = {
  MetabolicHealth: undefined,
  AddFood: undefined,
  HealthAndGoodSleep: undefined,
  GlucoseLevel: undefined
}

export type THealthcare = 'Urgent Health Care' | 'Primary Healthcare' | 'Chronic Healthcare' | 'Mental Healthcare' | 'Pediatrics Healthcare' |
'Gynecology Healthcare' | 'Pregnancy Healthcare'

export type InformationProps = {
  title: string;
  description: string;
};

export type InformationScreenHeaderProps = {
  extended: boolean;
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

export type ProductProps = StackNavigationProp<
  MarketplaceStackParamList,
  'ProductDetails'
>;

export type DoctorDetailsProps = StackNavigationProp<
  AppointmentStackParamList,
  'DoctorDetails'
  >;

export interface IAddressData {
  state: string,
  city: string,
  postCode: string,
  addressLine1: string,
  addressLine2: string,
  country: string
}

export type RegisterProps = StackNavigationProp<RootStackParamList, 'Register'>;
export type IndicatorProps = {
  scrollx: Animated.Value;
};

export type BlogsProps = StackNavigationProp<RootStackParamList, 'Blogs'>;
export type BlogDetailsProp = StackNavigationProp<
  RootStackParamList,
  'BlogDetails'
>;
export type GamificationProps = StackNavigationProp<
  RootStackParamList,
  'Gamification'
>;

export type gender = 'male' | 'female' | 'other';
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

export interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: location;
}

export interface SetModaldAction {
  type: typeof OPEN_PICTURE_PICKER_MODAL | typeof CLOSE_PICTURE_PICKER_MODAL;
  payload: boolean;
}

export interface SetLanguageModaldAction {
  type:
    | typeof OPEN_LANGUAGE_MODAL
    | typeof CLOSE_LANGUAGE_MODAL
    | typeof ADD_OR_REMOVE_LANGUAGE;
  payload: string[];
}

export interface SetDateModalAction {
  type: 
  typeof OPEN_DATE_PICKER_MODAL |
  typeof CLOSE_DATE_PICKER_MODAL |
  typeof SET_BIRTH_DATE
  payload: string
}

export interface SetMembershipModaldAction {
  type: typeof OPEN_MEMBERSHIP_MODAL | typeof CLOSE_MEMBERSHIP_MODAL;
  payload: boolean;
}

export interface SetMembershipAction {
  type: typeof SET_MEMBERSHIP;
  payload: EMembership;
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

export type TMood = null | 'great' | 'good' | 'okay' | 'bad' | 'awful';
interface UpdateMoodAction {
  type: typeof SET_USER_MOOD;
  payload: TMood;
}

interface UpdateScoreAction {
  type: typeof SET_USER_SCORE;
  payload: number;
}

interface UpdateChallengesAtion {
  type: typeof SET_USER_CHALLENGES;
  payload: number;
}

interface UpdateBadgesAction {
  type: typeof SET_USER_BADGES;
  payload: number;
}

interface UpdateGoalsAction {
  type: typeof SET_USER_GOALS;
  payload: number;
}

interface UpdateRewardsAction {
  type: typeof SET_USER_REWARDS;
  payload: number;
}

export type TNatureOfHealth = {
  HealthCondition: string,
  StartDate: string,
  Worse : string,
  AdditionalInfo: string,
  liveAlone: boolean,
  impairement: boolean,
  hospital: string,
}

export type TAppointment = {
  Healthcare: THealthcare|null,
  NatureOfHealth: TNatureOfHealth|null,
  doctor: TDoctor|null,
  date: string,
  time: string,
  status?: EAppointmentStatus
}

interface SetHealthCareAction {
  type: typeof SET_HEALTHCARE_TYPE;
  payload: THealthcare;
}

interface SetNatureOfHealthAction {
  type: typeof SET_NATURE_OF_HEALTH;
  payload: TNatureOfHealth ;
}

interface SelectDoctorAction {
  type: typeof SET_DOCTOR;
  payload: TDoctor ;
}

interface AddAppointmentAction {
  type: typeof ADD_APPOINTMENT;
  payload: {date: string, time: string} ;
}

interface ResetCurrentAppointmentAction {
  type: typeof RESET_APPOINTMENT
}

export type ChallengeAction =
  | UpdateMoodAction
  | UpdateScoreAction
  | UpdateChallengesAtion
  | UpdateBadgesAction
  | UpdateGoalsAction
  | UpdateRewardsAction;

export type AppointmentAction = SetNatureOfHealthAction |
SetHealthCareAction | SelectDoctorAction | AddAppointmentAction | ResetCurrentAppointmentAction
  
/*food*/ 

export type FoodAction = AddFoodAction

interface AddFoodAction {
  type: typeof ADD_FOOD;
  payload: FoodRecognitionData ;
}


export type location = {
  country?: string;
  city?: string;
  state?: string;
  postCode?: string;
  addressLine1?: string;
  addressLine2?: string;
};

export type TDelivery =
{
  type: TDeliveryOptions,
  address: string
}
export type TDeliveryOptions = 'Home Address' | 'Nearest Pharmacy'
export type TPaymentOptions = 'Credit Card' | 'Medixcoins' | 'Charity'


interface UpdateScoreAction {
  type: typeof SET_USER_SCORE;
  payload: number;
}

interface UpdateChallengesAtion {
  type: typeof SET_USER_CHALLENGES;
  payload: number;
}

interface UpdateBadgesAction {
  type: typeof SET_USER_BADGES;
  payload: number;
}

interface UpdateGoalsAction {
  type: typeof SET_USER_GOALS;
  payload: number;
}

interface UpdateRewardsAction {
  type: typeof SET_USER_REWARDS;
  payload: number;
}

/* Orders */
export type TOrder = {
  orderId: string,
  TrackingNumber: string,
  Quantity: number,
  total: number,
  placementDate: string,
  status: TStatus,
  estimatedDelivery: string, 
  shippingAddress: string
}

export type TStatus = 'Received' | 'Shipped' | 'Delivered'

interface AddOrderAction {
  type: typeof ADD_ORDER;
  payload: TOrder;
}

interface ChangeOrderStatusAction {
  type: typeof CHANGE_ORDER_STATUS;
  payload: {orderId: string, newStatus: TStatus};
}

export type orderAction = AddOrderAction | ChangeOrderStatusAction