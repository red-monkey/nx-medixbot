import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../screens/Homepage';
import Information from '../screens/Homepage/Information';
import { RootStackParamList } from '../utils/types';
import LoginPage from '../screens/Login';
import ForgotPasswordPage from '../screens/Login/ForgotPassword';
import ResetPasswordPage from '../screens/Login/ResetPassword';
import VerificationCode from '../screens/Login/VerificationCode';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import Blog from '../screens/Blog';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Homepage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgotPassword"
          component={ForgotPasswordPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Information"
          component={Information}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ResetPassword"
          component={ResetPasswordPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VerificationCode"
          component={VerificationCode}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const LoggedInUserAppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blog">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Blog"
          component={Blog}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
