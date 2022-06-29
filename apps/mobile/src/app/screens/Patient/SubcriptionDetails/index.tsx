import React from "react"
import { ScrollView, View,Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { CardIcon } from "../../../icons/cardIcon"
import HourIcon from "../../../icons/Hour"
import styles from "../../../styles/HomepageStyles"
import loginStyles from "../../../styles/LoginPageStyles"
import sharedStyles from "../../../styles/SharedStyles"
import { colors } from "../../../variables/colors"
import * as appointment  from "../../Dashboard/components/Appointment";
import Header from "../components/Header"
import Card from "./components/Card"
import Detail from "./components/Detail"

const SubscriptionDetails = () => {
    return(
        <View style={[styles.Container]}>
            <Header title={'Subscription Detail'} right={<HourIcon />}/>
            <View style={[loginStyles.loginPage,{paddingVertical: 25, paddingLeft: 10,paddingRight: 10, minHeight: Dimensions.get('screen').height}]}>
            <View style={sharedStyles.row}>
                <Text style={{fontFamily: 'Montserrat-Bold',color: '#000',paddingLeft: 5}}>Your Current Membership</Text>
                <TouchableOpacity>
                    <Text style={{fontFamily: 'Montserrat-Medium',color: colors.MedixBotPrimaryColor,paddingLeft: 5}}>Check usage report </Text>
                </TouchableOpacity>
            </View>
            <View style={SubscriptionStyles.container}>
                <Card />
                <Detail />
            </View>
            </View>
        </View>
    )
}

const SubscriptionStyles = StyleSheet.create({
    container: {
        shadowRadius: 10,
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
        elevation:3,
        borderRadius: 15,
        marginTop: 15,
        paddingTop: 10
    }
})
export default SubscriptionDetails;

