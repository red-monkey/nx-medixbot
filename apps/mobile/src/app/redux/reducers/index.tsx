import { combineReducers } from 'redux';
import { loginReducer, loginMethodReducer } from './loginReducer';

import { modalReducer, languageModalReducer, DatePickerModalReducer } from './modalReducer';
import membershipModalReducer, {
  membershipReducer,
} from './membershipModalReducer';
import { locationReducer } from './locationReducer';
import { challengeReducer } from './challengeReducer';
import marketplaceReducer from './marketplaceReducer';
import { orderReducer } from './ordersReducer';
import { appointmentReducer } from './appointmentReducer';
import { foodReducer } from './foodReducer';
const reducers = combineReducers({
  loginReducer,
  loginMethodReducer,
  modalReducer,
  membershipModalReducer,
  challengeReducer,
  locationReducer,
  languageModalReducer,
  membershipReducer,
  DatePickerModalReducer,
  marketplaceReducer,
  orderReducer,
  appointmentReducer,
  foodReducer
});
export default reducers;
