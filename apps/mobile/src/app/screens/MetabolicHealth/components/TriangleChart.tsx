import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Triangle } from 'react-native-shapes'
import { colors } from '../../../variables/colors'
type Props = {
    percentage: number,
    size: number,
    color: string,
    showPercentage ?: boolean
}

const TriangleChart = (props: Props) => {
  const miniTriangleSize = props.size-props.size*props.percentage/100
  return (
    <View style={styles(props).container}>
        <View style={styles(props).topCircle}/>
        <Triangle size={miniTriangleSize} color={colors.newLightBlue} style={styles(props).smallTriangle}/>
        <Triangle size={props.size} color={props.color}/>
        <Triangle size={props.size*0.7} color={"#fff"} style={styles(props).centerTriangle}/>
        {props.showPercentage && <Text style={styles(props).percentage}>{props.percentage}%</Text>}
    </View>
  )
}

export default TriangleChart

const styles = (props: Props) => StyleSheet.create({
    container: {
        marginTop: 10, 
        width: props.size*10
    },
    centerTriangle : {
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 2,
        marginTop: '20%'
    },
    smallTriangle: {
        position: 'absolute', 
        zIndex: 1,
        left: props.size*10 /2-(props.size-props.size*props.percentage/100)*5
    },
    topCircle: {
        justifyContent: 'center',
        position: 'absolute',
        elevation: 4,
        borderColor: '#fff',
        borderWidth: 1, 
        zIndex: 3,
        height: props.size*2, 
        width: props.size*2,
        borderRadius: props.size*2, 
        backgroundColor: props.color, 
        left: props.size*4, 
        top: -props.size*0.75
    },
    percentage: {
        color: colors.newBlack,
        fontFamily: 'Montserrat-Bold',
        fontSize: props.size*1.8,
        position: 'absolute',
        zIndex: 4,
        alignSelf: 'center',
        marginTop: '58%'
    }
})