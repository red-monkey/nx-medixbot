import React from 'react'
import { View, Text } from 'react-native'
import { TAppointment } from '../../../utils/types'
import { ListStyles } from './AppointmentsList'


const AppointmentsListItem = ({props,i}: {props: TAppointment,i:number}) => {
  return (
    <View style={ListStyles.appointment}>
        <Text style={ListStyles.appointmentNo}>{i+1}</Text>
        <View style={{justifyContent: 'space-between',height: '80%'}}>
            <Text style={{color: '#000',fontWeight: '500', fontSize: 16}}>{props.Healthcare}</Text>
            <Text style={{color: '#000',fontFamily: 'Lora-Medium'}}>Lorem ipsum  lorem ipsum</Text>
            <Text style={{color: '#9A9292',fontWeight: '400'}}>{props.date}</Text>
        </View>
    </View>
  )
}

export default AppointmentsListItem