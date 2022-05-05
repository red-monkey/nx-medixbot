import React, { useCallback } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header } from './components/Header';
import registerStyles from '../../styles/RegisterStyle';
import sharedStyles from '../../styles/SharedStyles';
import { UserIcon } from '../../commun/Icons';
import * as Picker from 'react-native-image-picker';
import { ImagePickerResponse } from 'react-native-image-picker';
import { gql, useLazyQuery } from '@apollo/client';
import Item from './components/Item';
import { ReactNativeFile } from 'apollo-upload-client';
import * as mime from 'react-native-mime-types';

/**
 * @author Djibril
 * This page is only for the demo and must be refactor
 * by the frontend team later
 */

const SINGLE_UPLOAD = gql`
  query PredictImage($image: Upload!) {
    predictImage(image: $image) {
      accuracy
      foodName
      nutrients {
        protein
        fat
        carb
      }
      referenceWeight
    }
  }
`;

const FoodRecognition = () => {
  const [upload, { loading, error, data }] = useLazyQuery(SINGLE_UPLOAD);

  const picker = useCallback(() => {
    Picker.launchCamera(
      { mediaType: 'photo', includeBase64: true },
      (response: ImagePickerResponse) => {
        if (response) {
          if (
            !response.didCancel &&
            !response.errorMessage &&
            response.assets
          ) {
            const file = new ReactNativeFile({
              uri: response.assets[0].uri,
              type: mime.lookup(response.assets[0].uri),
              name: response.assets[0].fileName,
            });
            upload({
              variables: {
                image: file,
              },
            });
            console.log(response.assets[0]);
          } else {
            console.log(response);
          }
        }
      }
    );
  }, [upload]);

  const takePicture = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission given');
          picker();
        } else {
          console.log('Camera permission denied');
        }
      } else {
        picker();
      }
    } catch (err) {
      console.warn(err);
    }
  }, [picker]);

  if (error) return <Text>Reload the server then the app</Text>;
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <Header />
      {/* <GreetingBox /> */}
      {!loading ? (
        <TouchableOpacity
          style={[
            registerStyles.formSelectInputStyle,
            sharedStyles.dashedBorder,
            { backgroundColor: '#fff' },
          ]}
          onPress={takePicture}
        >
          <UserIcon />
          <Text style={registerStyles.formInputStyle}>
            Upload Profile Image
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>Loading...</Text>
      )}
      {data?.predictImage && (
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          I am{' '}
          <Text style={{ color: '#F5007E' }}>
            {data?.predictImage?.accuracy || '0%'}
          </Text>{' '}
          sure that this is a{' '}
          <Text style={{ color: '#F5007E' }}>
            {data?.predictImage?.foodName || 'food'}
          </Text>
        </Text>
      )}
      <View>
        <Item
          category="Food name"
          value={data?.predictImage.foodName || ''}
          color="#F5007E"
        />
        <Item
          category="Accuracy"
          value={data?.predictImage.foodName || '0%'}
          color="#F5007E"
        />
        <Item
          category="Carb"
          value={data?.predictImage.foodName || '0%'}
          color="#F5007E"
        />
        <Item
          category="Fat"
          value={data?.predictImage.foodName || '0%'}
          color="#F5007E"
        />
        <Item
          category="Protein"
          value={data?.predictImage.foodName || '0%'}
          color="#F5007E"
        />
        <Item
          category="Reference"
          value={data?.predictImage.foodName || ''}
          color="#F5007E"
        />
      </View>
    </View>
  );
};

export default FoodRecognition;
