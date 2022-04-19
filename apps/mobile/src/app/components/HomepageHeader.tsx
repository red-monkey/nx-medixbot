import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/HomepageStyles';
import {LoginProps} from '../utils/types';
export default function HomepageHeader() {
  const navigation = useNavigation<LoginProps>();
  return (
    <View style={styles.Header}>
      <View style={styles.HeaderGroup}>
        <Image
          style={styles.HeaderLogo}
          source={require('../../assets/images/Logo.png')}
          width={155}
          height={45}
        />
        <TouchableOpacity>
          <Text
            style={styles.SkipButton}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
