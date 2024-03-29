import { View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/AppointmentStyles'
import Header from '../Patient/components/Header'

import DottedLine from '../../icons/appointmentIcons/DottedLine.svg'
import AppointmentSteps from './components/AppointmentSteps'
import SelectHealthcare from './components/SelectHealthcare'
import NatureOfHealth from './components/NatureOfHealth'
import SelectDoctor from './components/SelectDoctor'
import PickADate from './components/PickADate'

const BookAppointment = ({route}) => {
  const [currentStep,setCurrentStep] = useState(1)
  const Steps = [
    <SelectHealthcare setStep={setCurrentStep}/>,
    <NatureOfHealth  setStep={setCurrentStep}/>,
    <SelectDoctor  setStep={setCurrentStep}/>,
    <PickADate />
  ]
  useEffect(()=>{
    if(route.params){
      setCurrentStep(route.params.step)
    }
  },[route.params])
  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop: 40, paddingBottom: 0}]} >
        <Header title='Book Appointment'/>
        <View style={styles.screenContentCart}>

          <AppointmentSteps currentStep={currentStep}/>

          <View style={{marginVertical: '10%', paddingHorizontal: '2%'}}>
            <DottedLine />
          </View>
          {
            Steps[currentStep - 1]
          }
        </View>
    </ScrollView>
  )
}

export default BookAppointment;