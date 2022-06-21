import React from 'react'
import { View } from 'react-native'
import Category from './components/Category'

export type TCategory = {
    name: string,
    iconPath: any,
    color: string,
    path?: string
}

const categories: TCategory[] = [

    {
        name: 'Appointments',
        iconPath: require('../icons/appointments.png'),
        color: '#FD4634'
    },
    {
        name: 'Consultations & Visits',
        iconPath: require('../icons/consultations.png'),
        color: '#FD5308'
    },
    {
        name: 'Diagnostics/Treatments',
        iconPath: require('../icons/Diagnostics.png'),
        color: '#FB9902'
    },
    {
        name: 'Patient Monitoring',
        iconPath: require('../icons/Diagnostics.png'),
        color: '#FAE102'
    },
    {
        name: 'Prescriptions',
        iconPath: require('../icons/prescriptions.png'),
        color: '#3D01A4'
    },
    {
        name: 'Lab Tests',
        iconPath: require('../icons/labTests.png'),
        color: '#8601AF'
    },
    {
        name: 'Medical Images',
        iconPath: require('../icons/medicalImages.png'),
        color: '#AB0B88'
    },
    {
        name: 'Medical History Reports & Docs',
        iconPath: require('../icons/medicalHistoryReports.png'),
        color: '#FF27FF',
        path: 'MedicalHistory'
    },
    {
        name: 'Body Health',
        iconPath: require('../icons/medicalHistoryReports.png'),
        color: '#000080'
    },
    {
        name: 'Mental Health',
        iconPath: require('../icons/mentalHealth.png'),
        color: '#3A35EB'
    },
    {
        name: 'Metabolic/Diet Health',
        iconPath: require('../icons/metabolicHealth.png'),
        color: '#0247FE'
    },
    {
        name: 'Fitness Health',
        iconPath: require('../icons/fitnessHealth.png'),
        color: '#1D99F5'
    },   
]
const index = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 0, width: '100%'}}>
        {categories.map((item,index) => (
            <Category category={item} key={index}/>
        ))}
    </View>
  )
}

export default index