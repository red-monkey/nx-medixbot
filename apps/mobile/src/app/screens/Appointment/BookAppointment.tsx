import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles/AppointmentStyles'
import Header from '../Patient/components/Header'
import UrgentIcon from '../../icons/appointmentIcons/UrgentIcon.svg'
import PrimaryIcon from '../../icons/appointmentIcons/PrimaryIcon.svg'
import ChronicIcon from '../../icons/appointmentIcons/ChronicIcon.svg'
import MentalIcon from '../../icons/appointmentIcons/MentalIcon.svg'
import PediatricsIcon from '../../icons/appointmentIcons/PediatricsIcon.svg'
import GynecologyIcon from '../../icons/appointmentIcons/GynecologyIcon.svg'
import PregnancyIcon from '../../icons/appointmentIcons/PregnancyIcon.svg'
import DottedLine from '../../icons/appointmentIcons/DottedLine.svg'
import AppointmentSteps from './components/AppointmentSteps'

const healthcareCards = [
    {Icon: UrgentIcon, header: 'Urgent Health Care', desc: 'Lorem ipsum dolor sit', iconColor: '#DCEDF9'},
    {Icon: PrimaryIcon, header: 'Primary Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: 'rgba(247, 56, 89, 0.15)'},
    {Icon: ChronicIcon, header: 'Chronic Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#FAF0DB'},
    {Icon: MentalIcon, header: 'Mental Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#DCEDF9'},
    {Icon: PediatricsIcon, header: 'Pediatrics Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#F2E3E9'},
    {Icon: GynecologyIcon, header: 'Gynecology Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#DCEDF9'},
    {Icon: PregnancyIcon, header: 'Pregnancy Healthcare', desc: 'Check your schedule today', iconColor: '#F2E3E9'},
]

const OrderStatus = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.container} >
        <Header title='Book Appointment'/>
        <View style={styles.screenContentCart}>

          <AppointmentSteps />

          <View style={{marginVertical: '10%', paddingHorizontal: '2%'}}>
            <DottedLine />
          </View>

          {healthcareCards.map(({Icon, header, desc, iconColor}, i) => {
            return(
                <View style={styles.healthcareTypes}>
                  <TouchableOpacity style={styles.healthcareTypesCard}>
                    <View style={[styles.healthcareIconContainer, {backgroundColor:iconColor}]}>
                      <Icon/>
                    </View>
                    <View style={styles.healthcareTypeTxtGroup}>
                      <Text style={styles.healthCareTypeHeader}>{header}</Text>
                      <Text style={styles.healthCareTypeDescription} key={i}>{desc}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
          })}
        </View>
    </ScrollView>
  )
}

export default OrderStatus;