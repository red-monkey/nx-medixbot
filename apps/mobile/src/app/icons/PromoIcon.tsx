import React  from 'react'
import Svg, { Path,SvgProps } from 'react-native-svg'


const PromoIcon = (props: SvgProps) => {
  return (
    <Svg width={props.width || 24} height={props.height || 24} viewBox={`0 0 ${props.width || 24} ${props.height || 24}`} fill="none">
        <Path opacity="0.3" d="M19 9.79L11.21 2H5V8.21L12.79 16L19 9.79ZM7.25 5.5C6.91848 5.5 6.60054 5.3683 6.36612 5.13388C6.1317 4.89946 6 4.58152 6 4.25C6 3.91848 6.1317 3.60054 6.36612 3.36612C6.60054 3.1317 6.91848 3 7.25 3C7.58152 3 7.89946 3.1317 8.13388 3.36612C8.3683 3.60054 8.5 3.91848 8.5 4.25C8.5 4.58152 8.3683 4.89946 8.13388 5.13388C7.89946 5.3683 7.58152 5.5 7.25 5.5Z" fill={props.fill || "#4C5DF4"}/>
        <Path d="M12.79 21L3 11.21V13.21C3 13.74 3.21 14.25 3.59 14.62L11.38 22.41C12.16 23.19 13.43 23.19 14.21 22.41L20.42 16.2C21.2 15.42 21.2 14.15 20.42 13.37L12.79 21Z" fill={props.fill || "#4C5DF4"} />
        <Path d="M11.38 17.41C11.77 17.8 12.28 18 12.79 18C13.3 18 13.81 17.8 14.2 17.41L20.41 11.2C21.19 10.42 21.19 9.15 20.41 8.37L12.62 0.58C12.25 0.21 11.74 0 11.21 0H5C3.9 0 3 0.9 3 2V8.21C3 8.74 3.21 9.25 3.59 9.62L11.38 17.41ZM5 2H11.21L19 9.79L12.79 16L5 8.21V2Z" fill={props.fill || "#4C5DF4" }/>
        <Path d="M7.25 5.5C7.94036 5.5 8.5 4.94036 8.5 4.25C8.5 3.55964 7.94036 3 7.25 3C6.55964 3 6 3.55964 6 4.25C6 4.94036 6.55964 5.5 7.25 5.5Z" fill={props.fill || "#4C5DF4"}/>
    </Svg>
  )
}


export default PromoIcon