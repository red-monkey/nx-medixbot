
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../../../styles/DashboardStyles'
import { colors } from '../../../variables/colors'
import ScoreOption from './ScoreOption'
import TriangleChart from './TriangleChart'

type Props = {
    setIsSelected: React.Dispatch<React.SetStateAction<TMetabolicScore>> 
    selectedScoreType: TMetabolicScore
}
export const Types: TOption[] = [
    {name: 'Overall Metabolic', color: colors.PureGreen, percentage: 80},
    {name: 'Vitals', color: colors.newYellow, percentage: 40},
    {name: 'Diet', color: colors.newPink, percentage: 65},
    {name: 'Fitness', color: colors.blue, percentage: 50},
]

const MetabolicHealthScore = ({setIsSelected, selectedScoreType}: Props) => {
    return (
        <View style={styles.GreetingBoxContainer}>
            <Text style={{color: colors.newBlack, fontFamily: 'Montserrat-Bold', fontSize: 17, marginBottom: 10}}>Your 3D Metabolic Health Score!</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <View>
                {Types.map((item,i) => (
                <ScoreOption key={i} type={item.name} isSelected={selectedScoreType === item.name} color={item.color} setIsSelected={setIsSelected}    />      
                ))}
            </View>
            <TriangleChart size={15} percentage={Types.find(item => item.name === selectedScoreType).percentage} color={Types.find(item => item.name === selectedScoreType).color} showPercentage/>
            </View>
        </View>
    )
}

export default MetabolicHealthScore

export type TMetabolicScore = 'Overall Metabolic' | 'Vitals' | 'Diet' | 'Fitness'

export type TOption = {
    name: TMetabolicScore,
    color: string,
    percentage: number
}
