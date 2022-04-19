import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/HomepageStyles';
import {InfScreenProp} from '../utils/types';
export default function Header() {
  const navigation = useNavigation<InfScreenProp>();
  return (
    <View style={[styles.HeaderGroupInfo]}>
      <TouchableOpacity
        style={{width: 100}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={styles.HeaderLogo}
          source={require('../../assets/images/BackBtn.png')}
          width={50}
          height={25}
        />
      </TouchableOpacity>
      <Image
        style={styles.HeaderLogo}
        source={require('../../assets/images/Logo.png')}
        width={155}
        height={45}
      />
    </View>
  );
}
