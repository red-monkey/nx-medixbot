import { View, Text, Image } from "react-native"
import styles from "../../../styles/DashboardStyles";
import React from "react";
const GreetingBox = () => {
    return(<View style={styles.GreetingBoxContainer}>
        <Image style={styles.bot} source={require('../../../../../../../assets/logos/Medixboter.png')} />
        <View >
          <Image style={styles.profile} source={require('../../../../../../../assets/images/profile.jpg')} /> 
          <Text>Good Morning Ayesha</Text>
        </View>
    </View>)
} 

export default GreetingBox;