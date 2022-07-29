import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppointmentStackNavigator, DashBoardStackNavigator, MarketPlaceStackNavigator, PatientProfileStackNavigator } from './StackNavigation';
import { StyleSheet, View, Text } from 'react-native';
import HomeIcon from '../icons/HomeIcon';
import AppointmentIcon from '../icons/AppointmentIcon';
import HealthIcon from '../icons/HealthIcon';
import ProfileIcon from '../icons/ProfileIcon';
import MarketPlaceIcon from '../icons/Marketplace';
import AddFood from '../screens/MetabolicHealth/components/AddFood';

const CustomTab: React.FC<{
  label: string;
  icon: JSX.Element;
  focused: boolean;
}> = ({ label, icon, focused }) => {
  return focused ? (
    <View style={[styles.tab, styles.focusedTab]}>
      {icon}
      <Text style={[styles.tableLabel, styles.focusedTabLabel]}>{label}</Text>
    </View>
  ) : (
    <View style={styles.tab}>
      {icon}
      <Text style={styles.tableLabel}>{label}</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          ...styles.tabNavigator,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTab
                label="Home"
                icon={<HomeIcon fill={focused ? '#fff' : ''} />}
                focused={focused}
              />
            );
          },
        }}
        name="Home"
        component={DashBoardStackNavigator}
      />
      {/**
       *  The component below should be updated in the future
       */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTab
                label="Appointment"
                icon={<AppointmentIcon fill={focused ? '#fff' : ''} />}
                focused={focused}
              />
            );
          },
        }}
        name="Appointment"
        component={AppointmentStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTab
                label="Marketplace"
                icon={<MarketPlaceIcon fill={focused ? '#fff' : ''} />}
                focused={focused}
              />
            );
          },
        }}
        name="Search"
        component={MarketPlaceStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTab
                label="Health"
                icon={<HealthIcon stroke={focused ? '#fff' : ''} />}
                focused={focused}
              />
            );
          },
        }}
        name="Health"
        component={AddFood}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTab
                label="Profile"
                icon={<ProfileIcon stroke={focused ? '#fff' : ''} />}
                focused={focused}
              />
            );
          },
        }}
        name="Profile"
        component={PatientProfileStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    left: 2,
    backgroundColor: '#fff',
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 7,
  },

  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 78,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 0,
  },

  focusedTab: {
    backgroundColor: '#4C5DF4',
  },

  tableLabel: {
    color: '#41416E',
    fontSize: 10,
    fontFamily: 'Montserrat-Bold',
    textTransform: 'capitalize',
  },

  focusedTabLabel: {
    color: '#FFF',
  },
});

export default Tabs;
