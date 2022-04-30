import {TouchableOpacity, View} from 'react-native';
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

export const selectElement = (reference: React.RefObject<TouchableOpacity>) => {
  reference.current?.setNativeProps({
    borderColor: 'yellow',
    borderWidth: 1,
  });
};

export const UnselectElement = (reference: React.RefObject<TouchableOpacity>) => {
  reference.current?.setNativeProps({
    borderColor: 'transparent',
  });
};
