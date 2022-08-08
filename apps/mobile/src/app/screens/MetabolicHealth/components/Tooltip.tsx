import React from 'react'
import { G, Rect, Text } from 'react-native-svg';
import moment from 'moment';
import { colors } from '../../../variables/colors';

export const Tooltip = ({ x, y, tooltipX, tooltipY, color, index, dataLength,
}) => {
let xAxis = 4;
  if (dataLength > 4) {
    if (index < 2) {
      xAxis = 35;
    } else if (index > dataLength - 2) {
      xAxis = -20;
    } else {
     xAxis = 4;
    }
  }
  //console.log(x(tooltipX));
  
return (
    <G x={x(tooltipX) > 230 ? x(tooltipX) -60 : x(tooltipX) - 40} y={y(tooltipY) > 90 ? y(tooltipY)-81 : y(tooltipY)-13 }>
      <G y={tooltipY > 9 ? 20 : -29} x={xAxis}>
        <Rect x={-2} y={0} height={55} width={70} stroke={'#ccc'} fill="white" ry={10} rx={10} />
        <Text x={14} y={20} stroke={colors.newBlack} fontFamily={'Inter'} fontWeight={'300'}>
            {moment(tooltipX).format('h:mm a')}
        </Text>
        <Text x={8} y={40} stroke={colors.newBlack} fontFamily={'Inter'} fontWeight={'300'}>
            {tooltipY} mg/dl
        </Text>
      </G>
    </G>
  );
};

