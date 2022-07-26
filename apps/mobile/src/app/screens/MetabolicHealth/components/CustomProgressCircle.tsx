import React from 'react'
import { View } from 'react-native'
import { ProgressCircle } from 'react-native-svg-charts'


type Props = {
    size: number,
    content?: any,
    backgroundColor: string,
    color: string,
    strokeWidth ?: number
}

const CustomProgressCircle = ({size, content, backgroundColor, color, strokeWidth}: Props) => {
  return (
    <View>
        <ProgressCircle strokeWidth={strokeWidth || 5} style={{ height: size, width: size }} progress={0.7} progressColor={color} backgroundColor={backgroundColor} />
        <View style={{position: 'absolute', alignSelf: 'center', justifyContent: 'center', height: size}}>{content}</View>   
    </View> 
  )
}

export default CustomProgressCircle