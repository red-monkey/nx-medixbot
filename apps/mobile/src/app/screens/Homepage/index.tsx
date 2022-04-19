import React from 'react';
import {SafeAreaView, StatusBar, Image, View} from 'react-native';
import HomepageHeader from '../../components/HomepageHeader';
import HomepageScrollView from '../../components/HomepageScrollView';
import styles from '../../styles/HomepageStyles';

const Homepage = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#E8F4D7" barStyle="dark-content" />
      <HomepageHeader />
      <View style={styles.IllustrationContainer}>
        <Image
          source={require('../../../assets/images/illustration.png')}
          style={styles.Illustration}
        />
      </View>
      <HomepageScrollView />
    </SafeAreaView>
  );
};

export default Homepage;
