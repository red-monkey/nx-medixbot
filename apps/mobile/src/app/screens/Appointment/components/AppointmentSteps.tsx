import { Text, View } from 'react-native'
import { colors } from '../../../variables/colors'
import styles from '../../../styles/AppointmentStyles'
import NatureOfHealthIcon from '../../icons/appointmentIcons/NatureOfHealthIcon.svg'
import PickDateIcon from '../../icons/appointmentIcons/PickDateIcon.svg'
import React from 'react'
import Step from './Step'
import SelectHealthCareIcon from '../../../icons/appointmentIcons/SelectHealthCareIcon'
import SelectDoctorIcon from '../../../icons/appointmentIcons/SelectDoctorIcon'
// You can change Icons color with fill variable. Example => <SelectDoctorIcon fill={colors.newLightBlue}/>

const steps = [
  {
    title: 'Select Healthcare',
    icon: <SelectHealthCareIcon />,
    iconSelected: <SelectHealthCareIcon fill={'#f5f5f5'}/>
  },
  {
    title: 'Nature of Health',
    icon: <NatureOfHealthIcon />,
    iconSelected: <NatureOfHealthIcon fill={'#f5f5f5'}/>
  },
  {
    title: 'Select a Doctor',
    icon: <SelectDoctorIcon />,
    iconSelected: <SelectDoctorIcon fill={'#f5f5f5'}/>
  },
  {
    title: 'Pick a Date',
    icon : <PickDateIcon />,
    iconSelected: <PickDateIcon fill={'#f5f5f5'}/>
  }
] 
const AppointmentSteps = ({currentStep}: {currentStep: number}) => {
  console.log(currentStep)
  return (
    <View style={{display: "flex", flexDirection: "row", justifyContent: 'space-evenly', paddingTop: 30}}>
            {steps.map((item,key)=>(
              <Step key={key} title={item.title} icon={item.icon} selected={currentStep > key ? true :  false} iconSelected={item.iconSelected}/>
            ))}
    </View>
  )
}

export default AppointmentSteps