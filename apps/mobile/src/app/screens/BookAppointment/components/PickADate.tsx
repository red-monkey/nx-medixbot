import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { colors } from '../../../variables/colors'
import styles from '../../../styles/AppointmentStyles'
import Header from '../../Patient/components/Header'
import AppointmentSteps from './AppointmentSteps'
import { Calendar } from 'react-native-calendars'
import LeftArrow from '../../../icons/appointmentIcons/LeftArrow.svg'
import RightArrow from '../../../icons/appointmentIcons/RightArrow.svg'

const PickADate = () => {

    const [selectedDate,setSelectedDate] = useState<string>('')
    const [selectedTime, setSelectedTime] = useState<number>(null);

    const times = [
        {id: 1, time: '09.00 AM'},
        {id: 2, time: '09.30 AM'},
        {id: 3, time: '10.00 AM'},
        {id: 4, time: '11.00 AM'},
        {id: 5, time: '11.30 AM'},
        {id: 6, time: '12.00 AM'},
    ]

  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop: 40}]} >
        <Header title='Book Appointment'/>
        <View style={styles.screenContentCart}>
            
            <Calendar 
                onDayPress={day => {
                    console.log(day)
                    setSelectedDate(day.dateString)
                }}
                hideDayNames={true}
                theme={{arrowColor: 'black' , monthTextColor: '#0E1012', textMonthFontSize: 30, todayTextColor: colors.MedixBotPrimaryColor, textMonthFontFamily: 'Montserrat-Bold', selectedDayBackgroundColor: colors.MedixBotPrimaryColor, selectedDayTextColor: '#FFFFFF',}}
                enableSwipeMonths={true}
                style={{width: '85%', alignSelf: 'center', marginVertical: 50 }}
                renderArrow = {( direction ) => {
                    if ( direction === 'left') return ( <LeftArrow />);
                    if ( direction === 'right') return ( <RightArrow />);
                 }
                }
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedColor: colors.MedixBotPrimaryColor,
                        selectedTextColor: '#FFFFFF',
                        customStyles: {
                            container: {
                                borderRadius: 10
                            }
                        }
                    }
                }}
                markingType={'custom'}
            />

            <View style={styles.appointmentTimeContainer}>
              <View style={styles.appointmentTimeSectionWrapper}>
                <Text style={styles.timeHeader}>Time</Text>

                <View style={styles.timeSelectBoxContainer}>
                    {times.map(({id, time}) => {
                        return(
                            <View key={id} style={styles.timeSelectBoxes}>
                                <TouchableOpacity onPress={() => setSelectedTime(id)} style={selectedTime === id ? styles.selectedTimeBox : styles.timeSelectBox}><Text key={id} style={styles.timeTxt}>{time}</Text></TouchableOpacity>
                            </View>
                        )
                    })}
                </View>

                <TouchableOpacity style={styles.makeAppointmentBtn}>
                    <Text style={styles.makeAppointmentBtnTxt}>Make Appointment</Text>
                </TouchableOpacity>

              </View>
            </View>

        </View>
    </ScrollView>
  )
}

export default PickADate