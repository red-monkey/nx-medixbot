import {View} from 'react-native';

export const focusHandler = (reference: React.RefObject<View>) => {
  reference.current?.setNativeProps({
    borderColor: '#009444',
    borderWidth: 1,
  });
};
export const pressOutHandler = (reference: React.RefObject<View>) => {
  reference.current?.setNativeProps({
    borderColor: 'transparent',
  });
};
