import { useCallback } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
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
/*
export const selectElement = useCallback((reference: React.RefObject<TextInput>) => {
  reference.current?.setNativeProps({
    style:{
      color: 'yellow',
      fontFamily: 'Montserrat-Bold',  
      }
  })},[])


export const UnselectElement = useCallback((reference: React.RefObject<TextInput>) => {
  reference.current?.setNativeProps({
    style:{
    color: '#fff',
    fontFamily: 'Roboto',      
    }
  })},[])*/

export const checkIfSelected = (lang: string, languageArray: Array<string>) => {
  let inserted = false;
  languageArray.forEach((item, i) => {
    if (item === lang) inserted = true;
  });
  return inserted;
};

export const removeFromList = (lang: string, languageArray: Array<string>) => {
  languageArray.forEach((item, i) => {
    if (item === lang) languageArray.splice(i, 1);
  });
};

export const snakeCaseToCamelCase = (object) =>
  Object.entries(object).reduce((acc, [key, val]) => {
    const camelCaseKey = key
      .split('_')
      .map((token, index) =>
        index ? token.replace(token[0], token[0].toUpperCase()) : token
      )
      .join('');

    return {
      ...acc,
      [`${camelCaseKey}`]: val,
    };
  }, {});
