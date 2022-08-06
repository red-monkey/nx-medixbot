import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UserIcon = (props: SvgProps) => (
      <Svg
        width={props.width || 24}
        height={props.height || 24}
        viewBox={`0 0 ${props.width || 24} ${props.height || 24}`}
        {...props}
      >
        <Path d="M5 19.1115C5 16.6984 6.69732 14.643 9.00404 14.2627L9.21182 14.2284C11.0589 13.9239 12.9411 13.9239 14.7882 14.2284L14.996 14.2627C17.3027 14.643 19 16.6984 19 19.1115C19 20.1545 18.1815 21 17.1719 21H6.82813C5.81848 21 5 20.1545 5 19.1115Z" stroke="#4C5DF4" strokeWidth="1.5"/>
        <Path d="M16.0832 6.9375C16.0832 9.11212 14.255 10.875 11.9998 10.875C9.74467 10.875 7.9165 9.11212 7.9165 6.9375C7.9165 4.76288 9.74467 3 11.9998 3C14.255 3 16.0832 4.76288 16.0832 6.9375Z" stroke="#4C5DF4" strokeWidth="1.5"/>
      </Svg>
    );

export default UserIcon ;
