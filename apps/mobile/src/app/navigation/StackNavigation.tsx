import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blog from '../screens/Blog';
import BlogDetails from '../screens/Blog/Details';
import Dashboard from '../screens/Dashboard';
import Gamification from '../screens/Gamification';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const DashBoardStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Blogs"
        component={Blog}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BlogDetails"
        component={BlogDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Gamification"
        component={Gamification}
      />
    </Stack.Navigator>
  );
};
