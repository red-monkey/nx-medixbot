import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../../styles/AppointmentStyles'
import { colors } from '../../../variables/colors'

type Props = {
    title: string,
    icon: any,
    iconSelected: any,
    selected: boolean,
    no?: number,
    current: number
}

const Step = (props: Props) => {
  return (
    <View style={[{alignItems: 'center'}]}>
        <View  style={{alignItems: 'center', flexDirection: 'row', width: '43%', justifyContent: 'center'}}>
          {props.no === 1 ? <View style={{minWidth: '25%'}} /> :<View style={[styles.line, props.selected ? {backgroundColor: colors.newBlack} : null]} />}
          <View style={[styles.appointmentStatusBox, props.selected ? {backgroundColor: colors.newBlack }: null]}>
              {props.selected ? props.iconSelected : props.icon}</View> 
          {props.no === 4 ?  <View style={{minWidth: '25%'}} />  :<View style={[styles.line, props.current > props.no  ? {backgroundColor: colors.newBlack} : null]} />}
        </View>
        <Text style={[styles.appointmentStatusTxt]}>{props.title}</Text>
    </View>
  )
}

export default Step