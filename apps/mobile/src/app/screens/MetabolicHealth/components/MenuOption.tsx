import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RightArrowIcon from '../../../icons/RightArrowIcon.svg'
import { colors } from '../../../variables/colors'

export type OptionProps = {
  icon: any,
  title: string,
  color: string,
  path?: string
}

const MenuOption = (props: OptionProps) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#fff', padding: 15,elevation: 4, marginTop: 10, borderRadius: 10,shadowColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 55, height: 55, backgroundColor: props.color, justifyContent: 'center', alignItems: 'center', borderRadius: 40}}>
          {props.icon}
        </View>
        <Text style={{color: colors.newBlack, fontFamily: 'Montserrat-Bold', fontSize: 15, marginLeft: 10}}>{props.title}</Text>
        </View>
        <View style={{paddingTop: 12}}>
          <RightArrowIcon />
        </View>
    </TouchableOpacity>
  )
}

export default MenuOption