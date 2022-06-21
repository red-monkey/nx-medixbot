import React from 'react'
import { TouchableOpacity,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useAccessToken } from '../../../customHooks/useAuthToken';
import { useIsUser } from '../../../customHooks/useIsUser';
import { setIsLoggedIn } from '../../../redux/actions/login';
import loginStyles from '../../../styles/LoginPageStyles';
import * as styles from '../../../styles/RegisterStyle';

const LogoutButton = () => {
  const [, , removeAuthToken] = useAccessToken();
  const [, , deleteUserData] = useIsUser();
  const dispatch = useDispatch<Dispatch>();
  const logout = () => {
    removeAuthToken();
    deleteUserData();
    dispatch(setIsLoggedIn(false));
  };

  return (
    <TouchableOpacity
        onPress={()=>{ logout()}}
        style={[styles.MembershipModalStyle.submitButton,{backgroundColor: '#EB5757', width: 130, alignSelf: 'center'}]}>
        <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#fff'}]}>Logout</Text>
    </TouchableOpacity>
  )
}

export default LogoutButton