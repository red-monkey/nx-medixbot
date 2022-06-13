import { combineReducers } from 'redux';
import { loginReducer, loginMethodReducer } from './loginReducer';

import { modalReducer, languageModalReducer, DatePickerModalReducer } from './modalReducer';
import userPictureReducer from './userPictureReducer';
import membershipModalReducer, {
  membershipReducer,
} from './membershipModalReducer';
import { locationReducer } from './locationReducer';
import { challengeReducer } from './challengeReducer';
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
  DatePickerModalReducer
});
export default reducers;
