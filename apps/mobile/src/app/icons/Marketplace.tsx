import * as React from 'react';
import Svg, { SvgProps, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const MarketPlaceIcon = (props: SvgProps) => (
<Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M2.66694 8.17969H4.00023V14.8464H19.9998V8.17969H21.3331V14.8464H22.9997C23.0881 14.8464 23.1729 14.8815 23.2354 14.944C23.2979 15.0065 23.333 15.0913 23.333 15.1797V15.8464C23.333 15.9348 23.2979 16.0195 23.2354 16.0821C23.1729 16.1446 23.0881 16.1797 22.9997 16.1797H1.00032C0.911913 16.1797 0.827131 16.1446 0.764621 16.0821C0.70211 16.0195 0.666992 15.9348 0.666992 15.8464V15.1797C0.666992 15.0913 0.70211 15.0065 0.764621 14.944C0.827131 14.8815 0.911913 14.8464 1.00032 14.8464H2.66694V8.17969ZM2.66694 18.8464V22.8464H21.3331V18.8464H2.66694ZM2.00029 17.513C1.82348 17.513 1.65392 17.5833 1.5289 17.7083C1.40388 17.8333 1.33364 18.0029 1.33364 18.1797V23.513C1.33364 23.6898 1.40388 23.8594 1.5289 23.9844C1.65392 24.1095 1.82348 24.1797 2.00029 24.1797H21.9997C22.1765 24.1797 22.3461 24.1095 22.4711 23.9844C22.5961 23.8594 22.6664 23.6898 22.6664 23.513V18.1797C22.6664 18.0029 22.5961 17.8333 22.4711 17.7083C22.3461 17.5833 22.1765 17.513 21.9997 17.513H2.00029Z" fill={props.fill || "#41416E"}/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M2.79259 1.51302L1.36263 5.45502C1.34338 5.5078 1.33346 5.56351 1.3333 5.61969V7.21302C1.3333 7.75235 1.76462 8.17969 2.28594 8.17969C2.80592 8.17969 3.23791 7.75302 3.23791 7.21369C3.23791 7.03688 3.30815 6.86731 3.43317 6.74228C3.55819 6.61726 3.72775 6.54702 3.90456 6.54702C4.08136 6.54702 4.25093 6.61726 4.37595 6.74228C4.50097 6.86731 4.57121 7.03688 4.57121 7.21369C4.56961 7.46807 4.66904 7.71268 4.84766 7.8938C5.02627 8.07493 5.26948 8.17775 5.52385 8.17969C6.04383 8.17969 6.47582 7.75302 6.47582 7.21369C6.47582 7.03688 6.54606 6.86731 6.67108 6.74228C6.7961 6.61726 6.96566 6.54702 7.14247 6.54702C7.31927 6.54702 7.48884 6.61726 7.61386 6.74228C7.73888 6.86731 7.80912 7.03688 7.80912 7.21369C7.80752 7.46807 7.90695 7.71268 8.08557 7.8938C8.26418 8.07493 8.50739 8.17775 8.76176 8.17969C9.28174 8.17969 9.71373 7.75302 9.71373 7.21435C9.71373 7.03754 9.78397 6.86797 9.90899 6.74295C10.034 6.61793 10.2036 6.54769 10.3804 6.54769C10.5572 6.54769 10.7267 6.61793 10.8518 6.74295C10.9768 6.86797 11.047 7.03754 11.047 7.21435C11.0477 7.75302 11.4797 8.17969 11.9997 8.17969C12.5197 8.17969 12.9523 7.75302 12.9523 7.21369C12.9523 7.03688 13.0225 6.86731 13.1476 6.74228C13.2726 6.61726 13.4421 6.54702 13.619 6.54702C13.7958 6.54702 13.9653 6.61726 14.0903 6.74228C14.2154 6.86731 14.2856 7.03688 14.2856 7.21369C14.2856 7.75235 14.7169 8.17969 15.2376 8.17969C15.7576 8.17969 16.1896 7.75302 16.1902 7.21435C16.1902 7.03754 16.2605 6.86797 16.3855 6.74295C16.5105 6.61793 16.6801 6.54769 16.8569 6.54769C17.0337 6.54769 17.2032 6.61793 17.3283 6.74295C17.4533 6.86797 17.5235 7.03754 17.5235 7.21435C17.5235 7.75302 17.9555 8.17969 18.4755 8.17969C18.9961 8.17969 19.4281 7.75302 19.4281 7.21369C19.4281 7.03688 19.4984 6.86731 19.6234 6.74228C19.7484 6.61726 19.918 6.54702 20.0948 6.54702C20.2716 6.54702 20.4411 6.61726 20.5662 6.74228C20.6912 6.86731 20.7614 7.03688 20.7614 7.21369C20.7614 7.75235 21.1927 8.17969 21.7134 8.17969C22.2347 8.17969 22.666 7.75302 22.666 7.21369V5.62035C22.6659 5.56396 22.656 5.50801 22.6367 5.45502L21.2067 1.51302H2.79326H2.79259ZM21.1834 1.44902L21.2781 1.41435L21.1834 1.44902ZM20.0948 8.83702C19.8832 9.05152 19.6311 9.22176 19.3531 9.33782C19.0751 9.45388 18.7767 9.51344 18.4755 9.51302C18.1743 9.51339 17.8761 9.4538 17.5982 9.33774C17.3203 9.22168 17.0683 9.05147 16.8569 8.83702C16.6453 9.05155 16.3932 9.22181 16.1152 9.33787C15.8372 9.45393 15.5388 9.51348 15.2376 9.51302C14.9364 9.51339 14.6382 9.4538 14.3603 9.33774C14.0824 9.22168 13.8304 9.05147 13.619 8.83702C13.4074 9.05155 13.1553 9.22181 12.8773 9.33787C12.5993 9.45393 12.3009 9.51348 11.9997 9.51302C11.6984 9.51348 11.4001 9.45393 11.122 9.33787C10.844 9.22181 10.5919 9.05155 10.3804 8.83702C10.1689 9.05147 9.91692 9.22168 9.63902 9.33774C9.36113 9.4538 9.06291 9.51339 8.76176 9.51302C8.12777 9.51302 7.55512 9.25369 7.14247 8.83702C6.93102 9.05147 6.67901 9.22168 6.40111 9.33774C6.12322 9.4538 5.825 9.51339 5.52385 9.51302C5.22258 9.51344 4.92425 9.45388 4.64624 9.33782C4.36823 9.22176 4.11611 9.05152 3.90456 8.83702C3.69319 9.05139 3.44128 9.22156 3.16351 9.33762C2.88574 9.45367 2.58765 9.5133 2.2866 9.51302C1.01797 9.51302 0 8.47835 0 7.21369V5.62035C0 5.40902 0.0366657 5.19902 0.108664 5.00035L1.56196 0.993688C1.64817 0.755214 1.8058 0.549112 2.01336 0.403453C2.22093 0.257794 2.46835 0.179658 2.72192 0.179688H21.2787C21.5322 0.179982 21.7794 0.258342 21.9867 0.404109C22.194 0.549875 22.3514 0.75597 22.4374 0.994354L23.8907 5.00035C23.9633 5.19902 24 5.40902 24 5.62035V7.21369C23.9993 8.47835 22.9814 9.51302 21.7134 9.51302C21.4122 9.51339 21.114 9.4538 20.8361 9.33774C20.5582 9.22168 20.3062 9.05147 20.0948 8.83702Z" fill={props.fill || "#41416E"}/>
    <Path d="M5.33301 13.18C5.33301 13.0916 5.36813 13.0068 5.43064 12.9443C5.49315 12.8818 5.57793 12.8467 5.66633 12.8467H7.66628C7.75468 12.8467 7.83946 12.8818 7.90197 12.9443C7.96448 13.0068 7.9996 13.0916 7.9996 13.18V14.5133C7.9996 14.6018 7.96448 14.6865 7.90197 14.749C7.83946 14.8116 7.75468 14.8467 7.66628 14.8467H5.66633C5.57793 14.8467 5.49315 14.8116 5.43064 14.749C5.36813 14.6865 5.33301 14.6018 5.33301 14.5133V13.18Z" fill={props.fill || "#41416E"}/>
    <Path d="M6.66602 13.8467C6.66602 13.7583 6.70113 13.6735 6.76364 13.611C6.82615 13.5485 6.91094 13.5133 6.99934 13.5133H8.99928C9.08769 13.5133 9.17247 13.5485 9.23498 13.611C9.29749 13.6735 9.33261 13.7583 9.33261 13.8467V14.5133C9.33261 14.6018 9.29749 14.6865 9.23498 14.749C9.17247 14.8116 9.08769 14.8467 8.99928 14.8467H6.99934C6.91094 14.8467 6.82615 14.8116 6.76364 14.749C6.70113 14.6865 6.66602 14.6018 6.66602 14.5133V13.8467ZM11.9992 13.8467C11.9992 14.1119 11.8938 14.3662 11.7063 14.5538C11.5188 14.7413 11.2644 14.8467 10.9992 14.8467C10.734 14.8467 10.4797 14.7413 10.2921 14.5538C10.1046 14.3662 9.99926 14.1119 9.99926 13.8467C9.99926 13.5815 10.1046 13.3271 10.2921 13.1396C10.4797 12.952 10.734 12.8467 10.9992 12.8467C11.2644 12.8467 11.5188 12.952 11.7063 13.1396C11.8938 13.3271 11.9992 13.5815 11.9992 13.8467Z" fill= {props.fill || "#41416E"}/>
</Svg>
)

export default MarketPlaceIcon