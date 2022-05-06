import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ProfileIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 ${props.width || 24} ${props.height || 24}`}
    fill="none"
    {...props}
  >
    <Path
      d="M8 15.95c0-1.34.97-2.482 2.288-2.693l.119-.019c1.055-.17 2.13-.17 3.186 0l.119.019A2.724 2.724 0 0 1 16 15.951c0 .58-.468 1.049-1.045 1.049h-5.91C8.468 17 8 16.53 8 15.95ZM14.333 9.188c0 1.208-1.044 2.187-2.333 2.187-1.289 0-2.333-.98-2.333-2.188C9.667 7.98 10.71 7 12 7c1.289 0 2.333.98 2.333 2.188Z"
      stroke={props.stroke || '#41416E'}
      strokeWidth={1.5}
    />
    <Path
      d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
      stroke={props.stroke || '#41416E'}
      strokeWidth={1.5}
    />
  </Svg>
);

export default ProfileIcon;
