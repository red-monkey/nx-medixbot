import React from 'react';
import { FlatList, StyleSheet, View, Text, StatusBar } from 'react-native';
import SearchBar from './SearchBar';
import Header from '../../components/CommunHeader';
import Section from './Section';
import data from './data.json';
import { IconWrapper } from '../Dashboard/components/Categories';
import DietHealth from '../../../icons/DietHealth.svg';
import MentalHealth from '../../../icons/MentalHealth.svg';
import MedixBoter from '../../../icons/MedixBoter.svg';
import { style } from 'styled-system';

const Blog = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Header />
      <FlatList
        style={styles.bodyContainer}
        data={[null]}
        renderItem={() => {
          return (
            <View>
              <SearchBar />
              <View style={styles.suggestions}>
                <View style={styles.medixBoter}>
                  <View>
                    <MedixBoter />
                  </View>
                  <Text style={styles.medixBoxSpeech}>
                    Medixboter selection for you..
                  </Text>
                </View>
                <Section
                  data={data['General']}
                  titleColor="#fff"
                  backgroundColor="#41416E"
                />
              </View>
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
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F2FC',
    paddingTop: 30,
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    paddingTop: 20,
  },

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
