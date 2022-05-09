import React, { useState } from 'react';
import {
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from '../styles/HomepageStyles';
import { useNavigation } from '@react-navigation/native';
import { IndicatorProps, InformationProps, LoginProps } from '../utils/types';
import { GradientRedButton, GreenDotGradient } from '../commun/Gradients';
import { boolean } from 'yup';
import Information from '../screens/Homepage/components/Information';
import CloseIcon from '../icons/CloseBtnIcon.svg';
import sharedStyles from '../styles/SharedStyles';

export default function HomepageScrollView() {
  const navigation = useNavigation<LoginProps>();
  const [displayInformation, setDisplayInformation] = useState<boolean>(false);
  const [informationParams, setInformationParams] = useState<InformationProps>({
    title: '',
    description: '',
  });
  interface ScrollCard {
    title: string;
    description: string;
    illustration: any;
    text: string;
  }
  const ScrollElements: ScrollCard[] = [
    {
      title: 'Telemedicine',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen1.png'),
      text: 'Need an urgent doctor?\nOur board-certified doctors are ready 24/7, to consult with you about your health needs. Talk to a doctor from the comfort of your home using your smart phone, tablet or computer.\n\n Doctor visits have never been easier. You can now have a live video consultation with your favorite doctor, therapist or specialist. We are here for you. Start visit',
    },
    {
      title: 'Medical Devices At-home Checkup',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen2.png'),
      text: 'Perform a medical examination in the comfort of your home by yourself or with the help of your doctor. With our 24/7 available board-certified doctors, get a real medical exam, consultation, diagnosis and prescription, from the comfort of your home. Get our portable at-home check-up kit and use it from anywhere in the world and at anytime.\n\nGet an overall health check of your lungs, heart, mouth, skin, throat and temperature.',
    },
    {
      title: 'Medical Devices Continuous Glucose Monitoring (CGM)',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen3.png'),
      text: 'Say goodbye to painful finger pricks. Get our smart, portable wearable CGM sensor for your diabetes management. Forget finger pricking take control of your sugar levels with no effort with our CGM automatic monitoring and control system.\n\n●  No finger pricks\n●  Customizable alarms\n●  Share your glucose data with health \n    personnel and family\n●  Easy diabetes management',
    },
    {
      title: 'Medical Devices WatchIt Smartly ',
      description:
        'Timely, convenient and cost effective delivery of remote and aborad healthcare services',
      illustration: require('../../../../../assets/illustrations/screen4.png'),
      text: 'Get control of your vitals with our smart Watchit device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health.',
    },
  ];
  const { width } = Dimensions.get('screen');
  const DOT_SPACE = 12;
  const scrollX = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const ref = React.useRef<FlatList<ScrollCard>>(null);

  const HomePageHeader = () => {
    return (
      <View style={styles.Header}>
        <View
          style={
            displayInformation === true
              ? styles.HeaderGroupInfo
              : styles.HeaderGroup
          }
        >
          {displayInformation === true ? (
            <TouchableOpacity
              style={{ width: '25%' }}
              onPress={() => setDisplayInformation(false)}
            >
              <CloseIcon />
            </TouchableOpacity>
          ) : null}
          <Image
            style={[styles.HeaderLogo, { width: 155, height: 45 }]}
            source={require('../../assets/images/Logo.png')}
          />
          {displayInformation === false ? (
            <TouchableOpacity>
              <Text
                style={styles.SkipButton}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  };

  const Indicator = ({ scrollx }: IndicatorProps) => {
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
            { position: 'absolute', left: 0, transform: [{ translateX }] },
          ]}
        >
          <GreenDotGradient />
        </Animated.View>
        {ScrollElements.map((_, i) => {
          return <View key={i} style={styles.dot} />;
        })}
      </View>
    );
  };
  return (
    <>
      <HomePageHeader />
      {displayInformation === true ? (
        <Information
          title={informationParams.title}
          description={informationParams.description}
        />
      ) : null}
      <FlatList
        horizontal
        data={ScrollElements}
        keyExtractor={(item) => item.title}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
        style={
          displayInformation === true
            ? [styles.ScrollView, sharedStyles.display_none]
            : styles.ScrollView
        }
        ref={ref}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.homepageContainer}>
              <View style={styles.IllustrationContainer}>
                <Image source={item.illustration} style={styles.Illustration} />
              </View>
              <View style={styles.ScrollViewElement}>
                <Text style={styles.FlatListTitle}>{item.title}</Text>
                <Text style={styles.FlatListDesc}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.ReadMoreButton}
                  onPress={() => {
                    setDisplayInformation(true);
                    setInformationParams({
                      title: item.title,
                      description: item.text,
                    });
                  }}
                >
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
                  style={styles.FlatListNextButton}
                >
                  <Text style={styles.NextButtonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}
