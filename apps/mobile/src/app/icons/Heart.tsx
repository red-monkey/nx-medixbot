import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HeartIcon = (props: SvgProps) => (
<Svg width="26" height="25" viewBox="0 0 26 25" fill={props.fill || "none"}>
<Path d="M7.56044 1.05869C6.32068 1.0571 5.10592 1.40728 4.05725 2.06856C3.00858 2.72983 2.16904 3.67506 1.63615 4.79444C1.10326 5.91383 0.898897 7.16143 1.04679 8.39234C1.19468 9.62324 1.68877 10.7869 2.47165 11.7482L12.979 24.0825L23.3843 11.8713L23.436 11.8128L23.4877 11.7482C24.0565 11.0629 24.4799 10.269 24.7319 9.41477C24.984 8.56054 25.0594 7.66393 24.9536 6.7796C24.8477 5.89528 24.5629 5.04177 24.1165 4.27111C23.67 3.50045 23.0713 2.8288 22.3568 2.29708C21.6423 1.76537 20.827 1.38475 19.9606 1.17843C19.0942 0.972099 18.1949 0.944391 17.3174 1.09699C16.44 1.24959 15.6028 1.5793 14.8569 2.06602C14.111 2.55274 13.4721 3.18626 12.979 3.92798C12.3797 3.04424 11.573 2.32073 10.6295 1.82067C9.68601 1.3206 8.63441 1.0592 7.56659 1.0593L7.56044 1.05869Z" stroke="#414042" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>)

export default HeartIcon