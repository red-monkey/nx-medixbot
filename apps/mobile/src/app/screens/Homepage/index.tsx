import React from 'react';
import {SafeAreaView, StatusBar, Image, View} from 'react-native';
import HomepageHeader from '../../components/HomepageHeader';
import HomepageScrollView from '../../components/HomepageScrollView';
import styles from '../../styles/HomepageStyles';
import { colors } from '../../variables/colors';

const Homepage = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={colors.backgroundColor} barStyle="dark-content" />
      <HomepageHeader />
      <HomepageScrollView />
    </SafeAreaView>
  );
};

export default Homepage;
