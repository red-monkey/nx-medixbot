import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blog from '../screens/Blog';
import BlogDetails from '../screens/Blog/Details';
import Dashboard from '../screens/Dashboard';
import Gamification from '../screens/Gamification';
import FoodRecognition from '../screens/FoodRecognition';
import MyCart from '../screens/Marketplace/MyCart';
import Checkout from '../screens/Marketplace/Checkout';

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="FoodRecognition"
        component={FoodRecognition}
      />
      <Stack.Screen 
        options={{ headerShown: false }}
        name="MyCart"
        component={MyCart}
      />
      <Stack.Screen 
        options={{ headerShown: false }}
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};
