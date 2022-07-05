import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { CardStyle } from '../../../styles/MarketPlaceStyles';
import Offer from '../../../icons/marketplaceicons/offer.svg';


const SalesCard = () => {
  return (
      <View style={CardStyle.wrapper}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#FDF9C1', '#FFECBE']}
          locations={[0, 0.9]}
          style={styles.linearGradient}
        >
          <View style={CardStyle.container}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Offer />
                <Text style={styles.offer}>Offer of the day</Text>
              </View>
              <Text style={styles.saleText}>10% off sale on CGM</Text>
              <Text style={styles.distance}>20km from you</Text>
              <Text style={styles.price}>$800</Text>
            </View>
            <View style={{ alignItems: 'flex-start',justifyContent: 'center', width: '50%' }}>
                <Image
                  style={{ width: 115, height: 100 }}
                  source={require('../../../../../../../assets/images/shop.png')}
                />
            </View>
          </View>
        </LinearGradient>
      </View>  );
};

export default SalesCard;

const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    height: 202,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 8,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 6,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
  },
  price: {
    fontFamily: 'Lora-SemiBold',
    fontSize: 18,
    color: '#41416E',
    lineHeight: 20,
    paddingTop: 10,
  },
  saleText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#41416E',
    lineHeight: 27,
    paddingTop: 25,
  },
  offer: {
    fontSize: 14,
    color: '#41416E',
    paddingLeft: 5,
    fontFamily: 'Lora-Regular'
  },
  distance: {
    fontFamily: 'Lora-Regular',
    fontSize: 14,
    color: '#41416E',
    lineHeight: 18,
    paddingTop: 10,
  },
});
