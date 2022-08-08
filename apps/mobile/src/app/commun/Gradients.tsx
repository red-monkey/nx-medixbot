import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import styles from '../styles/HomepageStyles';
import loginStyles from '../styles/LoginPageStyles';
import dashboard from '../styles/DashboardStyles';

export const GradientText = ({ text }: { text: string }) => {
  return (
    <LinearTextGradient
      style={loginStyles.forgotPassword}
      locations={[0, 1]}
      colors={['rgba(141, 198, 63, 1)', 'rgba(0, 148, 68, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text>{text}</Text>
    </LinearTextGradient>
  );
};

export const GradientRedButton = ({ text }: { text: string }) => {
  return (
    <LinearGradient
      colors={['rgba(237, 28, 36, 1)', 'rgba(190, 30, 45, 1)']}
      style={styles.GradientNext}
    >
      <Text style={styles.NextButtonText}>{text}</Text>
    </LinearGradient>
  );
};

export const GreenDotGradient = () => {
  return <View style={styles.dotIndicatorGradient} />;
};
export const GradientTextSignUp = ({ text }: { text: string }) => {
  return (
    <LinearTextGradient
      style={[
        loginStyles.forgotPassword,
        { textAlign: 'center', marginTop: 0, marginLeft: 5 },
      ]}
      locations={[0, 1]}
      colors={['rgba(141, 198, 63, 1)', 'rgba(0, 148, 68, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text>{text}</Text>
    </LinearTextGradient>
  );
};

export const GradientPersonalizableText = ({ text, colors, style }: { text: string, colors: string[], style: StyleProp<TextStyle> }) => {
  return (
    <LinearTextGradient
      style={style}
      locations={[0, 1]}
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text>{text}</Text>
    </LinearTextGradient>
  );
}

export const GradientTextFaceIdLogin = ({ text }: { text: string }) => {
  return (
    <LinearTextGradient
      style={loginStyles.textFaceIdLogin}
      locations={[0, 1]}
      colors={['rgba(204, 64, 182, 1)', 'rgba(0, 174, 239, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text>{text}</Text>
    </LinearTextGradient>
  );
};

export const DashboardHeaderGradient = () => {
  return (
    <LinearGradient
      colors={['#00AEEF', '#CC40B6']}
      locations={[0.1476, 1.2108]}
      useAngle={true}
      angle={303.24}
      style={dashboard.HeaderGradientBox}
    ></LinearGradient>
  );
};

export const NavGradient = () => {
  return (
    <LinearGradient
      colors={['rgba(0,194,239,0.5)', 'rgba(204,64,182,0.5)']}
      locations={[0.1476, 1.2108]}
      useAngle={true}
      angle={303.24}
      style={dashboard.HeaderGradientBox}   
    ></LinearGradient>
  );
};