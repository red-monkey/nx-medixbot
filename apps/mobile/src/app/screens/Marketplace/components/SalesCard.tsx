import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { CardStyle } from '../../../styles/MarketPlaceStyles';
import Offer from '../../../icons/marketplaceicons/offer.svg';

type Props = {};

const SalesCard = (props: Props) => {
  return (
    <View style={{ marginBottom: 15, marginTop: 15 }}>
      <View style={CardStyle.wrapper}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['rgba(249, 236, 50, 0.5)', 'rgba(254, 192, 38, 0.5)']}
          style={styles.linearGradient}
          locations={[0, 0.9]}
        >
          <View style={CardStyle.container}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <Offer />
                </View>
                <Text style={styles.offer}>Offer of the day</Text>
              </View>
              <Text style={styles.saleText}>10% off sale on CGM</Text>
              <Text style={styles.distance}>20km from you</Text>
              <Text style={styles.price}>$800</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: 'https://picsum.photos/700' }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SalesCard;

const styles = StyleSheet.create({
  linearGradient: {
    padding: 15,
    height: 202,
    justifyContent: 'center',
    borderRadius: 8,
  },
  price: {
    fontWeight: '600',
    fontSize: 18,
    color: '#41416E',
    lineHeight: 20,
    paddingTop: 10,
  },
  saleText: {
    fontWeight: '700',
    fontSize: 22,
    color: '#41416E',
    lineHeight: 27,
    paddingTop: 25,
  },
  offer: {
    fontWeight: '400',
    fontSize: 14,
    color: '#41416E',
    lineHeight: 18,
    paddingLeft: 5,
  },
  distance: {
    fontWeight: '400',
    fontSize: 14,
    color: '#41416E',
    lineHeight: 18,
    paddingTop: 10,
  },
});
