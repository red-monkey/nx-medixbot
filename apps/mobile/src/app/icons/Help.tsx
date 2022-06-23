import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const HelpIcon = (props: SvgProps) => (
<Svg width={props.width || 24} height={props.height || 24} viewBox={`0 0 ${props.width || 24} ${props.height || 24}`} fill="none">
<Path d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95044 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z" stroke={props.color || "#4C5DF4"} stroke-width="1.5"/>
<Circle cx="12" cy="15.5" r="1" fill={props.color || "#4C5DF4"}/>
<Path d="M10 10V9.5C10 8.39543 10.8954 7.5 12 7.5V7.5V7.5C13.1046 7.5 14 8.39543 14 9.5V9.62132C14 10.1839 13.7765 10.7235 13.3787 11.1213L12 12.5" stroke={props.color || "#4C5DF4"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>)

export default HelpIcon;
