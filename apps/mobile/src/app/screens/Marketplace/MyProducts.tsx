// import { useEffect } from "react";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Pressable, StatusBar, Text, View } from "react-native";
import { colors } from "../../variables/colors";
import {Products} from "./data/data";
import { Header } from "./components/Header";
import styles from "../../styles/MarketplaceStyles";
import GreatEmoji from "../../icons/GreatEmoji.svg";
import { useState } from "react";

export const MyProducts = () => {
    const initialValue = 0;
const [counter, setCounter] = useState(initialValue);

    return(
        <SafeAreaView style={styles.root}>
            <StatusBar 
                backgroundColor={colors.backgroundColor}
                barStyle="dark-content"
            />
            <Header />
            <View style={styles.screenContent}>
                <View style={styles.productDescription}>
                    <Text style={{color:'#D7EAFF', fontSize: 28, fontWeight:'bold', marginTop: 38, marginLeft:21}}>
                        Watchit Smartly

                    </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',marginLeft:21, marginTop:-320}}>
                    <GreatEmoji height={20}/>
                    <Text style={{color: '#D7EAFF', fontSize: 18, fontWeight:'400'}}>4.5</Text>
                </View>
                <View style={{ justifyContent:'space-between', flexDirection:'row', marginRight:23, alignItems:'center', height:33}}>
                    <Text style={{color: '#D7EAFF', marginLeft:23,  fontSize:22, fontWeight:'700', marginTop:10}}>$200</Text>
                    <View style={{flexDirection:'row', width:100, justifyContent:'space-between', alignItems:'center'}}>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                        <Text style={{fontWeight:'700', fontSize:20, color:'#D7EAFF'}}>1</Text>
                        <Pressable style={styles.buttonLeft}>
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>
                    </View>
                    
                </View>
                <View style={{marginLeft:23, marginRight:23, marginTop:50}}>
                    <Text style={{color:'#D7EAFF', fontWeight:'400', fontSize:18}}>Description</Text>
                </View>
                <View style={{marginLeft:23, marginRight:23, marginTop:10}}>
                    <Text style={{color:'#D7EAFF', fontSize:16, fontWeight:'400', fontFamily:'Lora'}}>
                    Get control of your vitals with our smart Watchit device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health.
                    </Text>
                </View>
                <View style={{flexDirection:'row', marginTop:25, justifyContent:'space-between', marginLeft:23, marginRight:23}}>
                    <Pressable style={styles.addToCart}>
                        <Text style={styles.addToCartText}>Add To Cart</Text>
                    </Pressable>
                    <Pressable style={styles.likeIcon}>
                        <Text>Icon</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}