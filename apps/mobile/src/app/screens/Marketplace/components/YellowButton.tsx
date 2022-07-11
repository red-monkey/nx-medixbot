import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type Props = {
    content: any,
    style?: StyleProp<ViewStyle>
}

const YellowButton = (props: Props) => {
  return (
    <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    colors={["#F9ED32", "#fdc73d"]}
    style={[{ borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'},props.style]}
    locations={[0, 0.5]}
  >
    {props.content}
    </LinearGradient>
  )
}

export default YellowButton