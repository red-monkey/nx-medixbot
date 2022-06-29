import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
// import styles from 'apps/mobile/src/app/styles/MarketplaceStyles'
import styles from '../../../../styles/MarketplaceStyles'
import Star from '../../../../icons/Star.svg'

export const CartItem = () => {
  return (
    <View>
        <View style={styles.boxOne}>
            <View style={styles.cartProduct}>
                <Image 
                    source={{uri:'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'}}
                    style={styles.cartImage}
                />
            </View>
            <View>
                <View style={styles.cartItemTitleView}>
                    <Text style={styles.cartItemText}>Watchit Smartly</Text>
                    <Pressable style={styles.deleteButton}>
                        <Text style={styles.cartItemX}>X</Text>
                    </Pressable>
                </View>
                <View style={styles.cartItemRatingsView}>
                    <Star height={20}/>
                    <Text style={styles.cartItemRatingsText}>4.5</Text>
                </View>
                <View style={styles.cartItemPriceView}>
                    <Text style={styles.cartItemPrice}>$200</Text>
                    <View style={styles.cartItemAdjustQty}>
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
        
    </View>
  )
}

export default CartItem