import {combineReducers} from 'redux';
import {loginReducer,loginMethodReducer} from './loginReducer';
import {modalReducer, languageModalReducer} from './modalReducer';
import userPictureReducer from './userPictureReducer';
import membershipModalReducer,{membershipReducer} from './membershipModalReducer';
import { locationReducer } from './locationReducer';
const reducers = combineReducers({
  loginReducer,
  loginMethodReducer,
  modalReducer,
  userPictureReducer,
  membershipModalReducer,
  locationReducer,
  languageModalReducer,
  membershipReducer
});
export default reducers;
