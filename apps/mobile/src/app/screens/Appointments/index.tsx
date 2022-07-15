import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import styles from '../../styles/DashboardStyles'
import GreetingBox from '../Dashboard/components/GreetingBox'
import { Header } from '../Dashboard/components/Header'


const Apppointments = () => {
  return (
    <View>
    <StatusBar
      translucent={true}
      backgroundColor={'transparent'}
      barStyle="dark-content"
    />
    <Header />
    <View style={styles.screenContent}>
    <GreetingBox showLogo={false} showMedixBotter={false}/>
    </View>
    </View>
  )
}

export default Apppointments