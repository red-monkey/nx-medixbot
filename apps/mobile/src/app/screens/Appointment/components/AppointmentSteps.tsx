import { Text, View } from 'react-native'
import { colors } from '../../../variables/colors'
import SelectHealthcareIcon from '../../icons/appointmentIcons/SelectHealthCareIcon.svg'
import styles from '../../../styles/AppointmentStyles'
import NatureOfHealthIcon from '../../icons/appointmentIcons/NatureOfHealthIcon.svg'
import SelectDoctorIcon from '../../icons/appointmentIcons/SelectDoctorIcon.svg'
import PickDateIcon from '../../icons/appointmentIcons/PickDateIcon.svg'
import React from 'react'
// You can change Icons color with fill variable. Example => <SelectDoctorIcon fill={colors.newLightBlue}/>

const AppointmentSteps = () => {
  return (
    <View style={{display: "flex", flexDirection: "row", justifyContent: 'space-evenly', paddingTop: 30}}>
            <View>
                <View style={[styles.appointmentStatusBox, {backgroundColor: colors.newBlack}]}><SelectHealthcareIcon fill={'#F5F5F5'}/></View> 
                <Text style={[styles.appointmentStatusTxt, {marginLeft: -9.5}]}>Select Healthcare</Text>
            </View>
            <View style={styles.line}></View>
            <View>
                <View style={styles.appointmentStatusBox}><NatureOfHealthIcon /></View>
                <Text style={[styles.appointmentStatusTxt, {marginLeft: -7}]}>Nature of Health</Text>
            </View>
            <View style={styles.line}></View>
            <View>
                <View style={styles.appointmentStatusBox}><SelectDoctorIcon /></View>
                <Text style={[styles.appointmentStatusTxt, {marginLeft: -6}]}>Select a Doctor</Text>
            </View>
            <View style={styles.line}></View>
            <View>
                <View style={styles.appointmentStatusBox}><PickDateIcon /></View>
                <Text style={[styles.appointmentStatusTxt, {marginRight: -9}]}>Pick a Date</Text>
            </View>
    </View>
  )
}

export default AppointmentSteps