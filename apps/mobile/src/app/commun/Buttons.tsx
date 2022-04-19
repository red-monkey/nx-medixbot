import React from 'react';
import {TouchableOpacity} from 'react-native';
import loginStyles from '../styles/LoginPageStyles';
import {FacebookIcon, GoogleIcon} from './Icons';

export const GoogleButton = () => {
  return (
    <TouchableOpacity style={loginStyles.googleBtn}>
      <GoogleIcon />
    </TouchableOpacity>
  );
};

export const FacebookButton = () => {
  return (
    <TouchableOpacity style={loginStyles.facebookBtn}>
      <FacebookIcon />
    </TouchableOpacity>
  );
};
