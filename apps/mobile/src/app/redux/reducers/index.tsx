import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import userPictureReducer from './userPictureReducer';
import membershipModalReducer from './membershipModalReducer';
const reducers = combineReducers({
  loginReducer,
  modalReducer,
  userPictureReducer,
  membershipModalReducer,
});
export default reducers;
