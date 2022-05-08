import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import GreatEmoji from '../../../icons/GreatEmoji.svg';
import GoodEmoji from '../../../icons/GoodEmoji.svg';
import OkayEmoji from '../../../icons/OkayEmoji.svg';
import BadEmoji from '../../../icons/BadEmoji.svg';
import AwfulEmoji from '../../../icons/AwfulEmoji.svg';
import ChallengeIcon from '../../../icons/ChallengeIcon.svg';
import BadgeIcon from '../../../../icons/BadgeIcon.svg';
import GoalIcon from '../../../icons/GoalIcon.svg';
import RewardIcon from '../../../icons/RewardIcon.svg';
import ScoreIcon from '../../../icons/ScoreIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateMood } from '../../../../redux/actions/challenge';
import { AppState } from '../../../../redux/store/ConfigureStore';
import { useNavigation } from '@react-navigation/native';
import { GamificationProps } from '../../../../utils/types';

export const feelings = {
  great: <GreatEmoji />,
  good: <GoodEmoji />,
  okay: <OkayEmoji />,
  bad: <BadEmoji />,
  awful: <AwfulEmoji />,
};

const roadMap = {
  score: {
    icon: <ScoreIcon />,
    color: '#3095E2',
  },
  challenges: {
    icon: <ChallengeIcon />,
    color: '#EF5DA8',
  },

  badges: {
    icon: <BadgeIcon />,
    color: '#922EAC',
  },

  goals: {
    icon: <GoalIcon />,
    color: '#009444',
  },

  rewards: {
    icon: <RewardIcon />,
    color: '#ED1C24',
  },
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

export const ChallengeBar: React.FC<{ mood: string }> = ({ mood }) => {
  const navigation = useNavigation<GamificationProps>();

  const challengeState = useSelector(
    (state: AppState) => state.challengeReducer
  );

  const handleChallengePress = (mood: string) => {
    navigation.navigate('Gamification');
  };

  return (
    <View style={styles.feelings}>
      {Object.entries(roadMap).map(([stage, emoji]) => {
        return (
          <TouchableOpacity
            key={stage}
            onPress={() => handleChallengePress(stage)}
          >
            <View style={styles.emojiContainer}>
              <View style={styles.scoreContainer}>
                {emoji.icon}
                <Text style={[styles.score, { color: emoji.color }]}>
                  {challengeState[stage]}
                </Text>
              </View>
              <Text style={styles.feelingName}>{stage}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
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
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scoreContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  score: {
    fontSize: 18,
    fontFamily: 'Lora-Bold',
    marginLeft: 5,
  },

  feelingName: {
    position: 'relative',
    fontSize: 11,
    fontFamily: 'Lora-Medium',
    textTransform: 'capitalize',
    marginTop: 5,
    color: '#41416E',
  },
});

export default ActionBar;
