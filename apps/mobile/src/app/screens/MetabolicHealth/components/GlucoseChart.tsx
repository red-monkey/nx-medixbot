import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import { colors } from '../../../variables/colors';
import moment from 'moment';
import { GlucoseLevelData } from './data';
import { Circle, G, Line, Rect } from 'react-native-svg';
import { Tooltip } from './Tooltip';
import { ICGM } from '../../../redux/actions/cgm';

type Props = {
  data: ICGM[];
};

const GlucoseChart = ({ data }: Props) => {
  const [tooltip, setTooltip] = useState({
    tooltipX: null,
    tooltipY: null,
    tooltipIndex: null,
  });
  const xAxisHeight = 40;
  const verticalContentInset = { top: 10, bottom: 10 };
  const Decorator = ({ x, y, data }) => {
    return data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={5}
        stroke={'rgb(134, 65, 244)'}
        fill={'white'}
      />
    ));
  };
  const ChartPoints = ({ x, y, color }) => (
    <View>
      {data
        .filter((_, i) => i % 2 === 1)
        .map((item, index) => (
          <Circle
            key={index}
            cx={x(moment(item.date))}
            cy={y(item.value)}
            r={6}
            stroke={color}
            strokeWidth={2}
            fill="white"
            onPress={() =>
              setTooltip({
                tooltipX: moment(item.date),
                tooltipY: item.value,
                tooltipIndex: index,
              })
            }
          />
        ))}
    </View>
  );

  return (
    <View style={{ backgroundColor: '#fff', marginTop: 20, paddingTop: 15 }}>
      <View
        style={{ height: 220, paddingHorizontal: 10, flexDirection: 'row' }}
      >
        <YAxis
          style={{ marginBottom: xAxisHeight }}
          data={data}
          contentInset={verticalContentInset}
          yAccessor={({ item }) => item.value}
          svg={{
            fill: colors.Text,
            fontFamily: 'Lora-Regular',
          }}
          numberOfTicks={5}
          scale={scale.scaleLinear}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            animate={true}
            animationDuration={50}
            contentInset={verticalContentInset}
            yAccessor={({ item }) => item.value}
            xAccessor={({ item }) => item.date}
            svg={{
              stroke: colors.blue,
              strokeWidth: 3,
            }}
            numberOfTicks={5}
          >
            <Grid
              svg={{
                stroke: colors.newLightBlue,
              }}
            />
            <ChartPoints color={colors.blue} />
            <Tooltip
              tooltipX={tooltip.tooltipX}
              tooltipY={tooltip.tooltipY}
              color="#003F5A"
              index={tooltip.tooltipIndex}
              dataLength={data.length}
            />
          </LineChart>
          <XAxis
            data={data.filter((_, i) => i % 3 === 1)}
            svg={{
              fill: colors.Text,
              fontSize: 12,
              fontWeight: 'bold',
              y: 15,
              fontFamily: 'Lora-Regular',
            }}
            xAccessor={({ item }) => item.date}
            style={{ height: xAxisHeight }}
            contentInset={verticalContentInset}
            scale={scale.scaleBand}
            formatLabel={(value) => moment(value).format('h a')}
          />
        </View>
      </View>
    </View>
  );
};

export default GlucoseChart;
