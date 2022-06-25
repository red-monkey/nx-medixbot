import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ArrowLeft from "../../../icons/ArrowLeft.svg";
import styles from '../../../styles/MarketplaceStyles';

// import { ArrowIcon } from '../../../commun/Icons';


export const CheckoutHeader = () => {

  const navigation = useNavigation<any>();

  const goBack = () => navigation.navigate('MyCart')

  return (
    <View>
      <View>
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', marginLeft:23, marginTop:25}}>
          <Pressable
            style={styles.arrowLeft}
            onPress={goBack}
          >
            <ArrowLeft />
          </Pressable>
          
          <Text style={{ textAlign: 'center', color: '#414042', fontWeight:'700', fontSize:25, justifyContent:'center',  marginRight:140 }}>
            Checkout
          </Text>
          
        </View>
      </View>
    </View>
  );
};
