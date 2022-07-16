import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'


const Camera = (props: SvgProps) => {
  return (
    <Svg width={props.width || 20} height={props.height || 14} viewBox={`0 0 ${props.width || 20} ${props.height || 14}`} fill="none" >
    <Path d="M9 3H7V6H4V8H7V11H9V8H12V6H9V3Z" fill={props.fill || "#4C5DF4"}/>
    <Path d="M16 2C16 0.897 15.103 0 14 0H2C0.897 0 0 0.897 0 2V12C0 13.103 0.897 14 2 14H14C15.103 14 16 13.103 16 12V8.667L20 12V2L16 5.333V2ZM14.001 12H2V2H14V7L14.001 12Z" fill={props.fill || "#4C5DF4"}/>
    </Svg>
    
  )
}

export default Camera