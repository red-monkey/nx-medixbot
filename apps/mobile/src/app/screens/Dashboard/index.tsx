import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Healthcare from './components/Healthcare'
import {
  FlatList,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import styles from '../../styles/DashboardStyles';

import { useDispatch, useSelector } from 'react-redux'
import GreetingBox from './components/GreetingBox';
import Notifications from './components/Notifications';
import { Header } from './components/Header';
import Categories from './components/Categories';
import Blogs from './components/Blogs';
import Appointment from './components/Appointment';
import { AppState } from '../../redux/store/ConfigureStore';
import sharedStyles from '../../styles/SharedStyles';
import { useAppSelector } from '../../utils/hooks';


const Dashboard = () => {
  const navigation = useNavigation<any>();
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
              <View style={{justifyContent: 'flex-start'}}>
                <TouchableOpacity onPress={goToFoodRecognition}>
                  <Text style={{ textAlign: 'center', color: '#fff' }}>
                    Food Recognition  | 
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.screenContent}>
                <GreetingBox showLogo={true} showMedixBotter={true}/>
                  <>
                    <Appointment />
                    <Notifications />
                    <Healthcare />
                    <Blogs />
                  </>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dashboard;
