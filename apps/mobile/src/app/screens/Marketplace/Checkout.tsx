import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/CardStyles'
import marketPlaceStyles from '../../styles/MarketPlaceStyles'
import Header from '../Patient/components/Header'
import { useAppSelector } from '../../utils/hooks'
import SelectedIcon from '../icons/SelectedIcon.svg'
import UnselectedIcon from '../icons/UnselectedIcon.svg'
import { ProductProps, TDelivery, TDeliveryOptions, TPaymentOptions } from '../../utils/types'
import { useIsUser } from '../../customHooks/useIsUser'
import { IUser } from '../../apollo/GraphQL/types'
import Edit from '../../icons/Edit'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setLocation } from '../../redux/actions/location'

const Checkout = ({route}) => {
  const navigation = useNavigation<ProductProps>()
  const dispatch = useDispatch()
  const marketPlace = useAppSelector((state) => state.marketplaceReducer);
  const [, getUser,] = useIsUser();
  const [userInf,setUserInf] = useState<IUser | null>();
  getUser().then(user => setUserInf(JSON.parse(user)));
  useEffect(()=>{
    dispatch(setLocation({country: userInf?.country, city: userInf?.city, state: userInf?.state, postCode: userInf?.postCode}))
  },[userInf?.country])
  const userAddr = marketPlace.shippingAddress.length > 0 ? marketPlace.shippingAddress :
                   userInf?.country + (userInf?.country ? ' , ' : '' )+ 
                   userInf?.city + (userInf?.city ? ' , ' : '') +
                   userInf?.postCode + (userInf?.postCode ? ' , ' : '' )+
                   userInf?.tel 
  const DeliveryOptions : TDelivery[]  = [{type: 'Home Address', address:userAddr} ,{type: 'Nearest Pharmacy', address: 'Turkish Pharmacy store'}]
  const PaymentOptions : TPaymentOptions[]  = ['Credit Card','Medixcoins','Charity']
  const [deliveryOption, setDeliveryOption] = useState<TDeliveryOptions>('Home Address')
  const [paymentOption, setPaymentOption] = useState<TPaymentOptions>('Credit Card')
  const {totalPrice} = route.params;
  return (
    <ScrollView contentContainerStyle={[marketPlaceStyles.Container]} >
        <Header title='Checkout'/>
        <View style={styles.screenContentCart}>
          {/* first view with number o items in cart */}
          <View style={styles.checkoutCartNumber}>
            <Text style={styles.checkoutText}>{marketPlace.cart.length} item In cart</Text>
            <View style={styles.checkoutTotalView}>
              <Text style={styles.checkoutTotalText}>Total </Text>
              <Text style={styles.checkoutTotalPrice}>${totalPrice}</Text>
            </View>
          </View>

          {/* Delivery options component */}
          <View style={styles.optionsContainer}>
            <Text style={styles.checkoutDeliveryOptions}>Delivery options</Text>
            <View style={styles.optionsBox}>
              <TouchableOpacity style={styles.editIcon} onPress={()=> navigation.navigate('SetShipping',{userInfo: userInf})}>
                <Edit />
              </TouchableOpacity>
              {DeliveryOptions.map((item,i) => (
                <View key={i}>
                  <TouchableOpacity style={styles.option} onPress={()=>setDeliveryOption(item.type)}>
                      {item.type === deliveryOption ? <SelectedIcon /> : <UnselectedIcon />} 
                      <Text style={styles.optionText}>{item.type}</Text>
                  </TouchableOpacity>  
                  <Text style={styles.address}>{item.address}</Text>
                </View>              
              ))}

            </View>
          </View>

          {/* Payment Options component */}
          <View style={styles.optionsContainer}>
            <Text style={styles.checkoutPaymentOptions}>Payment options</Text>
            <View style={styles.optionsBox}>
              {PaymentOptions.map((item,i) => (
                <TouchableOpacity key={i} style={styles.option} onPress={()=>setPaymentOption(item)}>
                    {item === paymentOption ? <SelectedIcon /> : <UnselectedIcon />} 
                    <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>                
              ))}

            </View>
          </View>

          {/* Pay Button */}
          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={styles.payCheckoutButton}
            >
              <Text style={{fontSize:19, color:'#fff', fontFamily: 'Montserrat-Bold'}}>Pay ${totalPrice}</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  )
}

export default Checkout