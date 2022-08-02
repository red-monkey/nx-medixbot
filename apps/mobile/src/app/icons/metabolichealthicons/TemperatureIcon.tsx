import React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg'


const TemperatureIcon = (props: SvgProps) => {
  return (
    <Svg width={props.width || 32} height={props.height || 32} viewBox={`0 0 ${props.width || 32} ${props.height || 32}`} fill="none">
    <Path d="M26 13H30V15H26V13ZM23 7.586L25.828 4.758L27.242 6.172L24.414 9L23 7.586ZM23 20.414L24.414 19L27.242 21.828L25.828 23.242L23 20.414ZM17 2H19V6H17V2ZM18 8C17.6648 8.00218 17.3303 8.03229 17 8.09V10.142C17.3259 10.0521 17.662 10.0044 18 10C19.0609 10 20.0783 10.4214 20.8284 11.1716C21.5786 11.9217 22 12.9391 22 14C22 15.0609 21.5786 16.0783 20.8284 16.8284C20.0783 17.5786 19.0609 18 18 18V20C19.5913 20 21.1174 19.3679 22.2426 18.2426C23.3679 17.1174 24 15.5913 24 14C24 12.4087 23.3679 10.8826 22.2426 9.75736C21.1174 8.63214 19.5913 8 18 8ZM10 20.184V7H8.00001V20.184C7.33279 20.4199 6.77045 20.8841 6.41237 21.4945C6.0543 22.1049 5.92354 22.8222 6.04321 23.5197C6.16288 24.2172 6.52528 24.85 7.06635 25.3061C7.60741 25.7622 8.29232 26.0124 9.00001 26.0124C9.70769 26.0124 10.3926 25.7622 10.9337 25.3061C11.4747 24.85 11.8371 24.2172 11.9568 23.5197C12.0765 22.8222 11.9457 22.1049 11.5876 21.4945C11.2296 20.8841 10.6672 20.4199 10 20.184Z" fill="url(#paint0_linear_2156_1686)"/>
    <Path d="M9.00087 30C7.62284 30.0016 6.27508 29.5959 5.12681 28.8341C3.97854 28.0722 3.08096 26.9881 2.54678 25.7178C2.0126 24.4475 1.86564 23.0477 2.12434 21.6942C2.38304 20.3407 3.03588 19.0937 4.00087 18.11V7C4.00087 5.67392 4.52765 4.40215 5.46534 3.46447C6.40302 2.52678 7.67479 2 9.00087 2C10.327 2 11.5987 2.52678 12.5364 3.46447C13.4741 4.40215 14.0009 5.67392 14.0009 7V18.11C14.9659 19.0937 15.6187 20.3407 15.8774 21.6942C16.1361 23.0477 15.9891 24.4475 15.455 25.7178C14.9208 26.9881 14.0232 28.0722 12.8749 28.8341C11.7267 29.5959 10.3789 30.0016 9.00087 30ZM9.00087 4C8.20546 4.00079 7.44286 4.31712 6.88043 4.87956C6.31799 5.44199 6.00166 6.20459 6.00087 7V18.983L5.66887 19.282C4.91375 19.9569 4.38139 20.8452 4.14225 21.8294C3.90311 22.8135 3.96848 23.8471 4.32969 24.7932C4.6909 25.7394 5.33093 26.5536 6.16506 27.128C6.99919 27.7024 7.98809 28.01 9.00087 28.01C10.0136 28.01 11.0025 27.7024 11.8367 27.128C12.6708 26.5536 13.3108 25.7394 13.6721 24.7932C14.0333 23.8471 14.0986 22.8135 13.8595 21.8294C13.6204 20.8452 13.088 19.9569 12.3329 19.282L12.0009 18.983V7C12.0001 6.20459 11.6838 5.44199 11.1213 4.87956C10.5589 4.31712 9.79628 4.00079 9.00087 4Z" fill="url(#paint1_linear_2156_1686)"/>
    <Defs>
    <LinearGradient id="paint0_linear_2156_1686" x1="17.9998" y1="25.8976" x2="17.9998" y2="1.37196" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#EEEEEE"/>
    <Stop offset="1" stopColor="white"/>
    </LinearGradient>
    <LinearGradient id="paint1_linear_2156_1686" x1="9.00076" y1="29.8661" x2="9.00076" y2="1.26766" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#EEEEEE"/>
    <Stop offset="1" stopColor="white"/>
    </LinearGradient>
    </Defs>
    </Svg>
  )
}

export default TemperatureIcon
