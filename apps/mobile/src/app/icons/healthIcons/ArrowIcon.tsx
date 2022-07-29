import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'


const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg width={props.width || 20} height={props.height || 15} viewBox={`0 0 ${props.width || 20} ${props.height || 15}`} fill="none">
        <Path d="M12.5013 0.020874L19.0117 6.53129V8.35421L12.5013 14.8646L10.6523 13.0417L14.9232 8.74483H0.417969V6.14067H14.9232L10.6263 1.84379L12.5013 0.020874Z" fill={props.color || "#414042"}/>
    </Svg>
  )
}

export default ArrowIcon


