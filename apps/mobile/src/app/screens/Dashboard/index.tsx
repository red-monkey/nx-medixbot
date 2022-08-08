import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
import { useGetProductsQuery } from '@medixbot/types';
import { client } from '../../apollo/apollo';
import { useGetProducts } from '../../apollo/GraphQL/Actions/useGetProducts';
import { useGetOrders } from '../../apollo/GraphQL/Actions/useGetOrders';


const Dashboard = () => {
  const navigation = useNavigation<any>();
  useGetProducts();
  /*const { data, loading, error, refetch } = useGetProductsQuery({
  client: client
  });
  console.log(data)
  useEffect(()=>{
   refetch().then(item => console.log(item?.data?.getProducts))
  },[])*/
  
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
