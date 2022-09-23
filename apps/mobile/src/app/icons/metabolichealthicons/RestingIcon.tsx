import React from 'react'
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop, SvgProps } from 'react-native-svg'


const RestingIcon = (props: SvgProps) => {
  return (
    <Svg width={props.width || 35} height={props.height || 40} viewBox={`0 0 40 40`} fill="none">
    <G clipPath="url(#clip0_2173_1142)">
    <Path d="M22.5 12.5C22.5 14.4891 21.7098 16.3968 20.3033 17.8033C18.8968 19.2098 16.9891 20 15 20C13.0109 20 11.1032 19.2098 9.6967 17.8033C8.29018 16.3968 7.5 14.4891 7.5 12.5C7.5 10.5109 8.29018 8.60322 9.6967 7.1967C11.1032 5.79018 13.0109 5 15 5C16.9891 5 18.8968 5.79018 20.3033 7.1967C21.7098 8.60322 22.5 10.5109 22.5 12.5ZM0 32.5C0 35 2.5 35 2.5 35H27.5C27.5 35 30 35 30 32.5C30 30 27.5 22.5 15 22.5C2.5 22.5 0 30 0 32.5ZM33.75 12.275C37.2175 8.7125 45.8875 14.95 33.75 22.9675C21.615 14.95 30.2825 8.7125 33.75 12.2775V12.275Z" fill="url(#paint0_linear_2173_1142)"/>
    </G>
    <Defs>
    <LinearGradient id="paint0_linear_2173_1142" x1="20" y1="34.8565" x2="20" y2="4.21535" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#EEEEEE"/>
    <Stop offset="1" stopColor="white"/>
    </LinearGradient>
    <ClipPath id="clip0_2173_1142">
    <Rect width={props.width || 40} height={props.height || 40}  fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
  )
}

export default RestingIcon


