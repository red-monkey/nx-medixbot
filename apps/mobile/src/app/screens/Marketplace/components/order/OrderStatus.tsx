import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../styles/CardStyles'
import marketPlaceStyles from '../../../../styles/MarketPlaceStyles'
import Header from '../../../Patient/components/Header'
import CopyIcon from '../../../../icons/marketplaceicons/CopyIcon.svg'
import OrderStatusIcon from '../../../../icons/marketplaceicons/orderStatusIcon.svg'
import OrderStatusIcon2 from '../../../../icons/marketplaceicons/orderStatusIcon2.svg'

const OrderStatus = () => {
  
  return (
    <ScrollView contentContainerStyle={[marketPlaceStyles.Container]} >
        <Header title='Order Status'/>
        <View style={styles.screenContentCart}>
          <View style={styles.optionsContainer}>
            <View style={styles.orderIdBox}>
              <View>
                  <Text style={styles.orderIdHeader}>Order ID </Text>
                  <Text style={styles.orderId}>#3457899</Text>
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
                    <Text style={styles.orderDate}>10 am, 10 june, 2022</Text>
                  </View>
                </View>
                <View style={styles.orderStatusContainer}>
                  <View style={styles.orderStatusIcon}>
                    <OrderStatusIcon />
                    <View style={styles.verticalLine}></View>
                  </View>
                  <View>
                    <Text style={styles.orderStatus}>On the Way </Text>
                    <Text style={styles.orderDate}>11 am, 11 june, 2022</Text>
                  </View>
                </View>
                <View style={styles.orderStatusContainer}>
                  <View style={styles.orderStatusIcon}><OrderStatusIcon2 /></View>
                  <View>
                    <Text style={styles.orderStatus}>Delivered </Text>
                    <Text style={styles.orderDate}>Deliver in the next 50 mins</Text>
                  </View>
                </View>
            </View>
          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={styles.confirmDeliveryButton}
            >
              <Text style={{fontSize:19, color:'#fff', fontFamily: 'Montserrat-Bold'}}>Confirm Delivery</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  )
}

export default OrderStatus;