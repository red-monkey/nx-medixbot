import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Camera from '../../../icons/Camera'
import DoctorIcon from '../../../icons/DoctorIcon'
import Message from '../../../icons/Message'
import PatientBed from '../../../icons/PatientBed'
import SearchBar from '../../Marketplace/components/marketplace/SearchBar'
import AppointmentType, { OptionProps } from './AppointmentType'


const GreetingBoxSecondPart = () => {
  return (
    <View style={CustomStyles.container}>
        <Text style={CustomStyles.title}>Appointment with a doctor</Text>
        <SearchBar customPlaceHolder='Search your appointment'/>
        <Text style={[CustomStyles.title,{marginTop: -8}]}>Select appointment type</Text>
        <View style={CustomStyles.optionsContainer}>
            {options.map((item,i) => (
            <AppointmentType key={i} title={item.title} color={item.color} icon={item.icon} />                
            ))}
        </View>
    </View>
  )
}

export default GreetingBoxSecondPart


const CustomStyles = StyleSheet.create({
    container: {
        paddingTop: 15,
    },
    title: {
        color: '#000',
        fontFamily: 'Montserrat-Bold',
        marginBottom: 15
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})

const options: OptionProps[] = [
    {
        title: 'Telemedicine',
        color: '#FBE6E6',
        icon: <Camera />
    },
    {
        title: 'Live Chat',
        color: '#FBE6E6',
        icon: <Message />
    },
    {
        title: 'Doctor Visit',
        color: '#DCAFEC',
        icon: <DoctorIcon />
    },
    {
        title: 'Patient Visit',
        color: '#DCAFEC',
        icon: <PatientBed />
    },
]