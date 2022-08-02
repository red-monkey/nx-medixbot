import React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg'


const ConfortScoreIcon = (props: SvgProps) => {
  return (
    <Svg width={props.width || 35} height={props.height || 30} viewBox={`0 0 ${props.width || 40} ${props.height || 30}`} fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M0 6.42857C0 4.72361 0.632141 3.08848 1.75736 1.88289C2.88258 0.677294 4.4087 0 6 0H34C35.5913 0 37.1174 0.677294 38.2426 1.88289C39.3679 3.08848 40 4.72361 40 6.42857V23.5714C40 25.2764 39.3679 26.9115 38.2426 28.1171C37.1174 29.3227 35.5913 30 34 30H6C4.4087 30 2.88258 29.3227 1.75736 28.1171C0.632141 26.9115 0 25.2764 0 23.5714V6.42857ZM6 4.28571H34C34.5304 4.28571 35.0391 4.51148 35.4142 4.91334C35.7893 5.31521 36 5.86025 36 6.42857V12.8571H4V6.42857C4 5.86025 4.21071 5.31521 4.58579 4.91334C4.96086 4.51148 5.46957 4.28571 6 4.28571ZM4 17.1429V23.5714C4 24.1397 4.21071 24.6848 4.58579 25.0867C4.96086 25.4885 5.46957 25.7143 6 25.7143H12V17.1429H4ZM16 25.7143H34C34.5304 25.7143 35.0391 25.4885 35.4142 25.0867C35.7893 24.6848 36 24.1397 36 23.5714V17.1429H16V25.7143Z" fill="url(#paint0_linear_2173_1141)"/>
    <Defs>
    <LinearGradient id="paint0_linear_2173_1141" x1="19.9997" y1="29.8565" x2="19.9997" y2="-0.784647" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#EEEEEE"/>
    <Stop offset="1" stopColor="white"/>
    </LinearGradient>
    </Defs>
    </Svg>
  )
}

export default ConfortScoreIcon
