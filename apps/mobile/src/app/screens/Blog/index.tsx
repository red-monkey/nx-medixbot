import React, { ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from './SearchBar';
import Section from './Section';
import data from './data.json';
import { IconWrapper } from '../Dashboard/components/Categories';
import DietHealth from '../../../icons/DietHealth.svg';
import MentalHealth from '../../../icons/MentalHealth.svg';
import MedixBoter from '../../../icons/MedixBoter.svg';
import ScreenSkeleton from '../../commun/ScreenSkeleton';

export const Suggestions: React.FC<ReactNode & { speech: string }> = ({
  children,
  speech,
}) => {
  return (
    <View style={styles.suggestions}>
      <View style={styles.medixBoter}>
        <View>
          <MedixBoter />
        </View>
        <Text style={styles.medixBoxSpeech}>{speech}</Text>
      </View>
      {children}
    </View>
  );
};

const Blog = () => {
  return (
    <ScreenSkeleton>
      <SearchBar />
      <Suggestions speech="Medixboter selection for you..">
        <Section
          data={data['General']}
          titleColor="#fff"
          backgroundColor="#41416E"
        />
      </Suggestions>
      <Section
        header={{
          title: 'Metabolic Health',
          color: '#F178B6',
          icon: (
            <IconWrapper backgroundColor="#F178B6">
              <DietHealth />
            </IconWrapper>
          ),
        }}
        data={data['Metabolic Health']}
        titleColor="#41416E"
        backgroundColor="#fff"
      />

      <Section
        header={{
          title: 'Mental Health',
          color: '#5D5FEF',
          icon: (
            <IconWrapper backgroundColor="#5D5FEF">
              <MentalHealth />
            </IconWrapper>
          ),
        }}
        data={data['Mental Health']}
        titleColor="#41416E"
        backgroundColor="#fff"
      />
    </ScreenSkeleton>
  );
};

const styles = StyleSheet.create({
  suggestions: {
    position: 'relative',
  },

  medixBoter: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    top: -40,
  },

  medixBoxSpeech: {
    position: 'relative',
    top: -10,
    color: '#ED1C24',
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
  },
});
export default Blog;
