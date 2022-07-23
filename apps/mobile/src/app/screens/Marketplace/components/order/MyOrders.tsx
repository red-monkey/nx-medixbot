import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import styles from '../../../../styles/CardStyles'
import marketPlaceStyles from '../../../../styles/MarketPlaceStyles'
import Header from '../../../Patient/components/Header'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../../../../utils/hooks'
import EmptyOrder from './EmptyOrder'

const orderInfos = [
    {orderId: '#342364', orderDate: '27-07-2022', trackingNum: 'IW3234234234', quantity: 1, totalAmount: '210'},
    {orderId: '#134564', orderDate: '17-07-2022', trackingNum: 'AW3223534234', quantity: 2, totalAmount: '410'},
]

const MyOrders = () => {
    const ordersList = useAppSelector((state) => state.orderReducer.orders);
    const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={[marketPlaceStyles.Container]} >
        <Header title='Orders'/>
        <View style={[styles.screenContentCart,{minHeight: Dimensions.get('screen').height*0.75}]}>
          {ordersList.length === 0 ? <EmptyOrder /> : <View>
            <Text style={styles.myOrderHeader}>My Orders</Text>
            {ordersList.map((props, id) => {
                return(
                    <View key={id} style={styles.orderDetailCardContainer}>
                        <Text style={[styles.myOrderDetailDescription, {alignSelf: 'flex-end'}]}>{props.placementDate}</Text>
                        <View style={[styles.orderDetailCardElement, {marginTop: -8}]}>
                            <Text style={styles.myOrderDetailTypeTxt}>Order ID: <Text style={styles.myOrderDetailDescription}>{props.orderId}</Text> </Text>
                        </View>
                        <View style={styles.orderDetailCardElement}>
                            <Text style={styles.myOrderDetailTypeTxt}>Tracking Number: <Text style={styles.myOrderDetailDescription}>{props.TrackingNumber}</Text></Text>
                        </View>
                        <View style={styles.orderDetailCardElement}>
                            <Text style={styles.myOrderDetailTypeTxt}>Quantity: <Text style={styles.myOrderDetailDescription}>{props.Quantity}</Text> </Text>
                            <Text style={styles.myOrderDetailTypeTxt}>Total Amount: <Text style={styles.myOrderDetailDescription}>${props.total}</Text></Text>
                        </View>
                        <View style={styles.orderDetailCardElement}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('OrderStatus', {
                                    orderID: props.orderId, 
                                    orderDate: props.placementDate,
                                    orderStatus: props.status,
                                }
                            )
                            }} style={styles.goDetailBtn}>
                                <Text style={styles.myOrderDetailTypeTxt}>Details</Text>
                            </TouchableOpacity>
                            <Text style={styles.deliveredTxt}>{props.status}</Text>
                        </View>
                    </View>
                )
            })}
          </View>}
        </View>
    </ScrollView>
  )
}

export default MyOrders