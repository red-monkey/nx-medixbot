import React from 'react'
import { View } from 'react-native'
import Category from './components/Category'

export type TCategory = {
    name: string,
    iconPath: any,
    color: string
}

const categories: TCategory[] = [

    {
        name: 'Appointments',
        iconPath: '../icons/appointments.svg',
        color: '#FD4634'
    },
    
]
const index = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, width: '100%'}}>
        {categories.map((item,index) => (
            <Category category={item} key={index} />
        ))}
    </View>
  )
}

export default index