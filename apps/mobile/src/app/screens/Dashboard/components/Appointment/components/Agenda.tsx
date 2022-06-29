import moment from 'moment'
import React, { LegacyRef, MutableRefObject, useEffect, useRef, useState } from 'react'
import {Alert,StyleSheet, Dimensions, Text,TouchableOpacity,View} from "react-native"
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from 'react-native-calendars'
import CalendarStrip from 'react-native-calendar-strip';
import { colors } from '../../../../../variables/colors'
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import Appointment from './Appointment';

export type TAppointment = {
    status: string,
    doctorType: string,
    doctor: string,
    time: string
}

type Tevent = {
    date: string,
    appointments: TAppointment[]
}
const events:Tevent[] =
 [
    {
        date: '2022-06-20',
        appointments: [
            {
                status: 'Completed',
                doctorType: 'Dentist',
                doctor: 'Dr John Doe',
                time: '5:00 PM'
            },
            {
                status: 'Pending',
                doctorType: 'Dermatologist',
                doctor: 'Dr John Doe',
                time: '7:00 PM'
            },
            {
                status: 'Pending',
                doctorType: 'Dermatologist',
                doctor: 'Dr John Doe',
                time: '7:00 PM'
            }
        ]
    },
    {
        date: '2022-06-21',
        appointments: [
            {
                status: 'Pending',
                doctorType: 'Dermatologist',
                doctor: 'Dr John Doe',
                time: '7:00 PM'
            }
        ]       
    },
    {
        date: '2021-11-04',
        appointments: [
            {
                status: 'Completed',
                doctorType: 'Dentist',
                doctor: 'Dr John Doe',
                time: '7:00 PM'
            }
        ]       
    }

 ]

const markedDatesArray = []

  events.forEach(elem => {
      markedDatesArray.push({
        date: moment(elem.date),
        dots: [
          {
            color: colors.MedixBotPrimaryColor1,
            selectedColor: '#ffffff97',
          },
        ],       
      })
  })

const AgendaComponent = () => {
    const calendarRef = useRef<ReactNativeCalendarStrip>()
    const [appointments, setAppointments] = useState<TAppointment[]>([])
    const [selectedDate,setSelectedDate] = useState<string>('')
    const getDates = (date: moment.Moment) => {
        //const current = moment(Date.now()).toString().substring(0,15)
        let appointmentDay = '';
        let appointments = [];
        events.forEach(elem => {
            appointmentDay = moment(elem.date).toLocaleString().substring(0,15)
            if (appointmentDay === date.toString().substring(0,15)) {
                appointments = elem.appointments
            }
        })
        return appointments
    }
    
    
    return(
        <View style={{width: Dimensions.get('screen').width*0.85,paddingBottom: 15}}>
        <CalendarStrip 
            scrollable
            ref={calendarRef}
            onDateSelected={(date) => {setAppointments(getDates(date));setSelectedDate(date.toString())}}
            markedDates={markedDatesArray}
            style={{height: 90,paddingTop: 20}}  
            highlightDateNameStyle={{color: '#ffffff97'}}  
            highlightDateNumberStyle={{color: '#ffffff97'}}       
            calendarColor={'#fff'}
            calendarHeaderStyle={{color: colors.Text,marginBottom: 25,fontSize: 13}}
            dateNumberStyle={{color: colors.Text, marginBottom: -1}}
            dateNameStyle={{color: colors.Text, marginBottom: -2, fontFamily: 'Montserrat-SemiBold', fontSize: 10}}
            iconContainer={{flex: 0.1}}
            innerStyle={[]}
            highlightDateContainerStyle={{backgroundColor: colors.MedixBotPrimaryColor1}}
        />
        <TouchableOpacity>
            <Text style={{color: colors.MedixBotPrimaryColor,width: '97%',textAlign:'right', fontFamily: 'Roboto', fontWeight: 'bold'}}>View All</Text>
        </TouchableOpacity>
        {appointments.length > 0 ?
        appointments.slice(0,2).map((item,index) => (
            <Appointment appointment={item} key={index} date={selectedDate}/>
        ))
        : null}
        </View>

    )
}

export default AgendaComponent