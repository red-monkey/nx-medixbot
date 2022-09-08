import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import { colors } from '../../../variables/colors';
import moment from 'moment';
import sharedStyles from '../../../styles/SharedStyles';
import { TFrequency } from '../HealthAndGoodSleep';

type Props = {
  data: {
    data: {
      value: number;
      date: Date;
    }[];
    svg: {
      stroke: string;
    };
  }[];
  frequency: TFrequency;
  labels: { label: string; color: string }[];
};

const Chart = (props: Props) => {
  const xAxisHeight = 40;
  const verticalContentInset = { top: 10, bottom: 10 };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 20,
        borderRadius: 17,
        paddingTop: 15,
      }}
    >
      <View
        style={{
          marginLeft: 100,
          backgroundColor: '#fff',
          elevation: 3,
          paddingTop: 10,
          paddingHorizontal: 15,
          borderRadius: 15,
          maxWidth: 150,
        }}
      >
        {props.labels.map((item, i) => (
          <View
            key={i}
            style={[
              sharedStyles.row,
              sharedStyles.alignCenter,
              { paddingBottom: 10 },
            ]}
          >
            <View
              style={{
                height: 15,
                width: 15,
                borderRadius: 15,
                backgroundColor: item.color,
              }}
            />
            <Text
              style={{
                marginLeft: 7,
                color: colors.newBlack,
                fontWeight: '500',
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          height: 220,
          paddingHorizontal: 20,
          width: '95%',
          flexDirection: 'row',
        }}
      >
        <YAxis
          style={{ marginBottom: xAxisHeight }}
          data={props.data[0].data}
          contentInset={verticalContentInset}
          yAccessor={({ item }) => item.value}
          svg={{
            fill: colors.Text,
            fontFamily: 'Lora-Regular',
          }}
          min={1}
          max={8}
          numberOfTicks={8}
          scale={scale.scaleLinear}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={props.data}
            animate={true}
            animationDuration={50}
            contentInset={verticalContentInset}
            yAccessor={({ item }) => item.value}
            xAccessor={({ item }) => item.date}
            svg={{
              stroke: colors.blue,
              strokeWidth: 3,
            }}
            curve={shape.curveNatural}
          ></LineChart>
          <XAxis
            data={props.data[0].data}
            svg={{
              fill: colors.Text,
              fontSize: 10,
              fontWeight: 'bold',
              y: 15,
              fontFamily: 'Lora-Regular',
            }}
            xAccessor={({ item }) => item.date}
            style={{ height: xAxisHeight }}
            contentInset={verticalContentInset}
            scale={scale.scaleBand}
            formatLabel={(value) =>
              moment(value).format(
                props.frequency === 'Monthly'
                  ? 'DD MM YYYY'
                  : props.frequency === 'Daily'
                  ? 'HH mm'
                  : 'WW'
              )
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Chart;

const sampleData = [
  { x: 'Oct 2021', y: 2 },
  { x: 'Nov 2021', y: 8 },
  { x: 'Dec 2021', y: 4 },
  { x: 'Jan 2022', y: 3 },
  { x: 'Feb 2022', y: 6 },
];

const sampleData2 = [
  { x: 'Oct 2021', y: 7 },
  { x: 'Nov 2021', y: 5 },
  { x: 'Dec 2021', y: 2 },
  { x: 'Jan 2022', y: 1 },
  { x: 'Feb 2022', y: 3 },
];

/*const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const line = d3.line(d => d.date, d => d.value)
    .curve(d3.curveCatmullRom.alpha(0.5));
  return (
    <View>
        {/*<VictoryChart domainPadding={{x: 20, y: 30}} theme={VictoryTheme.grayscale} categories={{ x: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jun 2021']}} domain={{y: [0,8]}}>
            <VictoryAxis  style={{ 
                axis: {stroke: "transparent"}, 
                ticks: {stroke: "transparent"},
                tickLabels: { fill: colors.Text, fontFamily: 'Lora-Regular'}             
            }} />
            <VictoryAxis dependentAxis style={{ 
                axis: {stroke: "transparent"}, 
                ticks: {stroke: "transparent"},
                tickLabels: { fill: colors.Text, fontFamily: 'Lora-Regular'}             
            }} />
            <VictoryLine
                interpolation="natural"
                data={sampleData}
                style={{data: { stroke: colors.newPink, strokeWidth: 3 },parent: { color: 'blue'}}}
                
            />
            <VictoryLine
                interpolation="natural"
                data={sampleData2}
                style={{data: { stroke: colors.blue, strokeWidth: 3 },}}
            />
          </VictoryChart>
          <YAxis
                    data={data}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    formatLabel={(value) => `${value}ºC`}
                />}
          <LineChart
                style={{ height: 200 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
                curve={shape.curveNatural}
            >
            </LineChart>         
    </View>

  )*/
