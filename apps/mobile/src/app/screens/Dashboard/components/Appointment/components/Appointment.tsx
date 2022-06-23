import { colors } from 'apps/mobile/src/app/variables/colors'
import moment from 'moment'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TAppointment } from './Agenda'

type Props = {
    appointment: TAppointment,
    date: string
}

const current = moment(Date.now()).toString().substring(0,15)

const Appointment = (props: Props) => {
  const getDay = () => {
      let currentDay = '';
      const date = new Date(props.date)
      if (current === props.date.substring(0,15)){
          currentDay = 'Today at '
      }
      else if(moment(date).year() - moment(Date.now()).year() === 0 && moment(date).month() - moment(Date.now()).month() === 0){
          if(moment(Date.now()).day() === moment(date).day() - 1)currentDay = 'Tomorrow at ';
          else if (moment(Date.now()).day() === moment(date).day() + 1)currentDay = 'Yesterday at ';
      }
      return currentDay
  }
  return (
    <View style={styles.container}>
       <View style={styles.statusBox}>
            <View style={[styles.statusCircle, { backgroundColor:props.appointment.status   === 'Completed' ?   colors.PureGreen    :   "#A09FA0"}]} />
            <Text style={props.appointment.status   === 'Completed' ? styles.completedText : styles.pendingText}>{props.appointment.status}</Text>
            <Text style={props.appointment.status   === 'Completed' ? styles.TimeBoxSuccess : {color: '#A09FA0', fontFamily: 'Lora-Medium'}}>{props.appointment.time.substring(0,5)}</Text>
       </View>
       <View style={styles.AppointmentDetail}>
           <View style={styles.appointmentCard}>
             <View>
                <Text style={{color: colors.Text,fontFamily: 'Montserrat-SemiBold',fontSize: 12}}>{props.appointment.doctorType}</Text>
                <Text style={{color: colors.MedixBotPrimaryColor, fontFamily: 'Lora-SemiBold',marginTop: 5}}>{props.appointment.doctor}</Text>
             </View>
             <Text style={{color: colors.Text, fontFamily: 'Lora-Regular', width: 95,textAlign: 'right'}}>
                {getDay()}{props.appointment.time}
             </Text>
           </View>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5, 
        paddingTop: 12,
        flexDirection: 'row',
        width: '90%'
    },
    statusBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },
    statusCircle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginBottom: 3
    },
    completedText: {
        color: colors.PureGreen,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13
    },
    pendingText: {
        color:  "#A09FA0",
        fontFamily: 'Lora-Medium'
    },
    TimeBoxSuccess: {
        backgroundColor: colors.PureGreen,
        width: '95%',
        marginTop: 2,
        height: 27,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 2,
        color: "#ffffff98"
    },
    AppointmentDetail: {
        backgroundColor: '#4140421A',
        borderRadius: 15,
        width: '82%',
        height:75,
        marginLeft: 7,
        padding: 10,
        paddingHorizontal: 10
    },
    appointmentCard: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Appointment 