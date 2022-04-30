import {StyleSheet} from 'react-native';

const sharedStyles = StyleSheet.create({
  padding_60: {paddingTop: 60},
  padding_15: {paddingTop: 15},
  width_33: {width: 33},
  row: {flexDirection: 'row'},
  alignCenter: {alignItems: 'center'},
  justifyCenter: {justifyContent: 'center'},
  dashedBorder: {borderWidth: 1, borderStyle: 'dashed', borderColor: '#DEDEE8'},
  margin_left_20: {marginLeft: 20},
  margin_left_30: {marginLeft: 30},
  display_none: {backfaceVisibility: 'hidden'}
});

export default sharedStyles;
