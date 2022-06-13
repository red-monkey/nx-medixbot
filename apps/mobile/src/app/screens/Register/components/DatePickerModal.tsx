import React, { useState } from 'react'
import { View,Text, TouchableOpacity, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import CustomModal from '../../../components/CustomModal'
import { setDate, setDateModal } from '../../../redux/actions/modal';
import { useAppSelector } from '../../../utils/hooks';
import {CalendarList} from 'react-native-calendars';
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';
import * as styles from '../../../styles/RegisterStyle';
import loginStyles from '../../../styles/LoginPageStyles';

declare type MarkedDatesType = {
  [key: string]: MarkingProps;
};

const DatePickerModal = () => {
  const dispatch = useDispatch<Dispatch>();
  const [markedDates,setmarkedDates] = useState<MarkedDatesType>()
  const [birthDate,setbirthDate] = useState<string>('')
  const bDate = useAppSelector(state => state.DatePickerModalReducer.date)
  const getSelectedDayEvents = (date:string) => {
    const markedDates = {};
    markedDates[date] = { selected: true, color: '#fff', textColor: '#9800CC' };
    setmarkedDates(markedDates);
};
  const { width } = Dimensions.get('screen');
  const isOpen = useAppSelector(state => state.DatePickerModalReducer.isOpen);
  const content = <View style={{height:380,paddingBottom: 70}}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        scrollsToTop={false}
        calendarWidth={width*0.75}
        calendarHeight={350}
        style={{
          marginLeft: width*0.125,
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
      <TouchableOpacity style={[styles.MembershipModalStyle.submitButton]} onPress={()=>{dispatch(setDate(birthDate));
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