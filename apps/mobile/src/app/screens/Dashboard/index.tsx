import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useAccessToken } from '../../customHooks/useAuthToken';
import { useIsUser } from '../../customHooks/useIsUser';
import { setIsLoggedIn } from '../../redux/actions/login';
import GreetingBox from './components/GreetingBox';
import { Header } from './components/Header';

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
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <Header />
      <GreetingBox />

      <TouchableOpacity onPress={goToFoodRecognition}>
        <Text style={{ color: '#F5007E' }}>Got to Food Recognition</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
