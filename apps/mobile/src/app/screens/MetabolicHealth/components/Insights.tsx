import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../variables/colors';
import CustomProgressCircle from './CustomProgressCircle';
import sharedStyles from '../../../styles/SharedStyles';

type Props = {
  measurement: TMeasurement;
};

const Insights = ({ measurement }: Props) => {
  const formatISOString = (dateParam: string) => {
    const date = new Date(dateParam);
    const formatted =
      date.getDate().toString() +
      '/' +
      date.getMonth() +
      ' at ' +
      date.toLocaleTimeString().slice(0, 5);
    return formatted;
  };
  return (
    <View style={InsightsStyles.container}>
      <Text style={InsightsStyles.title}>Insights from trends</Text>
      <View style={InsightsStyles.box}>
        <View style={[InsightsStyles.firstRow, sharedStyles.alignCenter]}>
          <View style={[InsightsStyles.firstRow, sharedStyles.alignCenter]}>
            <CustomProgressCircle
              strokeWidth={6}
              color={colors.newPink}
              size={55}
              content={
                <Text style={[InsightsStyles.title, { fontSize: 14 }]}>
                  {measurement.percentage}%
                </Text>
              }
              backgroundColor={colors.newLightBlue}
              progress={measurement.percentage * 0.01}
            />
            <Text style={[InsightsStyles.title, sharedStyles.margin_left_20]}>
              CGM
            </Text>
          </View>
          <Text style={InsightsStyles.secondaryText}>One day ago</Text>
        </View>
        <View style={[InsightsStyles.firstRow, sharedStyles.padding_15]}>
          <Text
            style={[
              InsightsStyles.secondaryText,
              { fontFamily: 'Lora-SemiBold' },
            ]}
          >
            Start
          </Text>
          <Text style={InsightsStyles.secondaryText}>
            {formatISOString(measurement.start)}
          </Text>
        </View>
        <View style={[InsightsStyles.firstRow, sharedStyles.padding_15]}>
          <Text
            style={[
              InsightsStyles.secondaryText,
              { fontFamily: 'Lora-SemiBold' },
            ]}
          >
            End
          </Text>
          <Text style={InsightsStyles.secondaryText}>
            {formatISOString(measurement.end)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Insights;

export const InsightsStyles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    color: colors.newBlack,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  box: {
    backgroundColor: '#fff',
    elevation: 3,
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryText: {
    color: colors.newBlack,
    fontSize: 14,
    fontFamily: 'Lora-Regular',
  },
});

type TMeasurement = {
  percentage: number;
  date: string;
  start: string;
  end: string;
};
