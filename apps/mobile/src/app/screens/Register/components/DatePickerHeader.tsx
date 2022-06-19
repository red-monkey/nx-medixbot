import Modal from 'react-native-modal';
import React, { useState } from 'react'
import { Dimensions, View,Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';
import HorizontalArrow from '../../../icons/HorizontalArrow';
import { colors } from '../../../variables/colors';


declare type MarkedDatesType = {
    [key: string]: MarkingProps;
  };

type props = {
    setMonth: React.Dispatch<React.SetStateAction<string>>,
    setYear: React.Dispatch<React.SetStateAction<number>>,
    setCurrent: React.Dispatch<React.SetStateAction<string>>,
    currentMonth: string,
    currentYear: number,
    currentDay: string
}
const currentYear = new Date().getFullYear();
const initYear = 1900;
const { width } = Dimensions.get('screen');
const years = Array(currentYear - initYear + 1).fill('').map((v, idx) => initYear+idx);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const CustomHeader= ({setMonth,setYear,currentMonth,currentYear,setCurrent,currentDay}: props) => {
    const [showYearsList, setShowYears] = useState<boolean>(false);
    const [showMonthsList, setShowMonths] = useState<boolean>(false);
    const changeMonth = (month: number) => {
        const monthNB = month.toString().length === 1 ? '0'+ month.toString() : month.toString()
        if(currentDay.length === 0){
            setCurrent(currentYear.toString() +'-'+ monthNB + '-01')
        }
        else {
            setCurrent(currentDay.slice(0,5) + monthNB + currentDay.slice(7,10));         
        }
    }

    const changeYear = (year: number) => {
        if(currentDay.length === 0){
            const monthNB = currentMonth.length === 1 ? '0'+ currentMonth : currentMonth
            setCurrent(year +'-'+ monthNB + '-01')
        }
        else {
            setCurrent(year + currentDay.slice(4,10));         
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => setShowMonths(true)} style={styles.monthBtn}>
                <Text style={[{color: colors.MedixBotPrimaryColor1},styles.btnText]}>{currentMonth.length < 3 ? months[currentMonth] : currentMonth}</Text>
                <HorizontalArrow color={"#7047EB"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowYears(true)} style={styles.yearBtn}>
                <Text style={[{color: '#fff'},styles.btnText]}>{currentYear}</Text>
                <HorizontalArrow color={"#ffffff85"} />
            </TouchableOpacity>            
            <Modal
                    isVisible={showMonthsList}
                    backdropOpacity={0.5}
                    onBackdropPress={() => setShowMonths(false)}>
            <ScrollView style={styles.monthScrollList}>
                {months.map((item,index) => (
                    <TouchableOpacity key={index} onPress={()=>{setMonth(item);changeMonth(index+1)}} style={styles.ScrollListOption}>
                        <Text style={{color:'#000'}}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>                       
            </Modal>
            <Modal
                    isVisible={showYearsList}
                    backdropOpacity={0.5}
                    onBackdropPress={() => setShowYears(false)}>
             <ScrollView style={styles.yearScrollList}>
                {years.map((item,index) => (
                    <TouchableOpacity  key={index}  onPress={()=>{setYear(item); changeYear(item)}}  style={styles.ScrollListOption}>
                        <Text style={{color:'#000'}}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>                       
            </Modal> 
        </View>
    )
}

export default CustomHeader;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50,
        flexDirection: 'row'
    },
    monthBtn: {
        backgroundColor: '#D5D5D6',
        marginRight: 5,
        paddingHorizontal:5, 
        minWidth: 75,
        alignItems: 'center',
        borderRadius: 10, 
        height: 45, 
        justifyContent:'center', 
        flexDirection: 'row'
    },
    yearBtn: {
        width: 70,
        alignItems: 'center',
        borderRadius: 10, 
        height: 45, 
        justifyContent:'center', 
        flexDirection: 'row'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    monthScrollList: {
        height: 300,
        borderRadius: 5, 
        backgroundColor:'#fff', 
        position: 'absolute', 
        top: 215,
        left: width*0.12,
        width:120, 
        padding: 10
    },
    yearScrollList: {
        height: 250, 
        backgroundColor:'#fff', 
        position: 'absolute', 
        top: 215,
        left: width*0.46,
        width: 75, 
        paddingHorizontal: 10,
        borderRadius: 5
    },
    ScrollListOption: {
        alignItems: 'flex-end',
        paddingVertical: 7.5,
        paddingRight: 5, 
        borderBottomColor: "#00000021", 
        borderBottomWidth: 1
    }
})