import React from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { Header } from '../Dashboard/components/Header'
import  * as dashboardStyles from '../../styles/DashboardStyles'
import GreetingBox from '../Dashboard/components/GreetingBox'
import GreetingBoxSecondPart from './components/GreetingBoxSecondPart'
import AppointmentsList from './components/AppointmentsList'

const MakeAppointment = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 40}}>
    <StatusBar
      translucent={true}
      backgroundColor={'transparent'}
      barStyle="dark-content"
    />
    <Header />
    <View style={[dashboardStyles.default.screenContent,{paddingBottom: 50}]}>
        <GreetingBox showLogo={false} showMedixBotter={false} title={'Make Appointment'} SecondPart={<GreetingBoxSecondPart />}/>
    </View>
    <AppointmentsList />
    </ScrollView>
  )
}

export default MakeAppointment