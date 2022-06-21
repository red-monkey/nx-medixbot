import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const GlobeIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 18}
    height={props.height || 18}
    viewBox={`0 0  ${props.width || 18} ${props.height || 18}`}
    {...props}
  >
    <Path
      d="M14.1256 6.83421C13.3235 4.54563 11.3332 2.90908 8.93017 2.56459C8.32307 2.47814 7.67825 2.47814 7.0692 2.56459C4.66745 2.90908 2.67716 4.54559 1.87701 6.82897C1.62676 7.52055 1.5 8.25118 1.5 8.99996C1.5 9.74874 1.62674 10.4787 1.87439 11.1651C2.67649 13.4537 4.66678 15.0902 7.06983 15.4347C7.37338 15.4776 7.68605 15.4998 8 15.4998C8.31395 15.4998 8.6266 15.4782 8.9308 15.4347C11.3326 15.0902 13.3228 13.4537 14.123 11.1703C14.3732 10.4787 14.5 9.7481 14.5 8.99932C14.5 8.25055 14.3733 7.52059 14.1256 6.83421ZM13.2 8.99932C13.2 9.44326 13.1441 9.87808 13.0329 10.2999H11.1622C11.2142 9.86833 11.25 9.43481 11.25 8.99932C11.25 8.56384 11.2142 8.13029 11.1622 7.7H13.0336C13.1441 8.11989 13.2 8.55474 13.2 8.99932ZM6.15009 10.2999C6.09094 9.86963 6.05 9.43481 6.05 8.99932C6.05 8.56514 6.09029 8.13159 6.15009 7.7H9.85054C9.90969 8.13029 9.95063 8.56384 9.95063 8.99932C9.95063 9.43416 9.91034 9.86768 9.85054 10.2999H6.15009ZM2.96639 10.2999C2.85589 9.88003 2.8 9.44391 2.8 8.99932C2.8 8.55604 2.85589 8.12119 2.96639 7.7H4.83776C4.78576 8.13094 4.75 8.56449 4.75 8.99932C4.75 9.43546 4.78576 9.86963 4.83776 10.2999H2.96639ZM12.4908 6.40004H10.9237C10.7495 5.66492 10.5006 4.95652 10.1782 4.27729C11.1493 4.72318 11.9539 5.46342 12.4908 6.40004ZM8.45632 3.83138C8.96137 4.63281 9.34225 5.49072 9.58925 6.40004H6.41075C6.65709 5.49332 7.03798 4.63411 7.54368 3.83138C7.69578 3.81839 7.84595 3.79949 8 3.79949C8.1547 3.79949 8.30487 3.81839 8.45632 3.83138ZM5.82184 4.2765C5.49879 4.95703 5.24983 5.66557 5.07563 6.40004H3.50784C4.04474 5.46407 4.85009 4.72304 5.82184 4.2765ZM3.50979 11.5999H5.07631C5.25051 12.3344 5.49944 13.0428 5.82184 13.7214C4.85139 13.2761 4.04734 12.5358 3.50979 11.5999ZM7.54305 14.1673C7.03865 13.3658 6.65775 12.5079 6.41075 11.5999H9.58858C9.34223 12.5066 8.96137 13.3652 8.45632 14.1673C8.15212 14.1926 7.8466 14.1926 7.54305 14.1673ZM10.1788 13.7222C10.5012 13.0423 10.7502 12.3337 10.9244 11.5999H12.4915C11.9546 12.5352 11.1499 13.2763 10.1788 13.7222Z"
      fill={props.fill || "#4C5DF4"}
    />
  </Svg>
);

export default GlobeIcon;

