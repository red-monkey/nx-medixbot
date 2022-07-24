import { combineReducers } from 'redux';
import { loginReducer, loginMethodReducer } from './loginReducer';

import { modalReducer, languageModalReducer, DatePickerModalReducer } from './modalReducer';
import userPictureReducer from './userPictureReducer';
import membershipModalReducer, {
  membershipReducer,
} from './membershipModalReducer';
import { locationReducer } from './locationReducer';
import { challengeReducer } from './challengeReducer';
import marketplaceReducer from './marketplaceReducer';
import { orderReducer } from './ordersReducer';
import { appointmentReducer } from './appointmentReducer';
const reducers = combineReducers({
  loginReducer,
  loginMethodReducer,
  modalReducer,
  userPictureReducer,
  membershipModalReducer,
  challengeReducer,
  locationReducer,
  languageModalReducer,
  membershipReducer,
  DatePickerModalReducer,
  marketplaceReducer,
  orderReducer,
  appointmentReducer
});
export default reducers;
