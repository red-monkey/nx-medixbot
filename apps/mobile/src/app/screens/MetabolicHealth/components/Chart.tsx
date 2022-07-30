import React from 'react'
import { View } from 'react-native'
import { VictoryLine,VictoryChart,VictoryTheme, VictoryAxis, VictoryLabel } from 'victory-native';
import { colors } from '../../../variables/colors';

type Props = {}

const Chart = (props: Props) => {
  return (
    <View>
        <VictoryChart domainPadding={{x: 20, y: 30}} theme={VictoryTheme.grayscale} categories={{ x: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jun 2021']}} domain={{y: [0,8]}}>
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
    </View>
  )
}

export default Chart

const sampleData = [
    { x: 'Oct 2021', y: 2 },
    { x: 'Nov 2021', y: 8 },
    { x: 'Dec 2021', y: 4 },
    { x: 'Jan 2022', y: 3 },
    { x: 'Feb 2022', y: 6 }
  ]

  const sampleData2 = [
    { x: 'Oct 2021', y: 7 },
    { x: 'Nov 2021', y: 5 },
    { x: 'Dec 2021', y: 2 },
    { x: 'Jan 2022', y: 1 },
    { x: 'Feb 2022', y: 3 }
  ]