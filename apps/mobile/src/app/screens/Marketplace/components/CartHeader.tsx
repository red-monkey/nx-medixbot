import React from 'react';
import { View, Text } from 'react-native';

import { ArrowIcon } from '../../../commun/Icons';


export const CartHeader = () => {
  return (
      <View>
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', marginLeft:23, marginTop:50}}>
          <ArrowIcon />
          <Text style={{ textAlign: 'center', color: '#414042', fontWeight:'700', fontSize:25, justifyContent:'center',  marginRight:140 }}>
            My Cart
          </Text>
          
        </View>
      </View>
  );
};
