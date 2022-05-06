import * as actionTypes from '../actions/actionTypes';
import { ChallengeAction, TMood } from '../../utils/types';

interface IState {
  mood: TMood;
  score: number;
  challenges: number;
  badges: number;
  goals: number;
  rewards: number;
}

const initialState: IState = {
  mood: null,
  score: 225,
  challenges: 3,
  badges: 20,
  goals: 50,
  rewards: 1560,
};

export const challengeReducer = (
  state: IState = initialState,
  action: ChallengeAction
) => {
  switch (action.type) {
    case actionTypes.SET_USER_MOOD:
      return { ...state, mood: action.payload };

    case actionTypes.SET_USER_SCORE:
      return { ...state, score: action.payload };

    case actionTypes.SET_USER_CHALLENGES:
      return { ...state, challenges: action.payload };

    case actionTypes.SET_USER_BADGES:
      return { ...state, badges: action.payload };

    case actionTypes.SET_USER_GOALS:
      return { ...state, goals: action.payload };

    case actionTypes.SET_USER_REWARDS:
      return { ...state, rewards: action.payload };

    default:
      return state;
  }
};
