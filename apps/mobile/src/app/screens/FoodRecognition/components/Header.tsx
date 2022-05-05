import React from "react"
import { View,Text, Image } from "react-native"
import { DashboardHeaderGradient } from "../../../commun/Gradients"
import HamburgerbtnClosed from '../../../icons/HamburgerButtonClosed.svg'
import NotificationIcon from '../../../icons/Notification.svg'
import styles from "../../../styles/DashboardStyles"
export const Header = () => {
    const content = (
    <View style={styles.HeaderRow}>
        <HamburgerbtnClosed/>
        <Image source={require('../../../../../../../assets/logos/medixbot.png')} />   
        <NotificationIcon />     
    </View>)
    return (
        <View>
            <DashboardHeaderGradient content={content} />
        </View>
    )
}