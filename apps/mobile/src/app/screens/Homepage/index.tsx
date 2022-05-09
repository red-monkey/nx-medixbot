import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomepageScrollView from '../../components/HomepageScrollView';
import styles from '../../styles/HomepageStyles';
import { colors } from '../../variables/colors';

const Homepage = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle="dark-content"
      />
      <HomepageScrollView />
    </SafeAreaView>
  );
};

export default Homepage;
