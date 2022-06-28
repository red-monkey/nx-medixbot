import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import MarketPlaceStyles from '../../../styles/MarketPlaceStyles'
import Cart from '../../../icons/marketplaceicons/cart.svg'

type Props = {
  name?:string
}

const UserCartSection = (props: Props) => {
  return (
    <View style={MarketPlaceStyles.cartUserWrapper}>
                <View style={{ flexDirection: "row" }}>
                  <Avatar />
                  <View style={MarketPlaceStyles.userText}>
                    <Text style={MarketPlaceStyles.greetingText}>Good Morning</Text>
                    <Text style={MarketPlaceStyles.userName}>Wati</Text>
                  </View>
                </View>
                <TouchableOpacity style={{paddingRight:15}}>
                  <Cart />
                </TouchableOpacity>
              </View>
  )
}

export default UserCartSection