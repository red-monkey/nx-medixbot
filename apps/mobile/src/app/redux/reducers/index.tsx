import {combineReducers} from 'redux';
import {loginReducer,loginMethodReducer} from './loginReducer';
import {modalReducer,locationModalReducer, languageModalReducer} from './modalReducer';
import userPictureReducer from './userPictureReducer';
import membershipModalReducer from './membershipModalReducer';
const reducers = combineReducers({
  loginReducer,
  loginMethodReducer,
  modalReducer,
  userPictureReducer,
  membershipModalReducer,
  locationModalReducer,
  languageModalReducer
});
export default reducers;
