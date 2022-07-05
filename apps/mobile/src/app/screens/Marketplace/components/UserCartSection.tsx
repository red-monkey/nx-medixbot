import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Avatar from './Avatar'
import MarketPlaceStyles from '../../../styles/MarketPlaceStyles'
import Cart from '../../../icons/marketplaceicons/cart.svg'
import { useIsUser } from '../../../customHooks/useIsUser'
import { IUser } from '../../../apollo/GraphQL/types'

type Props = {
  name?:string
}

const UserCartSection = (props: Props) => {
  const [, getUser,] = useIsUser();
  const [userInf,setUserInf] = useState<IUser | null>();
  getUser().then(user => setUserInf(JSON.parse(user)));
  return (
    <View style={MarketPlaceStyles.cartUserWrapper}>
                <View style={{ flexDirection: "row" }}>
                  <Avatar />
                  <View style={MarketPlaceStyles.userText}>
                    <Text style={MarketPlaceStyles.greetingText}>Good Morning</Text>
                    <Text style={MarketPlaceStyles.userName}>{userInf?.fullName}</Text>
                  </View>
                </View>
                <TouchableOpacity style={{paddingRight:15}}>
                  <Cart />
                </TouchableOpacity>
              </View>
  )
}

export default UserCartSection