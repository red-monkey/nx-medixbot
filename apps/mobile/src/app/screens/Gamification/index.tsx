import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import ScreenSkeleton from '../../commun/ScreenSkeleton';
import { AppState } from '../../redux/store/ConfigureStore';
import { ChallengeBar } from '../Dashboard/components/GreetingBox/ActionBar';
import RightArrowIcon from '../../icons/RightArrowIcon.svg';
import data from './json/data.json';
import Section from '../Blog/Section';
import { IconWrapper } from '../Dashboard/components/Categories';
import BadgeIcon from '../../icons/BadgeIcon';
import GoalsIcon from '../../icons/GoalsIcon';

const ChallengeArrow = () => {
  return (
    <View style={styles.challengeArrow}>
      <View style={styles.challengeLine}></View>
      <View style={styles.rightArrow}>
        <RightArrowIcon />
      </View>
    </View>
  );
};

const Gamification = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);

  return (
    <ScreenSkeleton>
      <View style={styles.gamificationContainer}>
        <ChallengeBar mood={mood} />
        <ChallengeArrow />
      </View>
      <Section
        data={data['Suggestions']}
        titleColor="#fff"
        backgroundColor="#41416E"
      />

      <Section
        header={{
          title: 'Badges',
          color: '#922EAC',
          color2: '#FF27FF',
          icon: (
            <IconWrapper
              backgroundColor="#922EAC"
              backgroundColor2="#FF27FF"
              options={{
                locations: [0.4525, 1.7301],
                useAngle: true,
                angle: 22.64,
              }}
            >
              <BadgeIcon />
            </IconWrapper>
          ),
        }}
        data={data['Badges']}
        titleColor="#41416E"
        backgroundColor="#fff"
      />

      <Section
        header={{
          title: 'Goals',
          color: '#8DC63F',
          color2: '#009444',
          icon: <GoalsIcon width={50} height={50} />,
        }}
        data={data['Goals']}
        titleColor="#41416E"
        backgroundColor="#fff"
      />
    </ScreenSkeleton>
  );
};

const styles = StyleSheet.create({
  gamificationContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  challengeArrow: {
    position: 'relative',
    height: 20,
  },
  challengeLine: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#41416E',
  },
  rightArrow: {
    position: 'absolute',
    right: 16,
    bottom: -19,
    width: 2,
  },
});

export default Gamification;
