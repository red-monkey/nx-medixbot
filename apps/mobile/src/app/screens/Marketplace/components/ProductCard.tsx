import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { ProductCardStyles } from '../../../styles/MarketPlaceStyles';
import LinearGradient from "react-native-linear-gradient";
import Star from '../../../icons/marketplaceicons/star.svg'
import AddToCart from '../../../icons/marketplaceicons/addToCart.svg'
import AddedToCart from '../../../icons/marketplaceicons/heartFilled.svg'
import { IItemProp } from '../index';


const ProductCard = (props: IItemProp) => {
  const [added, setAdded] = useState(true);
  return (
    <TouchableOpacity style={{width: '49%'}}>
      <View style={ProductCardStyles.card}>
      <View style={ProductCardStyles.cardContent}>
        <View style={ProductCardStyles.contentContainer}>
          <View style={ProductCardStyles.imageContainer}>
            <Image
              style={ProductCardStyles.image}
              source={{ uri: props.image }}
            />
          </View>
        </View>
        <View style={ProductCardStyles.titleWrapper}>
          <Text style={ProductCardStyles.title}>{props.name}</Text>
        </View>
        <View style={styless.itemRating}>
          <Star />
          <Text style={ProductCardStyles.rating}>{props.rate}</Text>
        </View>
        <View style={ProductCardStyles.CardActions}>
          <View>
            <Text style={ProductCardStyles.price}>{props.price} $</Text>
          </View>
          <TouchableHighlight>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#F9ED32", "#fdc73d"]}
              style={styless.linearGradient}
              locations={[0, 0.5]}
            >
              <TouchableOpacity
                style={styless.items}
                onPress={() => setAdded(!added)}
              >
                {added ? <AddToCart /> : <AddedToCart />}
                {added ? (
                  <Text style={{ paddingHorizontal: 4, color: "#414042", fontFamily: 'Montserrat-Bold', fontSize: 12}}>
                    Add Cart
                  </Text>
                ) : (
                  <Text style={{ paddingHorizontal: 4, color: "#414042", fontFamily: 'Montserrat-Bold', fontSize: 12 }}>
                    Added
                  </Text>
                )}
              </TouchableOpacity>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    
  );
};

const styless = StyleSheet.create({
  linearGradient: {
    width: 100,
    height: 35,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  itemRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProductCard;
