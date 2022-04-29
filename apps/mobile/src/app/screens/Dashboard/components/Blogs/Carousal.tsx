import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import data from './carousal.json';
import CarousalItem from './CarousalItem';

const { width, height } = Dimensions.get('window');

const Carousal = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleScroll = (nativeEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== activeItem) setActiveItem(slide);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => {
            handleScroll(nativeEvent);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          horizontal
          style={styles.wrap}
        >
          {data.map((item, index) => {
            return (
              <CarousalItem
                key={'key' + index}
                url={item.url}
                title={item.title}
                timestamp={item.timestamp}
              />
            );
          })}
        </ScrollView>
        <View style={styles.wrapDot}>
          {data.map((_, index) => {
            return (
              <Text
                key={'key' + index}
                style={activeItem === index ? styles.activeDot : styles.dot}
              >
                ●
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrap: {
    width: width * 0.8,
    height: height * 0.25,
  },

  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  activeDot: {
    margin: 3,
    color: '#4C5DF4',
  },
  dot: {
    margin: 3,
    color: '#D9D9D9',
  },
});

export default Carousal;
