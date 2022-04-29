import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import GreatEmoji from '../../../icons/GreatEmoji.svg';
import GoodEmoji from '../../../icons/GoodEmoji.svg';
import OkayEmoji from '../../../icons/OkayEmoji.svg';
import BadEmoji from '../../../icons/BadEmoji.svg';
import AwfulEmoji from '../../../icons/AwfulEmoji.svg';
import ChallengeIcon from '../../../icons/ChallengeIcon.svg';
import AwardIcon from '../../../../icons/AwardIcon.svg';
import GoalIcon from '../../../icons/GoalIcon.svg';
import TrophyIcon from '../../../icons/TrophyIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateMood } from 'apps/mobile/src/app/redux/actions/challenge';
import { AppState } from '../../../../redux/store/ConfigureStore';
import { background, style } from 'styled-system';

const feelings = {
  great: <GreatEmoji />,
  good: <GoodEmoji />,
  okay: <OkayEmoji />,
  bad: <BadEmoji />,
  awful: <AwfulEmoji />,
};

const roadMap = {
  challenges: <ChallengeIcon />,
  badges: <AwardIcon />,
  goals: <GoalIcon />,
  rewards: <TrophyIcon />,
};

const EmojiBar = () => {
  const dispatch = useDispatch();
  const handleEmojiPress = (mood: string) => {
    dispatch(updateMood(mood));
  };
  return (
    <View style={styles.feelings}>
      {Object.entries(feelings).map(([feeling, emoji]) => {
        return (
          <TouchableOpacity
            key={feeling}
            onPress={() => handleEmojiPress(feeling)}
          >
            <View style={styles.emojiContainer}>
              {emoji}
              <Text style={styles.feelingName}>{feeling}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ChallengeBar: React.FC<{ mood: string }> = ({ mood }) => {
  const handleChallengePress = (mood: string) => {
    // dispatch(updateMood(mood));
  };
  return (
    <View style={styles.feelings}>
      <TouchableOpacity>
        <View style={styles.emojiContainer}>
          <View style={styles.challengeLineOverlay}></View>
          {feelings[mood]}
          <Text style={styles.feelingName}>{mood}</Text>
        </View>
      </TouchableOpacity>
      {Object.entries(roadMap).map(([stage, emoji]) => {
        return (
          <TouchableOpacity
            key={stage}
            onPress={() => handleChallengePress(stage)}
          >
            <View style={styles.emojiContainer}>
              <View style={styles.challengeLineOverlay}></View>
              {emoji}
              <Text style={styles.feelingName}>{stage}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={styles.challengeLine}></View>
    </View>
  );
};

const ActionBar = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);

  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.question}>
          {mood
            ? 'Are you ready to challenge yourself?'
            : 'How are you feeling today?'}
        </Text>
        <Text style={styles.status}>Member of Family</Text>
      </View>
      {mood ? <ChallengeBar mood={mood} /> : <EmojiBar />}
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    position: 'relative',
    fontFamily: 'Montserrat-Black',
    color: '#41416E',
    top: -10,
  },
  question: {
    width: 150,
    color: '#414042',
    fontFamily: 'Lora-Medium',
    fontSize: 16,
    opacity: 0.5,
    marginVertical: 15,
  },

  feelings: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emojiContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feelingName: {
    fontFamily: 'Lora-Medium',
    textTransform: 'capitalize',
    marginTop: 5,
  },

  challengeLine: {
    position: 'absolute',
    top: 18,
    left: 40,
    zIndex: -1,
    width: '74%',
    height: 2,
    backgroundColor: '#414042',
    opacity: 0.5,
  },

  challengeLineOverlay: {
    position: 'absolute',
    top: 16,
    width: 40,
    height: 5,
    backgroundColor: '#fff',
  },
});

export default ActionBar;
