import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../../styles/AppointmentStyles'
import { colors } from '../../../variables/colors'

type Props = {
    title: string,
    icon: any,
    iconSelected: any,
    selected: boolean
}

const Step = (props: Props) => {
  return (
    <View style={{alignItems: 'center'}}>
        <View style={[styles.appointmentStatusBox, props.selected ? {backgroundColor: colors.newBlack }: null]}>
            {props.selected ? props.iconSelected : props.icon}</View> 
        <Text style={[styles.appointmentStatusTxt]}>{props.title}</Text>
    </View>
  )
}

export default Step