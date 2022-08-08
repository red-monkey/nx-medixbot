/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native';
import AppContainer, {
  LoggedInUserAppContainer,
} from './navigation/AppContainer';
import { useAppSelector } from './utils/hooks';
import { useGetOrderQuery, useGetOrdersQuery } from '@medixbot/types';
import { client } from './apollo/apollo';
import { useCreateOrder } from './apollo/GraphQL/Actions/useGetOrders';

const App = () => {
  const isLoggedIn = useAppSelector((state) => state.loginReducer.isLoggedIn);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*<LoggedInUserAppContainer />*/}
      {isLoggedIn ? <LoggedInUserAppContainer /> : <AppContainer />}
    </SafeAreaView>
  );
};

export default App;