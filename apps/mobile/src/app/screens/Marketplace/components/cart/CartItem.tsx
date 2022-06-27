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
                <View style={{height:24, flexDirection:'row', marginTop:12, justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#41416E'}}>Watchit Smartly</Text>
                    <Pressable style={styles.deleteButton}>
                        <Text style={{color:'#4C5DF4', fontWeight:'700'}}>X</Text>
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
        
    </View>
  )
}

export default CartItem