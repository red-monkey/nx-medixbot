import { colors } from 'apps/mobile/src/app/variables/colors'
import React from 'react'
import { View,StyleSheet, Text, Image } from 'react-native'
import { TCategory } from '..'
import Coonsul from '../icons/appointments.svg'

type Props = {
    category: TCategory,
}

const Category = (props: Props) => {
  const bgColor = props.category.color + '7F'
  const Icon = props.category.iconPath;
  return (
    <View style={{width: 73, height: 100, alignItems: 'center'}}>
    <View style={[styles.container,{borderColor: props.category.color, backgroundColor: bgColor}]}>
        <Image source={require('../icons/consultations.svg')} style={{resizeMode: 'stretch',}}/>
        <Icon />
    </View>
    <Text style={{color: colors.Text, fontSize: 12, fontFamily: 'Montserrat-Medium', textAlign: 'center'}}>{props.category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        borderRadius: 10,
        borderWidth: 2
    }
})
export default Category