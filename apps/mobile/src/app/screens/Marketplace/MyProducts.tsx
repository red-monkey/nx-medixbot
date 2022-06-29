// import { useEffect } from "react";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StatusBar, Text, View } from "react-native";
import { colors } from "../../variables/colors";
// import {Products} from "./data/data";
import { Header } from "./components/Header";
import styles from "../../styles/MarketplaceStyles";
import Star from "../../icons/Star.svg";
import Vector from "../../icons/Vector.svg";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/marketplace";

import data from './data/data.json'


export const MyProducts = ({ addToCart }) => {
    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);
    const navigation = useNavigation<any>();

    const myCart = () => navigation.navigate('MyCart');

    return(
        <SafeAreaView style={styles.root}>
            <StatusBar 
                backgroundColor={colors.backgroundColor}
                barStyle="dark-content"
            />
            <Header />
            <View style={styles.screenContent}>
                <View>
                    <Pressable
                        onPress={myCart}
                        style={styles.cartIcon}
                    >
                        <Vector />
                    </Pressable>
                </View>
                <View style={styles.productDescription}>
                    <Text style={styles.productDescriptionText}>
                        Watchit Smartly

                    </Text>
                </View>
                <View style={styles.ratingsView}>
                    <Star height={20}/>
                    <Text style={styles.ratingsText}>4.5</Text>
                </View>
                <View style={styles.productsPriceView}>
                    <Text style={styles.productsPriceText}>$200</Text>
                    <View style={styles.productsCounterView}>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                        <Text style={{fontWeight:'700', fontSize:20, color:'#D7EAFF'}}>1</Text>
                        <Pressable style={styles.buttonLeft}>
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>
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
                    <Pressable 
                        style={styles.addToCart}
                        
                    >
                        <Text style={styles.addToCartText}>Add To Cart</Text>
                    </Pressable>
                    <Pressable style={styles.likeIcon}>
                        <Text>Icon</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (id: number) => dispatch(addToCart(id)),
    }
}
