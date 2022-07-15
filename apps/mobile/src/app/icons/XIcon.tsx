import React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"


const XIcon = (props: SvgProps) =>(<Svg width={props.width || 10} height={props.height || 10} viewBox={`0 0 ${props.width || 10} ${props.height || 10}`} fill="none" >
<Path d="M0.266054 0.266054C0.43646 0.0956997 0.667549 0 0.908503 0C1.14946 0 1.38055 0.0956997 1.55095 0.266054L4.76411 3.47921L7.97726 0.266054C8.14864 0.100528 8.37818 0.0089361 8.61644 0.0110065C8.8547 0.0130769 9.08261 0.108644 9.25109 0.277124C9.41957 0.445603 9.51514 0.673516 9.51721 0.911774C9.51928 1.15003 9.42769 1.37957 9.26216 1.55095L6.04901 4.76411L9.26216 7.97726C9.42769 8.14864 9.51928 8.37818 9.51721 8.61644C9.51514 8.8547 9.41957 9.08261 9.25109 9.25109C9.08261 9.41957 8.8547 9.51514 8.61644 9.51721C8.37818 9.51928 8.14864 9.42769 7.97726 9.26216L4.76411 6.04901L1.55095 9.26216C1.37957 9.42769 1.15003 9.51928 0.911774 9.51721C0.673516 9.51514 0.445603 9.41957 0.277124 9.25109C0.108644 9.08261 0.0130769 8.8547 0.0110065 8.61644C0.0089361 8.37818 0.100528 8.14864 0.266054 7.97726L3.47921 4.76411L0.266054 1.55095C0.0956997 1.38055 0 1.14946 0 0.908503C0 0.667549 0.0956997 0.43646 0.266054 0.266054Z" fill={props.fill || "#4C5DF4"}/>
</Svg>)


export  default XIcon