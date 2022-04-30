import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/HomepageStyles';
import { LoginProps } from '../utils/types';
export default function Header() {
  const navigation = useNavigation<LoginProps>();
  return (
    <View style={[styles.HeaderGroupInfo]}>
      <TouchableOpacity
        style={{width: 100}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={[styles.HeaderLogo,{width: 50, height: 25}]}
          source={require('../../../../../assets/images/BackBtn.png')}

        />
      </TouchableOpacity>
      <Image
          style={[styles.HeaderLogo,{width: 155, height: 45}]}
        source={require('../../assets/images/Logo.png')}
      />
    </View>
  );
}
