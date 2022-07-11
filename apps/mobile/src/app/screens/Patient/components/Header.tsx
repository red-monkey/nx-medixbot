import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View,Text, StatusBar} from 'react-native';
import styles from '../../../styles/HomepageStyles';
import { LoginProps } from '../../../utils/types';
import { colors } from '../../../variables/colors';

type Props = {
    title: string,
    right?: any
}

export default function Header({title,right}: Props) {
  const navigation = useNavigation<LoginProps>();
  return (
    <View style={[styles.HeaderGroupInfo,{justifyContent: 'space-between',paddingHorizontal: 10}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={[styles.HeaderLogo,{ height: 25}]}
          source={require('../../../../../assets/images/BackBtn.png')}

        />
      </TouchableOpacity>
      <Text style={{fontFamily: 'Montserrat-Bold', color: colors.Text, fontSize: 16}}>{title}</Text>
      <View>{right ? right : null}</View>
    </View>
  );
}
