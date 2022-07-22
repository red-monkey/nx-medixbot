import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
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

    const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={[marketPlaceStyles.Container]} >
        <Header title='Orders'/>
        <View style={styles.screenContentCart}>
          {orderInfos.length === 0 ? <EmptyOrder /> : <View>
            <Text style={styles.myOrderHeader}>My Order</Text>
            {orderInfos.map((props, id) => {
                return(
                    <View key={id} style={styles.orderDetailCardContainer}>
                        <View style={styles.orderDetailCardElement}>
                            <Text style={styles.myOrderDetailTypeTxt}>Order ID: <Text style={styles.myOrderDetailDescription}>{props.orderId}</Text> </Text>
                            <Text style={styles.myOrderDetailDescription}>{props.orderDate}</Text>
                        </View>
                        <View style={styles.orderDetailCardElement}>
                            <Text style={styles.myOrderDetailTypeTxt}>Tracking Number: <Text style={styles.myOrderDetailDescription}>{props.trackingNum}</Text></Text>
                        </View>
                        <View style={styles.orderDetailCardElement}>
                            <Text style={styles.myOrderDetailTypeTxt}>Quantity: <Text style={styles.myOrderDetailDescription}>{props.quantity}</Text> </Text>
                            <Text style={styles.myOrderDetailTypeTxt}>Total Amount: <Text style={styles.myOrderDetailDescription}>${props.totalAmount}</Text></Text>
                        </View>
                        <View style={styles.orderDetailCardElement}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('OrderStatus', {
                                    orderID: props.orderId, 
                                    orderDate: props.orderDate,
                                }
                            )
                            }} style={styles.goDetailBtn}>
                                <Text style={styles.myOrderDetailTypeTxt}>Details</Text>
                            </TouchableOpacity>
                            <Text style={styles.deliveredTxt}>Delivered</Text>
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