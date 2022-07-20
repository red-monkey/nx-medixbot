import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity,Text, View } from 'react-native'

export type OptionProps = {
    title: string,
    color: string,
    icon: any,
    path?: string
}

const AppointmentType = (props: OptionProps) => {
    const navigation = useNavigation<any>()
    const goToBooking = ()=>navigation.navigate(props.path) 
  return (
    <TouchableOpacity style={optionStyles.container} onPress={props.path ? goToBooking : null}>
        <Text style={optionStyles.title}>{props.title}</Text>
        <View style={[optionStyles.iconContainer,{backgroundColor: props.color}]}>
             {props.icon}
        </View>
    </TouchableOpacity>
  )
}

export default AppointmentType

const optionStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        elevation: 4,
        width: '48%',
        height: 50,
        borderRadius: 16,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'space-between'
    },
    title: {
        color: '#000',
        marginRight: 5,
        fontFamily: 'Montserrat-Bold',
        fontSize: 12
    },
    iconContainer: {
        borderRadius: 25,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        width: 35
    }
})