import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../variables/colors";
// import {Products} from "./data/data";
import styles from "../../styles/CardStyles";
import Star from '../../../icons/marketplaceicons/star.svg'
import Cart from '../../../icons/marketplaceicons/cart.svg'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/marketplace";
import Header from "../Patient/components/Header";
import { ProductProps } from "../../utils/types";
import { items } from ".";
import loginStyles from "../../styles/LoginPageStyles";
import YellowButton from "./components/YellowButton";
import HeartIcon from "../../icons/Heart";


export const MyProducts = ({ route }) => {
    const [counter, setCounter] = useState(1);
    const [liked, setLiked] = useState(false);
    const {id, added} = route.params
    const navigation = useNavigation<ProductProps>();
    const goToCart = () => navigation.navigate('Cart')
    const product = items.find(item => item.id === id)
    const increase = () => {
        setCounter(counter+1)
    }

    const decrease = () => {
        setCounter(counter-1)
    }

    return(
        <View style={styles.root}>
            <Header title="Details"/>
            <View style={[loginStyles.loginPage,{paddingVertical: 25, paddingLeft: 0, zIndex: 1}]}>
                <View style={styles.upperPart}>
                    <View />
                    <Image source={{uri: product.image}} style={{width: 160, height:170, resizeMode: 'contain'}}/>
                    <TouchableOpacity onPress={goToCart}>
                        <Cart />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[{flex: 1},styles.productDescription]}>
            <ScrollView horizontal={false} scrollEnabled>
                        <Text style={styles.productDescriptionText}>
                            {product.name}
                        </Text>
                        <View style={styles.ratingsView}>
                            <Star />
                            <Text style={styles.ratingsText}>{product.rate}</Text>
                        </View>
                        <View style={styles.productsPriceView}>
                            <Text style={styles.productsPriceText}>${product.price}</Text>
                            <View style={styles.productsCounterView}>
                                <YellowButton style={{borderRadius: 8}} content={<TouchableOpacity style={styles.button} onPress={increase}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>} />
                                <Text style={{fontWeight:'700', fontSize:20, color:'#D7EAFF'}}>{counter}</Text>
                                <YellowButton style={{borderRadius: 8}} content={<TouchableOpacity disabled={counter === 1} style={counter === 1 ? styles.buttonLeft : styles.button} onPress={decrease}>
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>} />
                            </View>
                            
                        </View>
                        <View style={styles.productsDescriptionView}>
                            <Text style={styles.productsDescriptionTitle}>Description</Text>
                        </View>
                        <View style={styles.productDescriptionTextView}>
                            <Text style={styles.productDescriptionTextTwo}>
                            Get control of your vitals with our smart Watchit device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health.
                            </Text>
                        </View>
                        <View style={styles.addToCartButtonView}>
                            <YellowButton style={{borderRadius:16,}} content={<TouchableOpacity disabled={added} style={styles.addToCart}>
                                <Text style={styles.addToCartText}>{added ?  'Added' :'Add to Cart' }</Text>
                            </TouchableOpacity>} />
                            <YellowButton style={{borderRadius:20}} content={<TouchableOpacity style={styles.likeIcon} onPress={()=>setLiked(!liked)}>
                                <HeartIcon fill={liked === true ? '#414042' : ''}/>
                            </TouchableOpacity>}/>
                        </View>
                    </ScrollView>
                    </View>
        </View>
    );
};

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (id: number) => dispatch(addToCart(id)),
    }
}
