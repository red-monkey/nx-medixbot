/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native';
import AppContainer, {
  LoggedInUserAppContainer,
} from './navigation/AppContainer';
import { useAppSelector } from './utils/hooks';

const App = () => {
  const isLoggedIn = useAppSelector((state) => state.loginReducer.isLoggedIn);
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
