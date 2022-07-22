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
import { RootStackParamList,MarketplaceStackParamList, AppointmentStackParamList } from '../utils/types';
import MedicalHistory from '../screens/Patient/MedicalHistory';
import SubscriptionDetails from '../screens/Patient/SubcriptionDetails';
import PatientProfile from '../screens/PatientProfile';
import Visits from '../screens/Patient/Visits';
import MarketPlace from '../screens/Marketplace';
import DoctorDetails from '../screens/BookAppointment/DoctorDetails';
import SetShipping from '../screens/Marketplace/SetShipping';
import Apppointments from '../screens/Appointments';
import MakeAppointment from '../screens/Appointments/MakeAppointment';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import MyOrders from '../screens/Marketplace/components/order/MyOrders';
import OrderStatus from '../screens/Marketplace/components/order/OrderStatus';

const Stack = createNativeStackNavigator<RootStackParamList>();
const MarketStack =  createNativeStackNavigator<MarketplaceStackParamList>();
const AppointmentStack = createNativeStackNavigator<AppointmentStackParamList>()

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyOrders"
        component={MyOrders}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OrderStatus"
        component={OrderStatus}
      />
    </Stack.Navigator>
  )
}

export const MarketPlaceStackNavigator = () => {
  return (
    <MarketStack.Navigator initialRouteName="Marketplace">
      <MarketStack.Screen
        options={{ headerShown: false }}
        name="Marketplace"
        component={MarketPlace}
      />
      <MarketStack.Screen
        options={{ headerShown: false }}
        name="ProductDetails"
        component={MyProducts}
      />
      <MarketStack.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={MyCart}
      />
      <MarketStack.Screen
        options={{ headerShown: false }}
        name="Checkout"
        component={Checkout}
      />
      <MarketStack.Screen
        options={{ headerShown: false }}
        name="SetShipping"
        component={SetShipping}
      />
    </MarketStack.Navigator>
  )
}

export const AppointmentStackNavigator = () => {
  return(
  <AppointmentStack.Navigator>
      <AppointmentStack.Screen
        options={{ headerShown: false }}
        name="AppointmentHome"
        component={Apppointments}
      />
      <AppointmentStack.Screen
        options={{ headerShown: false }}
        name="MakeAppointment"
        component={MakeAppointment}
      />
      <AppointmentStack.Screen
        options={{ headerShown: false }}
        name="BookAppointment"
        component={BookAppointment}
      />
  </AppointmentStack.Navigator>    
  )

}
