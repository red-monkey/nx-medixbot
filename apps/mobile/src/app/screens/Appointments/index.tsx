import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import ReminderIcon from '../../icons/ReminderIcon'
import  * as dashboardStyles from '../../styles/DashboardStyles'
import { styles } from '../Dashboard/components/Appointment'
import Appointment from '../Dashboard/components/Appointment'
import GreetingBox from '../Dashboard/components/GreetingBox'
import { Header } from '../Dashboard/components/Header'
import { AppointmentCategories, TCategory } from '../Dashboard/components/Healthcare'
import Category from '../Dashboard/components/Healthcare/components/Category'
import Notification from '../Dashboard/components/Notifications/Notification'

const Apppointments = () => {
  return (
    <ScrollView>
    <StatusBar
      translucent={true}
      backgroundColor={'transparent'}
      barStyle="dark-content"
    />
    <Header />
    <View style={[dashboardStyles.default.screenContent,{paddingBottom: 50}]}>
    <GreetingBox showLogo={false} showMedixBotter={false}/>
    <Appointment />
    <Notification
        category="reminders"
        count={5}
        color="#F5007E"
        icon={<ReminderIcon width={34} height={32} />}
      />
    <View style={[styles.appointmentContainer,{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 0, width: '100%',maxHeight: 310,paddingVertical: 15}]}>
        {AppointmentCategories.map((item,index) => (
            <Category category={item} key={index}/>
        ))}
    </View>
    </View>
    </ScrollView>
  )
}

export default Apppointments


