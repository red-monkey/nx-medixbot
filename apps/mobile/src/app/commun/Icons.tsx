import React from 'react';
import {Image, View} from 'react-native';
import styles from '../styles/HomepageStyles';
import loginStyles from '../styles/LoginPageStyles';

export const PhoneIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Calling.png')}
      width={20}
      height={20}
    />
  );
};
export const ArrowIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/arrow.png')}
      width={12}
      height={12}
    />
  );
};

export const GoogleIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Google.png')}
      width={20}
      height={20}
    />
  );
};

export const FacebookIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/facebook.png')}
      width={20}
      height={20}
    />
  );
};

export const FaceFingerprintIconGroup = () => {
  return (
    <View style={loginStyles.iconGroupId}>
      <Image
        style={loginStyles.icon}
        source={require('../../assets/images/Frame.png')}
        width={33}
        height={33}
      />
      <Image
        style={loginStyles.icon}
        source={require('../../assets/images/Union.png')}
        width={33}
        height={33}
      />
    </View>
  );
};

export const MailIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/mail.png')}
      width={20}
      height={20}
    />
  );
};

export const BlueEnveloppeIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/blueMail.png')}
      width={20}
      height={20}
    />
  );
};

export const EmailValidationIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/circle.png')}
      width={16}
      height={16}
    />
  );
};

export const EmailValidationTickIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Tick.png')}
      width={16}
      height={16}
    />
  );
};

export const UsernameIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/User2.png')}
      width={20}
      height={20}
    />
  );
};

export const LockIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Lock.png')}
      width={20}
      height={20}
    />
  );
};

export const EyeIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Eye-slash.png')}
      width={20}
      height={20}
    />
  );
};

export const GenderIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/gender.png')}
      width={20}
      height={20}
    />
  );
};

export const GreenArrowIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Vector.png')}
      width={12}
      height={12}
    />
  );
};

export const CalendarIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Calendar.png')}
      width={20}
      height={20}
    />
  );
};

export const LocationIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Location.png')}
      width={20}
      height={20}
    />
  );
};

export const GlobalIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/global.png')}
      width={20}
      height={20}
    />
  );
};

export const ThreeUsersIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/users-three-Regular.png')}
      width={20}
      height={20}
    />
  );
};

export const UserIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/User.png')}
      width={20}
      height={20}
    />
  );
};

export const GalleryIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/gallery.png')}
      width={35}
      height={35}
    />
  );
};

export const CameraIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/Camera.png')}
      width={33}
      height={33}
    />
  );
};

export const MoreIcon = () => {
  return (
    <Image
      style={styles.HeaderLogo}
      source={require('../../assets/images/more.png')}
      width={20}
      height={20}
    />
  );
};
