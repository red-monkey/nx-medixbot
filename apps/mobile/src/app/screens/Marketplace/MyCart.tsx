import { View, Text, SafeAreaView, StatusBar, Pressable } from 'react-native'
import React from 'react'
import styles from "../../styles/MarketplaceStyles";
import { CartHeader } from './components/CartHeader';
import { colors } from '../../variables/colors';
import Star from "../../icons/Star.svg";
import { useNavigation } from '@react-navigation/native';
import CartItem from './components/cart/CartItem';


const MyCart = () => {

    const navigation = useNavigation<any>();

    const checkout = () => navigation.navigate('Checkout')
  return (
    <SafeAreaView style={styles.rootTwo}>
            <StatusBar 
                backgroundColor={colors.backgroundColor}
                barStyle="dark-content"
            />
            <CartHeader />
            <View style={styles.screenContentCart}>
                <View style={{height:24, flexDirection:'row', marginLeft: 21, marginRight:28, justifyContent:'space-between', marginTop:40}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>1 Item In Cart</Text>
                    <Pressable>
                        <Text style={{fontSize:20, fontWeight:'700', color:'#3095E2'}}>Clear All</Text>
                    </Pressable>
                </View>
                
                    <CartItem />
                
                <View style={{flexDirection:'row', height:59, top:80, marginLeft:12, marginRight:12, justifyContent:'space-between', borderRadius:8, alignItems:'center', shadowColor:'#D7EAFF', elevation:3, shadowOpacity:0.1}}>
                    <Text style={{marginLeft:23, fontWeight:'400', fontSize:16, color:'#41416E'}}>Add Promo Code</Text>
                    <Text style={{marginRight:23, fontWeight:'400', fontSize:16, color:'#41416E'}}>Icon</Text>
                </View>
                <View>
                    
                    <View style={styles.boxTwo}>
                        <View style={styles.cartTotals}>
                            <Text style={{fontSize:16,fontWeight:'400',color:'#41416E'}}>SubtTotal</Text>
                            <Text style={{fontSize:16,fontWeight:'400',color:'#41416E'}}>$200</Text>
                        </View>
                        <View style={styles.cartTotals}>
                            <Text style={{fontSize:16,fontWeight:'400',color:'#41416E'}}>Discount</Text>
                            <Text style={{fontSize:16,fontWeight:'400',color:'#41416E'}}>$0</Text>
                        </View>
                        <View style={styles.cartTotals}>
                            <Text style={{fontSize:16,fontWeight:'400',color:'#41416E'}}>Delivery Fee</Text>
                            <Text style={{fontSize:16,fontWeight:'400',color:'#41416E'}}>$10</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'90%', justifyContent:'space-between', marginTop:35 }}>
                            <Text style={{fontWeight:'700', fontSize:18, color:'#41416E'}}>Total</Text>
                            <Text style={{fontWeight:'700', fontSize:18, color:'#41416E'}}>$210</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable 
                        style={styles.proceedCheckout}
                        onPress={checkout}
                    >
                        <Text style={styles.proceedCheckoutText}>Proceed To Checkout</Text>
                    </Pressable>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default MyCart