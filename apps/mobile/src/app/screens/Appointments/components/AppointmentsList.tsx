import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const AppointmentsList = () => {
  const [selectedCategory, setSelectedCategory] = useState<appointmentCat>('Recent')
  return (
    <View style={ListStyles.container}>
        <Text style={ListStyles.title}>Appointment List</Text>
        <Text style={{color: '#2F2E41',fontWeight: '500'}}>8 Appointment made</Text>
        <Text style={{color: '#555555',fontFamily: 'Lora-Regular'}}>Your Health Your Wealth!</Text>
        <View style={ListStyles.categories}>
            {appointmentCategories.map((item,i) => (
                <TouchableOpacity key={i} style={{alignItems: 'center'}} onPress={()=>setSelectedCategory(item.category)}>
                    <Text style={{color: item.color, fontWeight: '700'}}>{item.category}</Text>
                    <Text style={{color: item.color, fontFamily: 'Lora-Regular'}}>{item.appoitments.length}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={ListStyles.appointments}>
            {appointmentCategories.find(item => item.category === selectedCategory).appoitments.map((elem,i)=>(
                <View key={i} style={ListStyles.appointment}>
                    <Text style={ListStyles.appointmentNo}>{i}</Text>
                    <View style={{justifyContent: 'space-between',height: '80%'}}>
                        <Text style={{color: '#000',fontWeight: '500', fontSize: 16}}>{elem.type}</Text>
                        <Text style={{color: '#000',fontFamily: 'Lora-Medium'}}>{elem.description}</Text>
                        <Text style={{color: '#9A9292',fontWeight: '400'}}>{elem.date}</Text>
                    </View>
                </View>
            ))}
        </View>
    </View>
  )
}

export default AppointmentsList

const ListStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F7FE',
        marginTop: -20,
        padding: 15,
        paddingTop: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        color: "#000",
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 25,
        fontSize: 18
    },
    categories: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    appointments: {

    },
    appointment: {
        backgroundColor: '#fff',
        marginBottom: 15,
        height: 95,
        borderRadius: 16,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    appointmentNo : {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#5B67C9',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontFamily: 'Lora-Medium',
        fontSize: 20,
        marginRight: 18
    }
})

const appointmentCategories: TCategory[] = [
    {
        category: 'Recent',
        color: '#EB5757',
        appoitments : [
            {
                type: 'Primary Health',
                description: 'Lorem ipsum  lorem ipsum',
                date: '23/01/2022'
            },
            {
                type: 'Gynecology Healthcare',
                description: 'Lorem ipsum  lorem ipsum',
                date: '02/01/2022'
            },
        ]
    },
    {
        category: 'In progress',
        color: '#E2B93B',
        appoitments : []
    },
    {
        category: 'Completed',
        color: '#01CC5E',
        appoitments : []
    },
]

type appointmentCat = 'In progress' | 'Completed' | 'Recent'

type TAppointment = {
    type: string,
    description: string,
    date: string
}

type TCategory = {
    category: appointmentCat,
    color: string,
    appoitments : TAppointment[]
}