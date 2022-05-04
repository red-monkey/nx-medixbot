import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import styles from '../../styles/DashboardStyles';
import GreetingBox from './components/GreetingBox';
import Notifications from './components/Notifications';
import { Header } from './components/Header';
import Categories from './components/Categories';
import Blogs from './components/Blogs';
import Appointment from './components/Appointment';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);

  return (
    <View style={styles.root}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 5 }}
        data={[null]}
        renderItem={() => {
          return (
            <View>
              <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle="dark-content"
              />
              <Header />
              <View style={styles.screenContent}>
                <GreetingBox />
                {mood && (
                  <>
                    <Appointment />
                    <Notifications />
                    <Categories />
                    <Blogs />
                  </>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dashboard;
