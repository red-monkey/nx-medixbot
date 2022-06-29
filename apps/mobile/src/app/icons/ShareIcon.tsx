import React from 'react';
import { Svg, Path } from 'react-native-svg';
type IconProps = {
    color?: string;
    size?: number;
};
export const ShareIcon: React.FC<IconProps> = ({
    size = 34,
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 34 34" fill="none" >
            <Path d="M8.5 21.25C10.8472 21.25 12.75 19.3472 12.75 17C12.75 14.6528 10.8472 12.75 8.5 12.75C6.15279 12.75 4.25 14.6528 4.25 17C4.25 19.3472 6.15279 21.25 8.5 21.25Z" stroke="#414042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M25.5 12.75C27.8472 12.75 29.75 10.8472 29.75 8.5C29.75 6.15279 27.8472 4.25 25.5 4.25C23.1528 4.25 21.25 6.15279 21.25 8.5C21.25 10.8472 23.1528 12.75 25.5 12.75Z" stroke="#414042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M25.5 29.75C27.8472 29.75 29.75 27.8472 29.75 25.5C29.75 23.1528 27.8472 21.25 25.5 21.25C23.1528 21.25 21.25 23.1528 21.25 25.5C21.25 27.8472 23.1528 29.75 25.5 29.75Z" stroke="#414042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12.325 15.1583L21.675 10.3417" stroke="#414042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12.325 18.8417L21.675 23.6583" stroke="#414042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>




    );
};