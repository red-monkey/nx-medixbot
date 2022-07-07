import { View, Text, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../variables/colors'
import { CheckoutHeader } from './components/CheckoutHeader'
import styles from '../../styles/CardStyles'

const Checkout = () => {
  return (
    <SafeAreaView style={styles.rootTwo}>
        <StatusBar 
            backgroundColor={colors.backgroundColor}
            barStyle="dark-content"
        />
        <CheckoutHeader />
        <View style={styles.screenContentCart}>
          {/* first view with number o items in cart */}
          <View style={styles.checkoutCartNumber}>
            <Text style={styles.checkoutText}>1 Item In Cart</Text>
            <View style={styles.checkoutTotalView}>
              <Text style={styles.checkoutTotalText}>Total</Text>
              <Text style={styles.checkoutTotalPrice}>$210</Text>
            </View>
          </View>

          {/* Delivery options component */}
          <View style={{marginTop:40}}>
            <Text style={styles.checkoutDeliveryOptions}>Delivery options</Text>
          </View>

          {/* Payment Options component */}
          <View style={{marginTop:200}}>
            <Text style={styles.checkoutPaymentOptions}>Payment options</Text>
          </View>

          {/* Pay Button */}
          <View style={{bottom:-130, alignItems:'center'}}>
            <Pressable
              style={styles.payCheckoutButton}
            >
              <Text style={{fontSize:20, fontWeight:'700', color:'#fff'}}>Pay $210</Text>
            </Pressable>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Checkout