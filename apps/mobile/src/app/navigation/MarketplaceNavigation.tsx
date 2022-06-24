import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MyCart from '../screens/Marketplace/MyCart'


const{Navigator, Screen} = createStackNavigator();

const MarketplaceNavigation = () => {
  return (
    <NavigationContainer>
        <Navigator>
            <Screen name='MyCart' component={MyCart}></Screen>
        </Navigator>
    </NavigationContainer>
  )
}

export default MarketplaceNavigation