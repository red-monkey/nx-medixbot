import { View, Text, SafeAreaView, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from "../../styles/CardStyles";
import marketPlaceStyles from '../../styles/MarketPlaceStyles'
import { useNavigation } from '@react-navigation/native';
import CartItem from './components/cart/CartItem';
import Header from '../Patient/components/Header';
import PromoIcon from '../../icons/PromoIcon';
import { useAppSelector } from '../../utils/hooks';
import EmptyCart from './components/cart/EmptyCart';
import { clearCart } from '../../redux/actions/marketplace';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';


const MyCart = () => {

    const navigation = useNavigation<any>();
    const dispatch = useDispatch<Dispatch>()
    const marketPlace = useAppSelector((state) => state.marketplaceReducer);
    const DeliveryFee = 10 
    const clearAll = () => {
        dispatch(clearCart())
    }
    const checkout = () => navigation.navigate('Checkout',{totalPrice: marketPlace.total + DeliveryFee})
  return (
    <ScrollView contentContainerStyle={[marketPlaceStyles.Container]} >
            <Header title='My cart'/>
                {marketPlace.cart.length === 0 ? <EmptyCart/> : <View style={styles.screenContentCart}>
                    <View style={styles.itemsInCartView}>
                        <Text style={styles.itemsInCartText}>{marketPlace.cart.length} Item In Cart</Text>
                        <TouchableOpacity onPress={clearAll}>
                            <Text style={styles.clearCart}>Clear All</Text>
                        </TouchableOpacity>
                    </View>   
                    <View style={styles.itemsContainer}>
                        {marketPlace.cart.map((item) => (
                        <CartItem key={item.id} name={item.name} image={item.image} id={item.id} price={item.price} rate={item.rate} qty={item.qty} />  
                        ))}                    
                        </View>                              
                    <View style={styles.promoCodeView}>
                        <Text style={styles.promoCodeText}>Add Promo Code</Text>
                        <PromoIcon />
                    </View>

                     <View style={styles.boxTwo}>
                        <View style={styles.cartTotals}>
                            <Text style={styles.boxTwoText}>SubtTotal</Text>
                            <Text style={styles.boxTwoText}>${marketPlace.total}</Text>
                        </View>
                        <View style={styles.cartTotals}>
                            <Text style={styles.boxTwoText}>Discount</Text>
                            <Text style={styles.boxTwoText}>$0</Text>
                        </View>
                        <View style={styles.cartTotals}>
                            <Text style={styles.boxTwoText}>Delivery Fee</Text>
                            <Text style={styles.boxTwoText}>${DeliveryFee}</Text>
                        </View>
                        <View style={styles.totalPriceView}>
                            <Text style={styles.totalPriceText}>Total</Text>
                            <Text style={styles.totalPriceText}>${marketPlace.total + DeliveryFee}</Text>
                        </View>
                    </View>
                   <TouchableOpacity 
                        style={styles.proceedCheckout}
                        onPress={checkout}
                    >
                        <Text style={styles.proceedCheckoutText}>Proceed To Checkout</Text>
                    </TouchableOpacity>
                    </View>}
        </ScrollView>
  )
}

export default MyCart