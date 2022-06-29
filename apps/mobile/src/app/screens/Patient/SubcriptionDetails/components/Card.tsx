import { CardIcon } from 'apps/mobile/src/app/icons/cardIcon'
import sharedStyles from 'apps/mobile/src/app/styles/SharedStyles'
import React from 'react'
import { View, Text,StyleSheet } from 'react-native'


function Card() {
  return (
    <View style={subscriptionStyles.cartContainer}>
      <View style={subscriptionStyles.cartTexts_Icon}>
        <View>
          <Text style={subscriptionStyles.cartText}>Personal Mermbership</Text>
          <Text style={subscriptionStyles.cartTextNumber}>$ 200 / Year</Text>
        </View>
        <View>
          <CardIcon />
        </View>
      </View>
      <View style={[sharedStyles.row,sharedStyles.alignCenter,sharedStyles.justifyCenter,{marginVertical: 10}]}>
        <View style={[subscriptionStyles.circle,{marginRight: '8.5%'}]}/>
        <Text style={{ textAlign: 'center', opacity: 0.4 }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <View style={[subscriptionStyles.circle,{marginLeft: '8.5%'}]}/>
        <View />
      </View>
      <View style={subscriptionStyles.startedDate}>
        <Text style={subscriptionStyles.Lora}>Started Date</Text>
        <Text style={subscriptionStyles.Lora}> 22/01/2021</Text>
      </View>
      <View style={subscriptionStyles.endDate}>
        <Text style={subscriptionStyles.Lora}>End Date</Text>
        <Text style={subscriptionStyles.Lora}>22/01/2022</Text>
      </View>
    </View>
  )
}

export default Card

const subscriptionStyles = StyleSheet.create({
      cartContainer: {
        margin: 15,
        paddingTop: 7,
        backgroundColor: '#eef7fd',
        borderRadius: 10,
        width: '92%'
      },
      cartText: {
        color: '#3095e2',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold'
      },
      cartTextNumber: {
        color: '#3095e2',
        fontSize: 22,
        fontFamily: 'Montserrat-Bold'
      },
      cartTexts_Icon: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      startedDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
      },
      endDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginBottom: 25,
      },
      showName: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      circle: {
        width: 20, 
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 15
    },
      detailTexts: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        width: 338,
        height: 113,
        borderColor: '#e7e7e7',
        borderWidth: 1,
        borderRadius: 12,
      },
      describtionText: {
        fontSize: 12,
        fontWeight: 'normal',
      },
      buttons: {
        marginTop: 15,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      RenewBtn: {
        backgroundColor: '#fff',
        width: 161,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4f60f4',
        borderRadius: 6,
      },
      UpgradeBtn: {
        backgroundColor: '#4f60f4',
        width: 161,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4f60f4',
        borderRadius: 6,
      },
      Lora: {
        fontFamily: 'Lora-Medium'
      },
})