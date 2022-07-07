import { useNavigation } from '@react-navigation/native'
import styles from 'apps/mobile/src/app/styles/CardStyles'
import loginStyles from 'apps/mobile/src/app/styles/LoginPageStyles'
import { ProductProps } from 'apps/mobile/src/app/utils/types'
import React from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const dimensions = Dimensions.get('screen')
const EmptyCart = () => {
    const navigation = useNavigation<ProductProps>()
    const goToMarketPlace = () => navigation.navigate('Marketplace')
  return (
    <View style={[loginStyles.loginPage,{height: dimensions.height*0.75, alignItems: 'center',justifyContent: 'center',paddingHorizontal: 0}]}>
        <Text style={styles.itemsInCartText}>Your Cart is empty !</Text> 
        <TouchableOpacity 
                        style={[styles.proceedCheckout,{marginLeft: 0, marginTop: 50}]}
                        onPress={goToMarketPlace}
                    >
                        <Text style={styles.proceedCheckoutText}>Go to Marketplace</Text>
        </TouchableOpacity>  
    </View>
  )
}

export default EmptyCart
