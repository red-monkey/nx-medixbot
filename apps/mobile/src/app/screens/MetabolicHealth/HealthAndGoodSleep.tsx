import React, { useState } from 'react'
import { View,Text, ScrollView } from 'react-native'
import Header from '../../components/CommunHeader'
import styles from '../../styles/MarketPlaceStyles'
import { colors } from '../../variables/colors'
import Chart from './components/Chart'
import FrequencySelectionBar from './components/FrequencySelectionBar'


const HealthAndGoodSleep = () => {
    const [frequency,setFrequency] = useState<TFrequency>('Monthly')
    return (
    <ScrollView contentContainerStyle={[styles.Container]} scrollEnabled>
        <Header />
        <View style={styles.MarketPlacePlace}>
            <FrequencySelectionBar inOrder={false} selected={frequency} setSelected={setFrequency} bgColor={'#FCE8E9'} />
            <Chart />
        </View>
    </ScrollView>
  )
}

export default HealthAndGoodSleep

export type TFrequency = 'Daily' | 'Weekly' | 'Monthly'