import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductCardStyles } from '../../../styles/MarketPlaceStyles';
import Star from '../../../icons/marketplaceicons/star.svg'
import AddToCart from '../../../icons/marketplaceicons/addToCart.svg'
import AddedToCart from '../../../icons/marketplaceicons/heartFilled.svg'
import { IItemProp } from '../index';
import { useNavigation } from '@react-navigation/native';
import { MarketplaceStackParamList } from '../../../utils/types';
import YellowButton from './YellowButton';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addToCart, removeFromCart } from '../../../redux/actions/marketplace';
import { useAppSelector } from '../../../utils/hooks';
import { TProduct } from '@medixbot/types';


const ProductCard = (props: TProduct) => {
  const [added, setAdded] = useState(false);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<Dispatch>()
  const addProductToCart = () => {
    setAdded(!added)
    dispatch(addToCart(props.id))
  }
  const removeProductFromCart = () => {
    setAdded(!added)
    dispatch(removeFromCart(props.id))   
  }
  useEffect(()=> {
    setAdded(false)
  },[])
  return (
    <TouchableOpacity style={{width: '49%'}} onPress={()=>navigation.navigate('ProductDetails',{id: props.id, added: added})}>
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
          <Text style={ProductCardStyles.rating}>{props.rating}</Text>
        </View>
        <View style={ProductCardStyles.CardActions}>
          <View>
            <Text style={ProductCardStyles.price}>{props.price} $</Text>
          </View>
          <TouchableHighlight>
            <YellowButton style={{width: 100,height: 35,}} content={
              <TouchableOpacity
                style={styless.items}
                onPress={added ? removeProductFromCart : addProductToCart}
              >
                {added ? <AddedToCart /> :<AddToCart />}
                {!added ? (
                  <Text style={{ paddingHorizontal: 4, color: "#414042", fontFamily: 'Montserrat-Bold', fontSize: 12}}>
                    Add Cart
                  </Text>
                ) : (
                  <Text style={{ paddingHorizontal: 4, color: "#414042", fontFamily: 'Montserrat-Bold', fontSize: 12 }}>
                    Added
                  </Text>
                )}
              </TouchableOpacity>} />
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
