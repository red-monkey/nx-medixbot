import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../variables/colors'
import styles from '../../../styles/AppointmentStyles'
import { Calendar } from 'react-native-calendars'
import LeftArrow from '../../../icons/appointmentIcons/LeftArrow.svg'
import RightArrow from '../../../icons/appointmentIcons/RightArrow.svg'
import { useAppSelector } from '../../../utils/hooks'
import { addAppointment, resetCurrentAppointment } from '../../../redux/actions/appointment'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { useNavigation } from '@react-navigation/native'
import loginStyles from '../../../styles/LoginPageStyles'

const PickADate = () => {
    const [notSelected, setNotSelected] = useState(false)
    const [selectedDate,setSelectedDate] = useState<string>('')
    const [selectedTime, setSelectedTime] = useState<string>('');
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<Dispatch>()
    const doctor = useAppSelector(state => state.appointmentReducer.currentAppointment.doctor)
    const bookAppointment = () => {
        if(!selectedDate || !selectedTime){
            setNotSelected(true)
            return;}
        else {
            dispatch(addAppointment(selectedDate,selectedTime));
            dispatch(resetCurrentAppointment())
            navigation.navigate('Home')
        }
    }

  return (
        <View style={{justifyContent: 'space-between'}}>
            <Calendar 
                onDayPress={day => {
                    setSelectedDate(day.dateString)
                }}
                hideDayNames={true}
                theme={{arrowColor: 'black' , monthTextColor: '#0E1012', textMonthFontSize: 30, todayTextColor: colors.MedixBotPrimaryColor, textMonthFontFamily: 'Montserrat-Bold', selectedDayBackgroundColor: colors.MedixBotPrimaryColor, selectedDayTextColor: '#FFFFFF',}}
                enableSwipeMonths={true}
                style={{width: '85%', alignSelf: 'center'}}
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
                    {doctor && doctor.availability.map((time,i) => {
                        return(
                            <View key={i} style={styles.timeSelectBoxes}>
                                <TouchableOpacity onPress={() => setSelectedTime(time)} style={selectedTime === time ? styles.selectedTimeBox : styles.timeSelectBox}><Text style={styles.timeTxt}>{time}</Text></TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
                {notSelected && <Text style={[loginStyles.errorText,{textAlign: 'center'}]}>Please choose a date and a time for your appointment</Text>}
                <TouchableOpacity onPress={bookAppointment} style={styles.makeAppointmentBtn}>
                    <Text style={styles.makeAppointmentBtnTxt}>Make Appointment</Text>
                </TouchableOpacity>

              </View>
            </View>

        </View>
  )
}

export default PickADate