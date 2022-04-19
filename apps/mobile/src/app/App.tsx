/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native';
import AppContainer from './navigation/AppContainer';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
