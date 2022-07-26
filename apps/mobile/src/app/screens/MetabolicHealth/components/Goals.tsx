import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import ArrowIcon from '../../../icons/healthIcons/ArrowIcon'
import { colors } from '../../../variables/colors'
import GoalTable from './GoalTable'
import { TMetabolicScore } from './MetabolicHealthScore'


const Goals = ({selectedCategory}: {selectedCategory: TMetabolicScore}) => {
  return (
    <View style={goalsStyles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '85%'}}>
            <View>
                <Text style={goalsStyles.title}>Your Goals</Text>
                <Text style={goalsStyles.desc}>Last five days </Text>
            </View>
            <TouchableOpacity style={goalsStyles.buttonStyle}>
                <ArrowIcon />
            </TouchableOpacity>
        </View>
        <GoalTable goal={goals.find(item => item.category === selectedCategory)} />
    </View>
)}

export default Goals

const goalsStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.newPink+'4D',
        minHeight: 100,
        marginTop: 40,
        borderRadius: 8,
        padding: 18
    },
    title: {
        color: colors.newBlack,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18
    },
    desc: {
        color: colors.newBlack,
        fontFamily: 'Lora-Medium',
        marginTop: 5
    },
    buttonStyle: {
        backgroundColor: colors.newPink,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})

export type TGoal = {
    category: TMetabolicScore,
    goals: TDailyGoal[]
}

type TDailyGoal = {
    day: number,
    percentage: number, 
    achieved: boolean  
}
const goals: TGoal[] = [
    {
        category: 'Overall Metabolic',
        goals: [
            {
                day: 1,
                percentage: 66,
                achieved: false
            },
            {
                day: 2,
                percentage: 25,
                achieved: false
            },
            {
                day: 3,
                percentage: 45,
                achieved: false
            },
            {
                day: 4,
                percentage: 60,
                achieved: true
            },
            {
                day: 5,
                percentage: 5,
                achieved: false
            },
            {
                day: 6,
                percentage: 15,
                achieved: false
            },
            {
                day: 7,
                percentage: 77,
                achieved: true
            },
        ]
    },
    {
        category: 'Vitals',
        goals: [
            {
                day: 1,
                percentage: 52,
                achieved: true
            },
            {
                day: 2,
                percentage: 12,
                achieved: false
            },
            {
                day: 3,
                percentage: 22,
                achieved: false
            },
            {
                day: 4,
                percentage: 51,
                achieved: true
            },
            {
                day: 5,
                percentage: 9,
                achieved: false
            },
            {
                day: 6,
                percentage: 60,
                achieved: true
            },
            {
                day: 7,
                percentage: 16,
                achieved: false
            },
        ]
    },
    {
        category: 'Diet',
        goals: [
            {
                day: 1,
                percentage: 52,
                achieved: true
            },
            {
                day: 2,
                percentage: 49,
                achieved: false
            },
            {
                day: 3,
                percentage: 87,
                achieved: true
            },
            {
                day: 4,
                percentage: 10,
                achieved: true
            },
            {
                day: 5,
                percentage: 90,
                achieved: true
            },
            {
                day: 6,
                percentage: 40,
                achieved: false
            },
            {
                day: 7,
                percentage: 72,
                achieved: true
            },
        ]
    },
    {
        category: 'Fitness',
        goals: [
            {
                day: 1,
                percentage: 52,
                achieved: true
            },
            {
                day: 2,
                percentage: 31,
                achieved: false
            },
            {
                day: 3,
                percentage: 63,
                achieved: true
            },
            {
                day: 4,
                percentage: 18,
                achieved: false
            },
            {
                day: 5,
                percentage: 15,
                achieved: false
            },
            {
                day: 6,
                percentage: 100,
                achieved: true
            },
            {
                day: 7,
                percentage: 14,
                achieved: true
            },
        ]
    },
]