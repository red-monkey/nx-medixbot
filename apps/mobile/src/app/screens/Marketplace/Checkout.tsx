import { View, Text, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../variables/colors'
import { CheckoutHeader } from './components/CheckoutHeader'
import styles from '../../styles/MarketplaceStyles'

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
          <View style={{height:24, flexDirection:'row', marginLeft: 21, marginRight:28, justifyContent:'space-between', marginTop:40}}>
            <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>1 Item In Cart</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:100}}>
              <Text style={{fontSize:18, fontWeight:'400', color:'#41416E'}}>Total</Text>
              <Text style={{fontSize:20, fontWeight:'700', color:'#3095E2'}}>$210</Text>
            </View>
          </View>

          {/* Delivery options component */}
          <View style={{marginTop:40}}>
            <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>Delivery options</Text>
          </View>

          {/* Payment Options component */}
          <View style={{marginTop:200}}>
            <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>Payment options</Text>
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