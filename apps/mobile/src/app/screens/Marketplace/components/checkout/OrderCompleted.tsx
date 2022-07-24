import { useNavigation } from '@react-navigation/native'
import styles from 'apps/mobile/src/app/styles/CardStyles'
import { ProductProps } from 'apps/mobile/src/app/utils/types'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const OrderCompleted = () => {
    const navigation = useNavigation<ProductProps>()
  return (
    <View style={{alignItems: 'center'}}>
        <Image
          style={styles.img}
          source={require('../../icons/marketplaceicons/order-img.png')}
          />
          <Text style={styles.txt_Confirmed}>Order Confirmed</Text>
          <Text style={styles.txt_Thank}>Thank You!</Text>
          <TouchableOpacity
              style={styles.payCheckoutButton}
            >
              <Text style={{fontSize:19, color:'#fff', fontFamily: 'Montserrat-Bold'}}>Track Order</Text>
            </TouchableOpacity>
          <Text style={styles.txt_Thank}>Or </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Marketplace')}
          >
            <Text style={styles.textStyle}>Go To Marketplace</Text>
          </TouchableOpacity>
    </View>
  )
}

export default OrderCompleted