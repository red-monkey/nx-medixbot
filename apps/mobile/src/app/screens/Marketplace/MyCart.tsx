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
                <View style={styles.itemsInCartView}>
                    <Text style={styles.itemsInCartText}>1 Item In Cart</Text>
                    <Pressable>
                        <Text style={styles.clearCart}>Clear All</Text>
                    </Pressable>
                </View>
                
                    <CartItem />
                
                <View style={styles.promoCodeView}>
                    <Text style={styles.promoCodeText}>Add Promo Code</Text>
                    <Text style={{marginRight:23, fontWeight:'400', fontSize:16, color:'#41416E'}}>Icon</Text>
                </View>
                <View>
                    
                    <View style={styles.boxTwo}>
                        <View style={styles.cartTotals}>
                            <Text style={styles.boxTwoText}>SubtTotal</Text>
                            <Text style={styles.boxTwoText}>$200</Text>
                        </View>
                        <View style={styles.cartTotals}>
                            <Text style={styles.boxTwoText}>Discount</Text>
                            <Text style={styles.boxTwoText}>$0</Text>
                        </View>
                        <View style={styles.cartTotals}>
                            <Text style={styles.boxTwoText}>Delivery Fee</Text>
                            <Text style={styles.boxTwoText}>$10</Text>
                        </View>
                        <View style={styles.totalPriceView}>
                            <Text style={styles.totalPriceText}>Total</Text>
                            <Text style={styles.totalPriceText}>$210</Text>
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