import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../components/CommunHeader';
import BodyHealth from '../../icons/healthIcons/BodyHealth';
import GluscoseIcon from '../../icons/healthIcons/GluscoseIcon';
import NutritionIcon from '../../icons/healthIcons/NutritionIcon';
import styles from '../../styles/MarketPlaceStyles';
import { colors } from '../../variables/colors';
import Goals from './components/Goals';
import Insights from './components/Insights';
import MenuOption, { OptionProps } from './components/MenuOption';
import MetabolicHealthScore, {
  TMetabolicScore,
} from './components/MetabolicHealthScore';
import WeightBox from './components/WeightBox';
import { useDispatch } from 'react-redux';
import { FirebaseService } from '../../services';
import { calcDailyAverage } from '../../utils/cgm.util';
import { useAppSelector } from '../../utils/hooks';

const MetabolicHealth = () => {
  const dispatch = useDispatch();
  const cgm = useAppSelector((state) => state.cgmReducer);

  useEffect(() => {
    FirebaseService.readCGMData(dispatch);
  }, [dispatch]);

  const [selectedScoreType, setScoreType] =
    useState<TMetabolicScore>('Overall Metabolic');
  return (
    <ScrollView contentContainerStyle={[styles.Container]} scrollEnabled>
      <Header />
      <View style={styles.MarketPlacePlace}>
        <MetabolicHealthScore
          selectedScoreType={selectedScoreType}
          setIsSelected={setScoreType}
        />
        <Goals selectedCategory={selectedScoreType} />
        {options.map((item, i) => (
          <MenuOption
            key={i}
            title={item.title}
            icon={item.icon}
            color={item.color}
            path={item.path || null}
          />
        ))}
        <Insights
          measurement={{
            percentage: calcDailyAverage(cgm),
            date: new Date().toDateString(),
            start: cgm.slice(-1)[0]?.date.toDateString(),
            end: new Date(
              cgm.slice(-1)[0]?.date.getTime() + 24 * 3600 * 1000
            ).toDateString(),
          }}
        />
        <WeightBox
          currentWeight={75}
          start={new Date('2022-05-04').toDateString()}
          end={new Date().toDateString()}
          goal={50}
        />
      </View>
    </ScrollView>
  );
};

export default MetabolicHealth;

const options: OptionProps[] = [
  {
    title: 'Health and Good Sleep',
    icon: <GluscoseIcon />,
    color: colors.MedixBotPrimaryColor,
    path: 'HealthAndGoodSleep',
  },
  {
    title: 'Food and Nutrition',
    icon: <NutritionIcon />,
    color: colors.PureGreen,
    path: 'AddFood',
  },
  {
    title: 'Body Health',
    icon: <BodyHealth />,
    color: colors.newPink,
  },
];
