
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, TouchableHighlight, View , Text} from 'react-native'
import Header from '../../components/CommunHeader'
import BodyHealth from '../../icons/healthIcons/BodyHealth'
import GluscoseIcon from '../../icons/healthIcons/GluscoseIcon'
import NutritionIcon from '../../icons/healthIcons/NutritionIcon'
import styles from '../../styles/MarketPlaceStyles'
import { colors } from '../../variables/colors'
import Goals from './components/Goals'
import Insights from './components/Insights'
import MenuOption, { OptionProps } from './components/MenuOption'
import MetabolicHealthScore, { TMetabolicScore } from './components/MetabolicHealthScore'
import WeightBox from './components/WeightBox'


const MetabolicHealth = () => {
  const [selectedScoreType, setScoreType] = useState<TMetabolicScore>('Overall Metabolic')
  return (
  <ScrollView contentContainerStyle={[styles.Container]} scrollEnabled>
    <Header />
    <View style={styles.MarketPlacePlace}>
        <MetabolicHealthScore selectedScoreType={selectedScoreType} setIsSelected={setScoreType}/>
        <Goals selectedCategory={selectedScoreType}/>
        {options.map((item,i)=>(
        <MenuOption key={i} title={item.title} icon={item.icon} color={item.color} path={item.path || null}/>            
        ))}
        <Insights measurement={{
              percentage: 50,
              date: new Date().toDateString(),
              start: new Date().toISOString(),
              end: new Date().toISOString(),
           }} />
         <WeightBox currentWeight={75} start={new Date('2022-05-04').toDateString()} end={new Date().toDateString()} goal={50} />
    </View>
  </ScrollView>
  )
}

export default MetabolicHealth

const options: OptionProps[] = [
 {
    title: 'Health and Good Sleep',
    icon: <GluscoseIcon />,
    color: colors.MedixBotPrimaryColor
 },
 {
    title: 'Food and Nutrition',
    icon: <NutritionIcon />,
    color: colors.PureGreen,
    path: 'AddFood'
 },
 {
    title: 'Body Health',
    icon: <BodyHealth />,
    color: colors.newPink
 },

]