import { combineReducers } from 'redux';
import { loginReducer, loginMethodReducer } from './loginReducer';
import modalReducer from './modalReducer';
import userPictureReducer from './userPictureReducer';
import membershipModalReducer from './membershipModalReducer';
import { challengeReducer } from './challengeReducer';

const reducers = combineReducers({
  loginReducer,
  loginMethodReducer,
  modalReducer,
  userPictureReducer,
  membershipModalReducer,
  challengeReducer,
});
export default reducers;
