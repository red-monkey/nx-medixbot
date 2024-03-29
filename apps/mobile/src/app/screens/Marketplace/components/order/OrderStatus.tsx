import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../styles/CardStyles'
import marketPlaceStyles from '../../../../styles/MarketPlaceStyles'
import Header from '../../../Patient/components/Header'
import CopyIcon from '../../../../icons/marketplaceicons/CopyIcon.svg'
import OrderStatusIcon from '../../../../icons/marketplaceicons/orderStatusIcon.svg'
import OrderStatusIcon2 from '../../../../icons/marketplaceicons/orderStatusIcon2.svg'
import { useNavigation } from '@react-navigation/native'
import { useCreateOrder } from 'apps/mobile/src/app/apollo/GraphQL/Actions/useGetOrders'
import { setOrderTodelivered } from 'apps/mobile/src/app/redux/actions/orders'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

const OrderStatus = ({route}) => {
  const navigation = useNavigation<any>()
  const[,updateOrderToDelivered] = useCreateOrder()
  const {orderID, orderDate, orderStatus, deliveryDate} = route.params;
  const dispatch = useDispatch<Dispatch>()
  const confirmDelivery = () => {
    dispatch(setOrderTodelivered(orderID));
    updateOrderToDelivered(orderID)
    navigation.navigate('MyOrders')
  }
  const goBack = () => navigation.navigate('MyOrders')
  return (
    <View style={[marketPlaceStyles.Container]} >
        <Header title='Order Status'/>
        <View style={[styles.screenContentCart,{height: '100%'}]}>
          <View style={styles.optionsContainer}>
            <View style={styles.orderIdBox}>
              <View>
                  <Text style={styles.orderIdHeader}>Order ID </Text>
                  <Text style={styles.orderId}>{orderID}</Text>
              </View>
              <TouchableOpacity style={styles.copyIcon}>
                <CopyIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.optionsContainer}>
            <Text style={styles.checkoutPaymentOptions}>Timeline</Text>
            <View style={styles.TimelineBox}>
                <View style={styles.orderStatusContainer}>
                  <View style={styles.orderStatusIcon}>
                    <OrderStatusIcon />
                    <View style={styles.verticalLine}></View>
                  </View>
                  <View>
                    <Text style={styles.orderStatus}>Order Received </Text>
                    <Text style={styles.orderDate}>{orderDate}</Text>
                  </View>
                </View>
                <View style={styles.orderStatusContainer}>
                  <View style={styles.orderStatusIcon}>
                    {orderStatus !== 'Received' ? <OrderStatusIcon /> : <OrderStatusIcon2 />}
                    <View style={styles.verticalLine}></View>
                  </View>
                  <View>
                    <Text style={styles.orderStatus}>On the Way </Text>
                    <Text style={[styles.orderDate,{width: '100%'}]}>{new Date().toDateString()}</Text>
                  </View>
                </View>
                <View style={styles.orderStatusContainer}>
                  <View style={styles.orderStatusIcon}>
                  {orderStatus ? <OrderStatusIcon /> : <OrderStatusIcon2 />}</View>
                  <View>
                    <Text style={styles.orderStatus}>Delivered </Text>
                    <Text style={styles.orderDate}>{orderStatus ? deliveryDate : 'Deliver in the next 50 mins'}</Text>
                  </View>
                </View>
            </View>
          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              onPress={orderStatus === 'Delivered' ? goBack : confirmDelivery}
              style={styles.confirmDeliveryButton}
            >
              <Text style={{fontSize:19, color:'#fff', fontFamily: 'Montserrat-Bold'}}>{orderStatus === 'Delivered' ? 'Go back to orders ' : 'Confirm Delivery'}</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default OrderStatus;