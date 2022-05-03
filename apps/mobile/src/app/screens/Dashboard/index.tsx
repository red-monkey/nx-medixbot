import React from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import styles from '../../../styles/DashboardStyles';
import { useAccessToken } from '../../customHooks/useAuthToken';
import { useIsUser } from '../../customHooks/useIsUser';
import { setIsLoggedIn } from '../../redux/actions/login';
import GreetingBox from './components/GreetingBox';
import Notifications from './components/Notifications';
import { Header } from './components/Header';
import Categories from './components/Categories';
import Blogs from './components/Blogs';
import Appointment from './components/Appointment';

const Dashboard = () => {
  const [, , removeAuthToken] = useAccessToken();
  const [, , deleteUserData] = useIsUser();
  const dispatch = useDispatch<Dispatch>();
  const logout = () => {
    removeAuthToken();
    deleteUserData();
    dispatch(setIsLoggedIn(false));
  };
  const { mood } = useSelector((state: AppState) => state.challengeReducer);

  return (
    <View style={styles.root}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 5 }}
        data={[null]}
        renderItem={() => {
          return (
            <View>
              <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle="dark-content"
              />
              <Header />
              <View style={styles.screenContent}>
                <GreetingBox />
                {mood && (
                  <>
                    <Appointment />
                    <Notifications />
                    <Categories />
                    <Blogs />
                  </>
                )}
              </View>
              {/* <TouchableOpacity onPress={logout}>
             <Text>Logout</Text>
           </TouchableOpacity> */}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dashboard;
