import moment from 'moment';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Header from '../../components/CommunHeader';
import styles from '../../styles/MarketPlaceStyles';
import { colors } from '../../variables/colors';
import FrequencySelectionBar from './components/FrequencySelectionBar';
import GlucoseChart from './components/GlucoseChart';
import { TFrequency } from './HealthAndGoodSleep';

const GlucoseLevel = () => {
  const [frequency, setFrequency] = useState<TFrequency>('Daily');

  return (
    <ScrollView contentContainerStyle={[styles.Container]} scrollEnabled>
      <Header />
      <View style={styles.MarketPlacePlace}>
        <FrequencySelectionBar
          inOrder={true}
          selected={frequency}
          setSelected={setFrequency}
          bgColor={'#FCE8E9'}
        />
        <Text style={ExtraStyling.title}>Glucose Level</Text>
        <Text style={[ExtraStyling.title, ExtraStyling.date]}>
          {moment(new Date()).format('dddd, MMMM d, yyyy')}
        </Text>
      </View>
    </ScrollView>
  );
};

export default GlucoseLevel;

const ExtraStyling = StyleSheet.create({
  title: {
    color: colors.newBlack,
    marginTop: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  date: {
    fontFamily: 'Lora-Regular',
    fontSize: 14,
    marginTop: 7,
    marginVertical: 10,
  },
});
function useAppSelector(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}
