import React from 'react';
import {
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../styles/HomepageStyles';
import {useNavigation} from '@react-navigation/native';
import {IndicatorProps, InfScreenProp} from '../utils/types';
import {GradientRedButton, GreenDotGradient} from '../commun/Gradients';

export default function HomepageScrollView() {
  const navigation = useNavigation<InfScreenProp>();
  interface ScrollCard {
    title: string;
    description: String;
  }
  const ScrollElements: ScrollCard[] = [
    {
      title: 'Telemedicine',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
    },
    {
      title: 'Medical Devices At-home Checkup',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
    },
    {
      title: 'Medical Devices Continuous Glucose Monitoring (CGM)',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
    },
    {
      title: 'Medical Devices WatchIt Smartly ',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
    },
  ];
  const {width} = Dimensions.get('screen');
  const DOT_SPACE = 12;
  const scrollX = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const ref = React.useRef<FlatList<ScrollCard | any>>(null);
  const Indicator = ({scrollx}: IndicatorProps) => {
    const inputRange = [-width, 0, width];
    const translateX = scrollx.interpolate({
      inputRange,
      outputRange: [-DOT_SPACE, -1, DOT_SPACE],
    });
    return (
      <View style={styles.dotContainer}>
        <Animated.View
          style={[
            styles.dotIndicator,
            {position: 'absolute', left: 0, transform: [{translateX}]},
          ]}>
          <GreenDotGradient />
        </Animated.View>
        {ScrollElements.map((_, i) => {
          return <View key={i} style={styles.dot} />;
        })}
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={ScrollElements}
      keyExtractor={item => item.title}
      pagingEnabled
      bounces={false}
      scrollEventThrottle={32}
      ref={ref}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      renderItem={({item, index}) => {
        return (
          <View style={styles.ScrollViewElement}>
            <Text style={styles.FlatListTitle}>{item.title}</Text>
            <Text style={styles.FlatListDesc}>{item.description}</Text>
            <TouchableOpacity
              style={styles.ReadMoreButton}
              onPress={() => {
                navigation.navigate('Information', {title: item.title});
              }}>
              <Text style={styles.ReadMoreButtonText}>Read More</Text>
            </TouchableOpacity>
            <Indicator scrollx={scrollX} />
            <TouchableOpacity
              onPress={() => {
                index === ScrollElements.length - 1
                  ? navigation.navigate('Login')
                  : ref?.current?.scrollToOffset({
                      offset: (index + 1) * width,
                      animated: true,
                    });
              }}
              style={styles.FlatListNextButton}>
              <GradientRedButton text={'Next'} />
            </TouchableOpacity>
          </View>
        );
      }}
      style={styles.ScrollView}
    />
  );
}
