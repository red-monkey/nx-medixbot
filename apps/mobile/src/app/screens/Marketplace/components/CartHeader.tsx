import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../../styles/MarketplaceStyles';
import { useNavigation } from '@react-navigation/native';

// import { ArrowIcon } from '../../../commun/Icons';
import ArrowLeft from "../../../icons/ArrowLeft.svg";


export const CartHeader = () => {

  const navigation = useNavigation<any>();

  const goBack = () => navigation.navigate('MyProducts')

  return (
      <View>
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', marginLeft:23, marginTop:50}}>
          <Pressable
          style={styles.arrowLeft}
          onPress={goBack}
          >
            <ArrowLeft />
          </Pressable>
          <Text style={{ textAlign: 'center', color: '#414042', fontWeight:'700', fontSize:25, justifyContent:'center',  marginRight:140 }}>
            My Cart
          </Text>
          
        </View>
      </View>
  );
};
