import React from 'react'
import UrgentIcon from '../../icons/appointmentIcons/UrgentIcon.svg'
import PrimaryIcon from '../../icons/appointmentIcons/PrimaryIcon.svg'
import ChronicIcon from '../../icons/appointmentIcons/ChronicIcon.svg'
import MentalIcon from '../../icons/appointmentIcons/MentalIcon.svg'
import PediatricsIcon from '../../icons/appointmentIcons/PediatricsIcon.svg'
import GynecologyIcon from '../../icons/appointmentIcons/GynecologyIcon.svg'
import PregnancyIcon from '../../icons/appointmentIcons/PregnancyIcon.svg'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from '../../../styles/AppointmentStyles'
import { THealthcare } from '../../../utils/types'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { setHealthcareType } from '../../../redux/actions/appointment'

type THealthcareCard = {
  Icon: any, header: THealthcare, desc: string, iconColor: string
}
const healthcareCards: THealthcareCard[] = [
    {Icon: UrgentIcon, header: 'Urgent Health Care', desc: 'Lorem ipsum dolor sit', iconColor: '#DCEDF9'},
    {Icon: PrimaryIcon, header: 'Primary Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: 'rgba(247, 56, 89, 0.15)'},
    {Icon: ChronicIcon, header: 'Chronic Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#FAF0DB'},
    {Icon: MentalIcon, header: 'Mental Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#DCEDF9'},
    {Icon: PediatricsIcon, header: 'Pediatrics Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#F2E3E9'},
    {Icon: GynecologyIcon, header: 'Gynecology Healthcare', desc: 'Lorem ipsum dolor sit', iconColor: '#DCEDF9'},
    {Icon: PregnancyIcon, header: 'Pregnancy Healthcare', desc: 'Check your schedule today', iconColor: '#F2E3E9'},
]


const SelectHealthcare = ({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) => {
  const dispatch = useDispatch<Dispatch>()
  const chooseHealthcare = (healthcare: THealthcare) => {
    dispatch(setHealthcareType(healthcare));
    setStep(2) 
  }
  return (
    <View style={{paddingBottom: 60}}>
        {healthcareCards.map(({Icon, header, desc, iconColor}, i) => {
            return(
                <View style={styles.healthcareTypes} key={i}>
                  <TouchableOpacity onPress={()=>chooseHealthcare(header)} style={styles.healthcareTypesCard}>
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
  )
}

export default SelectHealthcare