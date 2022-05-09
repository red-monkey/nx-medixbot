import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import styles from '../../styles/DashboardStyles';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useAccessToken } from '../../customHooks/useAuthToken';
import { useIsUser } from '../../customHooks/useIsUser';
import { setIsLoggedIn } from '../../redux/actions/login';
import GreetingBox from './components/GreetingBox';
import Notifications from './components/Notifications';
import { Header } from './components/Header';
import Categories from './components/Categories';
import Blogs from './components/Blogs';
import Appointment from './components/Appointment';
import { AppState } from '../../redux/store/ConfigureStore';

const Dashboard = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);

  const [, , removeAuthToken] = useAccessToken();
  const [, , deleteUserData] = useIsUser();
  const dispatch = useDispatch<Dispatch>();
  const navigation = useNavigation<any>();
  const logout = () => {
    removeAuthToken();
    deleteUserData();
    dispatch(setIsLoggedIn(false));
  };
  const goToFoodRecognition = () => {
    navigation.navigate('FoodRecognition');
  };
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
              <TouchableOpacity onPress={goToFoodRecognition}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>
                  Food Recognition
                </Text>
              </TouchableOpacity>
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
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dashboard;
