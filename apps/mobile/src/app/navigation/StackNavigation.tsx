import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blog from '../screens/Blog';
import BlogDetails from '../screens/Blog/Details';
import Dashboard from '../screens/Dashboard';
import Gamification from '../screens/Gamification';
import FoodRecognition from '../screens/FoodRecognition';
import MyCart from '../screens/Marketplace/MyCart';
import Checkout from '../screens/Marketplace/Checkout';
import { MyProducts } from '../screens/Marketplace/MyProducts';
import { RootStackParamList } from '../utils/types';
import MedicalHistory from '../screens/Patient/MedicalHistory';
import SubscriptionDetails from '../screens/Patient/SubcriptionDetails';
import PatientProfile from '../screens/PatientProfile';
import Visits from '../screens/Patient/Visits';

const Stack = createNativeStackNavigator<RootStackParamList>();
const ProfileStack =  createNativeStackNavigator<RootStackParamList>();

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
        name="SubscriptionDetails"
        component={SubscriptionDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MedicalHistory"
        component={MedicalHistory}
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
      <Stack.Screen 
        name="MyProducts"
        component={MyProducts}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Visits"
        component={Visits}
      />
    </Stack.Navigator>
  );
};

export const PatientProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PatientProfile">
      <Stack.Screen
        options={{ headerShown: false }}
        name="PatientProfile"
        component={PatientProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SubscriptionDetails"
        component={SubscriptionDetails}
      />
    </Stack.Navigator>
  )
}
