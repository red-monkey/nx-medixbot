import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { GradientPersonalizableText } from '../../../commun/Gradients'
import { colors } from '../../../variables/colors'
import { TFrequency } from '../HealthAndGoodSleep'

type Props = {
    inOrder: boolean,
    selected: TFrequency,
    setSelected: React.Dispatch<React.SetStateAction<TFrequency>>,
    bgColor: string,
    textColor?: string
}

const FrequencySelectionBar = (props: Props) => {
  const frequencies : TFrequency[] = ['Daily','Weekly','Monthly']
  !props.inOrder && frequencies.reverse()
  return (
    <View style={barStyles(props).container}>
        {frequencies.map((item,i)=>(
            <TouchableOpacity onPress={()=>props.setSelected(item)} key={i} style={[barStyles(props).item, item === props.selected && {backgroundColor: '#fff'}]}>
                {props.selected === item ? (props.textColor ? <Text style={[barStyles(props).btnText,{color: props.textColor}]}>{item}</Text> :  <GradientPersonalizableText text={item} colors={['#ED1C24','#BE1E2D']} style={barStyles(props).btnText} /> ) : 
                <Text style={barStyles(props).btnText}>{item}</Text>}
            </TouchableOpacity>
        )) }
        <TouchableOpacity></TouchableOpacity>
    </View>
  )
}

export default FrequencySelectionBar

const barStyles = (props: Props) => StyleSheet.create({
    container: {
        height: 35,
        backgroundColor: props.bgColor,
        marginHorizontal: '5%',
        borderRadius: 40,
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item :{       
        width: '33.3%',
        height: '99%',
        alignItems: 'center',
        borderRadius: 40,
        justifyContent: 'center'
    },
    btnText: {
        color: colors.newBlack,
        fontFamily: 'Montserrat-Bold'
    }
})