/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native';
import AppContainer, {
  LoggedInUserAppContainer,
} from './navigation/AppContainer';
import { useAppSelector } from './utils/hooks';
import { GetHospitalsDocument, useGetCategoriesQuery, useGetClinicsQuery, useGetHospitalsQuery, useGetProductLazyQuery, useGetProductsLazyQuery, useGetProductsQuery, useGetUserQuery, useLoginMutation } from '@medixbot/types';
import { client } from './apollo/apollo';
import { gql, useQuery } from '@apollo/client';

const App = () => {
  const isLoggedIn = useAppSelector((state) => state.loginReducer.isLoggedIn);
  //useGetCategoriesQuery({notifyOnNetworkStatusChange: true});
  const {data,error} = useGetClinicsQuery()
  console.log(data)
/*const [mutation,mutationResults] = useLoginMutation({
  onCompleted(data) {
      console.log(data)
  },
});*/

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoggedIn ? <LoggedInUserAppContainer /> : <AppContainer />}
    </SafeAreaView>
  );
};

export default App;
