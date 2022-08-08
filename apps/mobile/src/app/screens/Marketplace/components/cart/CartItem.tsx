import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import styles from 'apps/mobile/src/app/styles/MarketplaceStyles'
import styles from '../../../../styles/CardStyles'
import Star from '../../../../icons/marketplaceicons/star.svg'
import { IItemProp, items, TCartItem } from '../..'
import XIcon from '../../../../icons/XIcon'
import YellowButton from '../YellowButton'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { addToCart, decreaseQty, removeFromCart } from '../../../../redux/actions/marketplace'


export const CartItem = (props: TCartItem) => {
    const dispatch = useDispatch<Dispatch>()
    const addProductToCart = () => {
        dispatch(addToCart(props.product.id))
    }
    const removeProductFromCart = () => {
        dispatch(removeFromCart(props.product.id))   
      }
    const decreaseProductCount = () => {
        dispatch(decreaseQty(props.product.id))   
      }
  return (
    <View>
        <View style={styles.boxOne}>
            <View style={styles.cartProduct}>
                <Image 
                    source={{uri: props.product.image}}
                    style={styles.cartImage}
                />
            </View>
            <View style={{ width: '48%'}}>
                <View style={styles.cartItemTitleView}>
                    <Text style={styles.cartItemText}>{props.product.name}</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={removeProductFromCart}>
                        <XIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.cartItemRatingsView}>
                    <Star />
                    <Text style={styles.cartItemRatingsText}>{props.product.rating}</Text>
                </View>
                <View style={styles.cartItemPriceView}>
                    <Text style={styles.cartItemPrice}>${props.product.price}</Text>
                    <View style={styles.cartItemAdjustQty}>
                        <YellowButton style={{borderRadius: 8}} content={<TouchableOpacity onPress={addProductToCart} style={styles.button} >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>} />
                        <Text style={styles.buttonText}>{props.qty}</Text>
                        <YellowButton style={{borderRadius: 8,height: 23}} content={<TouchableOpacity onPress={decreaseProductCount} disabled={props.qty === 1} style={props.qty === 1 ? styles.buttonLeft : styles.button}>
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>} />
                    </View>    
                </View>
            
            </View>
        </View>
        
    </View>
  )
}

export default CartItem