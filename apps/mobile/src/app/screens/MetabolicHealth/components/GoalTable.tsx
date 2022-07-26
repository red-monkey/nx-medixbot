import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { colors } from '../../../variables/colors'
import { TGoal } from './Goals'
import { Types } from './MetabolicHealthScore'
import TriangleChart from './TriangleChart'

type Props = {
    goal: TGoal
}

const GoalTable = ({goal}: Props) => {
    const getTotalAchieved = () => {
        let total = 0;
        goal.goals.forEach((item) => {
            if(item.achieved)total++ ;
        }) 
        return total       
    }
    const today = new Date().getDay()
  return (
    <View style={CustomStyles.container}>
        <Text style={CustomStyles.text}>{getTotalAchieved()}/7{'\n'}
            <Text style={{fontFamily: 'Lora-SemiBold'}}>Achieved</Text>
        </Text>
        <View style={{flexDirection: 'row'}}>
        {
            goal.goals.map((item,i) => (
                <View key={i} >
                <TriangleChart size={3} color={Types.find(elem => goal.category === elem.name).color} percentage={item.percentage} />
                <Text style={[CustomStyles.dayText,(today === (i+1)) &&  {fontFamily: 'Montserrat-Bold'}]}>{days[i]}</Text>
                </View>))
        }
        </View>


    </View>
  )
}

export default GoalTable

const CustomStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    text: {
        color: colors.newBlack,
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
    },
    dayText: {
        color: colors.newBlack,
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        textAlign: 'center'      
    }
})

const days = [
    'M','T','W','T','F','S','S'
]