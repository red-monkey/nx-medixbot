import { View, Text, StatusBar } from 'react-native'
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
        <View style={{height:24, flexDirection:'row', marginLeft: 21, marginRight:28, justifyContent:'space-between', marginTop:40}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>1 Item In Cart</Text>
                    <Text></Text>
                </View>
        </View>
    </SafeAreaView>
  )
}

export default Checkout