import React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg'

const BreathingIcon = (props: SvgProps) => {
  return (
    <Svg width={props.width || 36} height={props.width || 44} viewBox={`0 0 ${props.width || 36} ${props.height || 44}`} fill="none">
    <Path d="M18 42C26.837 42 34 34.836 34 26C34 13 18 2 18 2C18 2 2 13 2 26C2 34.837 9.163 42 18 42Z" stroke="url(#paint0_linear_2156_1683)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M18 18L14 26H22L18 34" stroke="url(#paint1_linear_2156_1683)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <Defs>
    <LinearGradient id="paint0_linear_2156_1683" x1="17.9997" y1="41.8087" x2="17.9997" y2="0.953803" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#EEEEEE"/>
    <Stop offset="1" stopColor="white"/>
    </LinearGradient>
    <LinearGradient id="paint1_linear_2156_1683" x1="17.9999" y1="33.9235" x2="17.9999" y2="17.5815" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#EEEEEE"/>
    <Stop offset="1" stopColor="white"/>
    </LinearGradient>
    </Defs>
    </Svg>
  )
}

export default BreathingIcon


