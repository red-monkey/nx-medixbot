import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import styles from '../../../styles/DashboardStyles';
import { useAccessToken } from '../../customHooks/useAuthToken';
import { useIsUser } from '../../customHooks/useIsUser';
import { setIsLoggedIn } from '../../redux/actions/login';
import GreetingBox from './components/GreetingBox';
import Notifications from './components/Notifications';
import { Header } from './components/Header';

const Dashboard = () => {
  const [, , removeAuthToken] = useAccessToken();
  const [, , deleteUserData] = useIsUser();
  const dispatch = useDispatch<Dispatch>();
  const logout = () => {
    removeAuthToken();
    deleteUserData();
    dispatch(setIsLoggedIn(false));
  };
  return (
    <View style={styles.root}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Header />
      <View style={styles.screenContent}>
        <GreetingBox />
        <Notifications />
      </View>
      {/* <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Dashboard;
