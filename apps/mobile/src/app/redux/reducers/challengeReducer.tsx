import * as actionTypes from '../actions/actionTypes';
import { ChallengeAction, TMood } from '../../utils/types';

interface IState {
  mood: TMood;
}

const initialState: IState = {
  mood: null,
};

export const challengeReducer = (
  state: IState = initialState,
  action: ChallengeAction
) => {
  switch (action.type) {
    case actionTypes.SET_USER_MOOD:
      return { ...state, mood: action.payload };
    default:
      return state;
  }
};
