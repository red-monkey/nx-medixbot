import React  from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../../variables/colors'
import { TMetabolicScore } from './MetabolicHealthScore'

type Props = {
    type: TMetabolicScore,
    color: string,
    isSelected: boolean, 
    setIsSelected: React.Dispatch<React.SetStateAction<TMetabolicScore>> 
}

const ScoreOption = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.setIsSelected(props.type)} style={optionStyles(props).container}>
        <View style={optionStyles(props).optionCircle}>
            {props.isSelected && <View style={optionStyles(props).selectedCircle}/> }
        </View>

        <Text style={optionStyles(props).text}>{props.type}</Text>
    </TouchableOpacity>
  )
}

export default ScoreOption

const optionStyles = (props: Props) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        color: colors.newBlack,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    optionCircle:{
        backgroundColor: props.color,
        width: 15,
        height: 15,
        borderRadius: 15,
        marginRight: 7,
        borderWidth: 1,
        borderColor: '#fff',
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedCircle: {
        width: 6,
        height: 6,
        backgroundColor: '#fff',
        borderRadius: 6
    }
})