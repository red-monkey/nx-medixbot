import { View, Text, Image } from 'react-native';
import styles from '../../../../styles/DashboardStyles';
import React from 'react';
import ActionBar from './ActionBar';
import { feelings } from './ActionBar';
import { useSelector } from 'react-redux';
import { AppState } from 'apps/mobile/src/app/redux/store/ConfigureStore';

const GreetingBox = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);

  return (
    <View style={styles.GreetingBoxContainer}>
      <Image
        style={styles.bot}
        source={require('../../../../../../../assets/logos/Medixboter.png')}
      />
      <View style={styles.userInfo}>
        {mood ? (
          <View style={{ margin: 5, aspectRatio: 1 }}>{feelings[mood]}</View>
        ) : (
          <Image
            style={styles.userAvatar}
            source={require('../../../../../../../assets/images/profile.jpg')}
          />
        )}
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
