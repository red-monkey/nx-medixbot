import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Avatar from './Avatar'
import MarketPlaceStyles from '../../../../styles/MarketPlaceStyles'
import Cart from '../../../icons/marketplaceicons/cart.svg'
import { useIsUser } from '../../../../customHooks/useIsUser'
import { IUser } from '../../../../apollo/GraphQL/types'
import { useNavigation } from '@react-navigation/native'
import { ProductProps } from '../../../../utils/types'

type Props = {
  name?:string
}

const UserCartSection = (props: Props) => {
  const navigation = useNavigation<ProductProps>();
  const [, getUser,] = useIsUser();
  const goToCart = () => navigation.navigate('Cart')
  const userInf = getUser()
  return (
    <View style={MarketPlaceStyles.cartUserWrapper}>
                <View style={{ flexDirection: "row" }}>
                  <Avatar />
                  <View style={MarketPlaceStyles.userText}>
                    <Text style={MarketPlaceStyles.greetingText}>Good Morning</Text>
                    <Text style={MarketPlaceStyles.userName}>{userInf?.fullName}</Text>
                  </View>
                </View>
                <TouchableOpacity style={{paddingRight:15}} onPress={goToCart}>
                  <Cart />
                </TouchableOpacity>
              </View>
  )
}

export default UserCartSection