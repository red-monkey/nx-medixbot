import React from 'react';
import {
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ImageSourcePropType
} from 'react-native';
import styles from '../styles/HomepageStyles';
import {useNavigation} from '@react-navigation/native';
import {IndicatorProps, InfScreenProp} from '../utils/types';
import {GradientRedButton, GreenDotGradient} from '../commun/Gradients';
export default function HomepageScrollView() {
  const navigation = useNavigation<InfScreenProp>();
  interface ScrollCard {
    title: string;
    description: string;
    illustration: any;
  }
  const ScrollElements: ScrollCard[] = [
    {
      title: 'Telemedicine',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen1.png')
    },
    {
      title: 'Medical Devices At-home Checkup',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen2.png')
    },
    {
      title: 'Medical Devices Continuous Glucose Monitoring (CGM)',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen3.png')
    },
    {
      title: 'Medical Devices WatchIt Smartly ',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen4.png')
    },
  ];
  const {width} = Dimensions.get('screen');
  const DOT_SPACE = 12;
  const scrollX = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const ref = React.useRef<FlatList<ScrollCard>>(null);
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
      style={styles.ScrollView}
      ref={ref}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      renderItem={({item, index}) => {
        return (
      <View style={styles.homepageContainer}>
        <View style={styles.IllustrationContainer}>
          <Image
            source={item.illustration}
            style={styles.Illustration}
          />
        </View>
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
              <Text style={styles.NextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
          </View>
        );
      }}
      
    />
  );
}
