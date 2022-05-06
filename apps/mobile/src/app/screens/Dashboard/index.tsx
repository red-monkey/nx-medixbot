import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useAccessToken } from '../../customHooks/useAuthToken';
import { useIsUser } from '../../customHooks/useIsUser';
import { setIsLoggedIn } from '../../redux/actions/login';
import GreetingBox from './components/GreetingBox';
import { Header } from './components/Header';
import styles from '../../styles/DashboardStyles';
import { AppState } from '../../redux/store/ConfigureStore';
import Notifications from './components/Notifications';
import Blogs from './components/Blogs';
import Appointment from './components/Appointment';
import Categories from './components/Categories';

const Dashboard = () => {
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
  // const { mood } = useSelector((state: AppState) => state.challengeReducer);
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
                <Text style={{ color: '#F5007E', textAlign: 'center' }}>
                  Got to Food Recognition
                </Text>
              </TouchableOpacity>
              <View style={styles.screenContent}>
                {/* <GreetingBox /> */}
                {true && (
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
