import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View,Text} from 'react-native';
import styles from '../../../styles/HomepageStyles';
import { LoginProps } from '../../../utils/types';
import { colors } from '../../../variables/colors';

type Props = {
    title: string
}

export default function Header({title}: Props) {
  const navigation = useNavigation<LoginProps>();
  return (
    <View style={[styles.HeaderGroupInfo,{paddingTop: 20}]}>
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
      <Text style={{fontFamily: 'Montserrat-Bold', color: colors.Text, fontSize: 16}}>{title}</Text>
    </View>
  );
}
