import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HorizontalArrow = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 ${props.width || 24} ${props.height || 24}`}
    fill="none"
    {...props}
  >
    <Path
     d="M7.75 9.75L12 14.25L16.25 9.75" 
     stroke={props.color} 
     stroke-width="1.5" 
     stroke-linecap="round" 
     stroke-linejoin="round"
    />
  </Svg>
);

export default HorizontalArrow;

