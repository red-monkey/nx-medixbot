import React, { useCallback, useEffect, useState } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import registerStyles from '../../styles/RegisterStyle';
import sharedStyles from '../../styles/SharedStyles';
import { UserIcon } from '../../commun/Icons';
import * as Picker from 'react-native-image-picker';
import { ImagePickerResponse } from 'react-native-image-picker';
import Item from './components/Item';
import { ReactNativeFile } from 'apollo-upload-client';
import * as mime from 'react-native-mime-types';
import axios from 'axios';

/**
 * @author Djibril
 * This page is only for the demo and must be refactor
 * by the frontend team later
 */

const FoodRecognition = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({} as any);
  const picker = async () => {
    Picker.launchCamera(
      { mediaType: 'photo', includeBase64: true },
      async (response: ImagePickerResponse) => {
        if (response) {
          if (
            !response.didCancel &&
            !response.errorMessage &&
            response.assets
          ) {
            setLoading(true);
            axios
              .post(
                'http://medixbot-food-classifier.herokuapp.com/api/predict',
                {
                  base64_image: `data:${mime.lookup(
                    response.assets[0].uri
                  )};base64,${response.assets[0].base64}`,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  },
                }
              )
              .then((res) => {
                setData(res.data);
                setLoading(false);
              })
              .catch((err) => {
                setLoading(false);
                alert(JSON.stringify(err));
              });
          }
        }
      }
    );
  };

  const takePicture = async () => {
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
  };

  if (loading) return <Text>Loading ...</Text>;

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <TouchableOpacity
        style={[
          registerStyles.formSelectInputStyle,
          sharedStyles.dashedBorder,
          { backgroundColor: '#fff' },
        ]}
        onPress={takePicture}
      >
        <UserIcon />
        <Text style={registerStyles.formInputStyle}>Upload Profile Image</Text>
      </TouchableOpacity>

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
          value={data?.food_name || ''}
          color="#F5007E"
        />
        <Item
          category="Accuracy"
          value={data?.accuracy || '0%'}
          color="#F5007E"
        />
        <Item category="Carb" value={data?.carb || '0%'} color="#F5007E" />
        <Item category="Fat" value={data?.fat || '0%'} color="#F5007E" />
        <Item
          category="Protein"
          value={data?.protein || '0%'}
          color="#F5007E"
        />
        <Item
          category="Reference"
          value={data?.referece_weight || ''}
          color="#F5007E"
        />
      </View>
    </View>
  );
};

export default FoodRecognition;
