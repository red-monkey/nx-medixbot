import { View, Text, Image } from 'react-native';
import styles from '../../../../styles/DashboardStyles';
import React from 'react';
import ActionBar from './ActionBar';

const GreetingBox = () => {
  return (
    <View style={styles.GreetingBoxContainer}>
      <Image
        style={styles.bot}
        source={require('../../../../../../../assets/logos/Medixboter.png')}
      />
      <View style={styles.userInfo}>
        <Image
          style={styles.userAvatar}
          source={require('../../../../../../../assets/images/profile.jpg')}
        />
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.userName}>Ayesha</Text>
        </View>
      </View>
      <ActionBar />
    </View>
  );
};

export default GreetingBox;
