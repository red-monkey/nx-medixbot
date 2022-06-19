import React, { useState } from 'react'
import { View,Text, TouchableOpacity, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import CustomModal from '../../../components/CustomModal'
import { setDate, setDateModal } from '../../../redux/actions/modal';
import { useAppSelector } from '../../../utils/hooks';
import {Calendar, CalendarList} from 'react-native-calendars';
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';
import * as styles from '../../../styles/RegisterStyle';
import loginStyles from '../../../styles/LoginPageStyles';
import CustomHeader from './DatePickerHeader';

declare type MarkedDatesType = {
  [key: string]: MarkingProps;
};


const DatePickerModal = () => {
  const dispatch = useDispatch<Dispatch>();
  const [markedDates,setmarkedDates] = useState<MarkedDatesType>()
  const [birthDate,setbirthDate] = useState<string>('')
  const [selectedMonth, setSelectedMonth] = useState<string>(new Date().getMonth().toString())
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const bDate = useAppSelector(state => state.DatePickerModalReducer.date)
  const getSelectedDayEvents = (date:string) => {
    const markedDates = {};
    markedDates[date] = { selected: true, color: '#fff', textColor: '#9800CC' };
    setmarkedDates(markedDates);
};
  const { width } = Dimensions.get('screen');
  const isOpen = useAppSelector(state => state.DatePickerModalReducer.isOpen);
  const content = <View style={{height:415,paddingBottom: 70}}>
      <Calendar
        key={birthDate}
        current={birthDate}
        customHeader={()=>CustomHeader({currentDay: birthDate,setCurrent: setbirthDate,setMonth: setSelectedMonth,setYear: setSelectedYear, currentMonth: selectedMonth, currentYear: selectedYear})}
        style={{
          marginLeft: width*0.11,
          height: 350,
          width: width*0.8
        }}
        theme = {{
          backgroundColor: 'transparent',
          textMonthFontSize: 19,
          selectedDayBackgroundColor:'#9800CC',
          selectedDayTextColor: '#fff',
          calendarBackground: 'transparent',
          dayTextColor: '#fff',
          textDisabledColor: '#d9e1e859',
          arrowColor: '#fff',
          monthTextColor: '#F283B6',
          textMonthFontWeight: '600',
          textMonthFontFamily: 'Montserrat-SemiBold',
          dotColor: 'transparent',
          textDayStyle: {color: '#fff'},
          todayTextColor: '#7047EB',
          todayBackgroundColor: '#D5D5D6',
          agendaDayTextColor: '#000'
        }}
        markingType={'custom'}
        markedDates={markedDates}
        onDayPress={day => {
          getSelectedDayEvents(day.dateString);
          setbirthDate(day.dateString)
        }}
/>
  <View style={styles.DatePickerModalStyle.submitButtonGroup}>
      <TouchableOpacity
        onPress={()=>{dispatch(setDateModal(false));getSelectedDayEvents(bDate)}}
        style={[styles.MembershipModalStyle.submitButton,styles.MembershipModalStyle.createNewBtn]}>
        <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#41416E'}]}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.MembershipModalStyle.submitButton,{marginLeft: 10}]} onPress={()=>{dispatch(setDate(birthDate));
      dispatch(setDateModal(false))
      }}>
          <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#fff'}]}>Save</Text>
      </TouchableOpacity>
    </View>
  </View>
  return (
    <CustomModal content={content} visible={isOpen} onBackdropPress={()=>dispatch(setDateModal(false))}/>
    )
}

export default DatePickerModal