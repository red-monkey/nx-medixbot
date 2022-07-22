import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../styles/CardStyles'
import EmptyOrderImage from '../../../../icons/marketplaceicons/empty-order.svg'
import { useNavigation } from '@react-navigation/native'

const EmptyOrder = () => {
    
    const navigation = useNavigation<any>();

    const marketPlace = () => navigation.navigate('Marketplace')

  return (
        <View style={styles.emptyOrderContainer}>
            <View style={styles.emptyOrderImage}>
                <EmptyOrderImage />
            </View>
            <View style={styles.emptyOrderTxtGroup}>
                <Text style={styles.emptyOrderHeader}>You don't have any order yet</Text>
                <Text style={styles.emptyOrderDescription}>Once you start ordering, all your order will be available here </Text>
            </View>
            <TouchableOpacity onPress={marketPlace} style={styles.goToMarketplaceButton}>
                <Text style={{fontSize:19, color:'#fff', fontFamily: 'Montserrat-Bold'}}>Go to Marketplace</Text>
            </TouchableOpacity>
        </View>
  )
}

export default EmptyOrder