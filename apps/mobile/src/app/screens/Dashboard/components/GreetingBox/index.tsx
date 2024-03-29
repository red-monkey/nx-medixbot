import { View, Text, Image } from 'react-native';
import styles from '../../../../styles/DashboardStyles';
import React, { useState } from 'react';
import ActionBar from './ActionBar';
import { feelings } from './ActionBar';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/store/ConfigureStore';
import { useIsUser } from '../../../../customHooks/useIsUser';
import { IUser } from '../../../../apollo/GraphQL/types';

type TProps = {
  showMedixBotter: boolean,
  showLogo: boolean,
  title?: string,
  SecondPart?: any
}

const GreetingBox = (props: TProps) => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);
  const [, getUser,] = useIsUser();
  const userInf = getUser()
  return (
    <View style={styles.GreetingBoxContainer}>
      {
        props.showMedixBotter ? 
        <Image
        style={styles.bot}
        source={require('../../../../../../../assets/logos/Medixboter.png')}
      />: null
      }
      {props.title ? <Text style={styles.GreetingBoxTitle}>{props.title}</Text>: null}
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
      <ActionBar showMember={props.showLogo}/>
      {props.SecondPart || null}
    </View>
  );
};

export default GreetingBox;
