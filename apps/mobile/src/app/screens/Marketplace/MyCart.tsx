import { View, Text, SafeAreaView, StatusBar, Pressable } from 'react-native'
import React from 'react'
import styles from "../../styles/MarketplaceStyles";
import { CartHeader } from './components/CartHeader';
import { colors } from '../../variables/colors';
import Star from "../../icons/Star.svg";
import { useNavigation } from '@react-navigation/native';


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
                <View style={styles.boxOne}>
                    <View style={styles.cartProduct}></View>
                    <View>
                        <View style={{height:24, flexDirection:'row', marginTop:12, justifyContent:'space-between'}}>
                            <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>Watchit Smartly</Text>
                            <Pressable style={{width:23, height:21, borderColor:'#E6F2FC'}}>
                                <Text>X</Text>
                            </Pressable>
                        </View>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Star height={20}/>
                            <Text style={{fontSize:14, fontWeight:'400', width:28, alignItems:'stretch'}}>4.5</Text>
                        </View>
                        <View style={{flexDirection:'row', height:30, justifyContent:'space-between', marginTop:15, marginLeft:15, alignItems:'center'}}>
                            <Text style={{fontWeight:'700', fontSize:22, color:'#41416E'}}>$200</Text>
                            <View style={{flexDirection:'row', width:90, justifyContent:'space-between'}}>
                                <Pressable style={styles.button}>
                                    <Text>+</Text>
                                </Pressable>
                                <Text style={styles.buttonText}>1</Text>
                                <Pressable style={styles.buttonLeft}>
                                    <Text>-</Text>
                                </Pressable>
                            </View>
                            
                        </View>
                        
                    </View>
                </View>
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