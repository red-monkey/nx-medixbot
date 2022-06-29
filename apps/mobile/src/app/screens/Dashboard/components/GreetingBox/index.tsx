import { View, Text, Image } from 'react-native';
import styles from '../../../../styles/DashboardStyles';
import React, { useState } from 'react';
import ActionBar from './ActionBar';
import { feelings } from './ActionBar';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/store/ConfigureStore';
import { useIsUser } from '../../../../customHooks/useIsUser';
import { IUser } from 'apps/mobile/src/app/apollo/GraphQL/types';


const GreetingBox = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);
  const [, getUser, deleteUserData] = useIsUser();
  const [userInf,setUserInf] = useState<IUser | null>();
  const user = getUser().then(user => setUserInf(JSON.parse(user)));
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
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
          </View>
          <Text style={styles.userName}>{userInf?.fullName}</Text>
        </View>
      </View>
      <ActionBar />
    </View>
  );
};

export default GreetingBox;
