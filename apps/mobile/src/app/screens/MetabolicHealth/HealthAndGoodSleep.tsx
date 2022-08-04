import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import Header from '../../components/CommunHeader'
import GluscoseIcon from '../../icons/healthIcons/GluscoseIcon'
import BreathingIcon from '../../icons/metabolichealthicons/BreathingIcon'
import ConfortScoreIcon from '../../icons/metabolichealthicons/ConfortScoreIcon'
import OverallScoreIcon from '../../icons/metabolichealthicons/OverallScoreIcon'
import OxygenIcon from '../../icons/metabolichealthicons/OxygenIcon'
import RestingIcon from '../../icons/metabolichealthicons/RestingIcon'
import SleepingPositionIcon from '../../icons/metabolichealthicons/SleepingPositionIcon'
import SnoringIcon from '../../icons/metabolichealthicons/SnoringIcon'
import TemperatureIcon from '../../icons/metabolichealthicons/TemperatureIcon'
import styles from '../../styles/MarketPlaceStyles'
import HeartRate from '../../icons/metabolichealthicons/HeartRateIcon.svg'
import Chart from './components/Chart'
import FrequencySelectionBar from './components/FrequencySelectionBar'
import HealthMenu, { MetabolicMenuProps } from './components/HealthMenu'
import { glucoseAndBreathingDailyData, glucoseAndBreathingData, glucoseAndBreathingWeeklyData } from './components/data'
import { colors } from '../../variables/colors'


const HealthAndGoodSleep = () => {
    const [frequency,setFrequency] = useState<TFrequency>('Monthly')
    return (
    <ScrollView contentContainerStyle={[styles.Container]} scrollEnabled>
        <Header />
        <View style={styles.MarketPlacePlace}>
            <FrequencySelectionBar inOrder={false} selected={frequency} setSelected={setFrequency} bgColor={'#FCE8E9'} />
            <Chart labels={[{label: 'Glucose level', color: colors.newPink},{label: 'Breathing Rate', color: colors.blue}]} data={frequency === 'Daily' ? glucoseAndBreathingDailyData : frequency === 'Weekly' ? glucoseAndBreathingWeeklyData : glucoseAndBreathingData} frequency={frequency}/>
            {menuOptions.map((item,i) => (
                <HealthMenu key={i} title={item.title} icon={item.icon} measure={item.measure} time={item.time} path={item.path}/>
            ))}
        </View>
    </ScrollView>
  )
}

export default HealthAndGoodSleep

export type TFrequency = 'Daily' | 'Weekly' | 'Monthly'

const menuOptions : MetabolicMenuProps[] = [
    {
        title: 'Glucose level',
        icon: <GluscoseIcon />,
        measure: '80mg/dl',
        time: '1 hour',
        path: 'GlucoseLevel'
    },
    {
        title: 'Breathing rate',
        icon: <BreathingIcon width={36} height={44}/>,
        measure: '400bpm',
        time: '1 hour'
    },
    {
        title: 'Heart-rate Variability',
        icon: <HeartRate />,
        measure: '40 HRV',
        time: '1 hour'
    },
    {
        title: 'Skin Tempaerature',
        icon: <TemperatureIcon />,
        measure: '400kcal',
        time: '2 hours'
    },
    {
        title: 'Snoring Score',
        icon: <SnoringIcon />,
        measure: '40%',
        time: '6 hours'
    },
    {
        title: 'Oxygen Saturation',
        icon: <OxygenIcon width={35} height={48}/>,
        measure: '85 spo2',
        time: '1 hour'
    },
    {
        title: 'Resting Heart Rate',
        icon: <RestingIcon />,
        measure: '120bpm',
        time: '1 hour'
    },
    {
        title: 'Comfort Score',
        icon: <ConfortScoreIcon />,
        measure: '12%',
        time: '1 day'
    },
    {
        title: 'Sleeping position',
        icon: <SleepingPositionIcon />,
        measure: '',
        time: 'Right'
    },
    {
        title: 'Overall Sleep Score',
        icon: <OverallScoreIcon />,
        measure: '80%',
        time: '1 hour'
    },
]
