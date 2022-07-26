import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../variables/colors'
import { InsightsStyles } from './Insights'
import RightArrowIcon from '../../../icons/RightArrowIcon.svg'
type Props = {
    currentWeight: number,
    start: string,
    end: string,
    goal: number
}

const WeightBox = ({currentWeight,goal,start,end}: Props) => {
  return (
    <TouchableOpacity style={[InsightsStyles.box,{marginTop: 25}]}>
        <View style={InsightsStyles.firstRow}>
            <View>
                <Text style={[InsightsStyles.title,{color: colors.newPink}]}>{currentWeight} Kg</Text>
                <Text style={InsightsStyles.title}>Weight</Text>
            </View>
            <RightArrowIcon />
        </View>
        <View style={[InsightsStyles.firstRow,{justifyContent: 'flex-start'}]}>
            <Text style={InsightsStyles.secondaryText}>{start} - </Text>
            <Text style={InsightsStyles.secondaryText}>{end}</Text>            
        </View>
        <Text style={[InsightsStyles.title, {textAlign: 'right', marginRight: 25, marginTop: 10}]}>Goal {goal}Kg</Text>
    </TouchableOpacity>
  )
}

export default WeightBox