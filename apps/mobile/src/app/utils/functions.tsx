import {View} from 'react-native';
import { colors } from '../variables/colors';

export const focusHandler = (reference: React.RefObject<View>) => {
  reference.current?.setNativeProps({
    borderColor: colors.MedixBotPrimaryColor,
    borderWidth: 1,
  });
};
export const pressOutHandler = (reference: React.RefObject<View>) => {
  reference.current?.setNativeProps({
    borderColor: 'transparent',
  });
};
