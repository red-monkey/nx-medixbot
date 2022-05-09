import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const HealthIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 ${props.width || 24} ${props.height || 24}`}
    fill="none"
    {...props}
  >
    <Path
      d="M2.42 8.72c.691-2.65 2.802-4.676 5.452-5.235l.507-.107a17.537 17.537 0 0 1 7.242 0l.507.107c2.65.559 4.76 2.586 5.451 5.234.561 2.15.561 4.411 0 6.562-.69 2.649-2.8 4.675-5.451 5.234l-.507.107a17.536 17.536 0 0 1-7.242 0l-.507-.107c-2.65-.559-4.76-2.585-5.451-5.234-.561-2.15-.561-4.411 0-6.562Z"
      stroke="url(#a)"
      strokeWidth={1.5}
    />
    <Path
      d="M6 12h2l2 3 4-6 2 3h2"
      stroke="url(#b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        y1={20.914}
        x2={12}
        y2={2.529}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={props.stroke || '#41416E'} />
        <Stop offset={1} stopColor={props.stroke || '#41416E'} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        y1={14.971}
        x2={12}
        y2={8.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={props.stroke || '#41416E'} />
        <Stop offset={1} stopColor={props.stroke || '#41416E'} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default HealthIcon;
