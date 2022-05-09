import React, { useCallback, useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import {
  StyleSheet,
  PermissionsAndroid,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import registerStyles from '../../styles/RegisterStyle';
import sharedStyles from '../../styles/SharedStyles';
import { UserIcon } from '../../commun/Icons';
import * as Picker from 'react-native-image-picker';
import { ImagePickerResponse } from 'react-native-image-picker';
import Item from './components/Item';
import * as mime from 'react-native-mime-types';
import axios from 'axios';

/**
 * @author Djibril
 * This page is only for the demo and must be refactor
 * by the frontend team later
 */

const FoodRecognition = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [img, setImg] = useState<any>();
  const forceUpdate = useForceUpdate();
  const picker = useCallback(async () => {
    Picker.launchCamera(
      { mediaType: 'photo', includeBase64: true },
      (response: ImagePickerResponse) => {
        if (response) {
          if (
            !response.didCancel &&
            !response.errorMessage &&
            response.assets
          ) {
            setLoading(true);
            setImg(response.assets[0]);
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
                setData(res.data.result ? res.data.result : res.data);
                setLoading(false);
                forceUpdate();
              })
              .catch((err) => {
                setLoading(false);
                alert(JSON.stringify(err));
                forceUpdate();
              });
          }
        }
      }
    );
  }, []);

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
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading ...</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      {!data && (
        <TouchableOpacity
          style={[
            registerStyles.formSelectInputStyle,
            sharedStyles.dashedBorder,
            styles.uploadButton,
          ]}
          onPress={takePicture}
        >
          <UserIcon />
          <Text style={registerStyles.formInputStyle}>
            Upload Profile Image
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img} />
      </View>
      {data && (
        <View>
          <Item category="accuracy" value={data?.accuracy} color="#2a2a2a" />
          <Item category="food" value={data?.food_name} color="#2a2a2a" />
          <Item category="protein" value={data?.protein} color="#2a2a2a" />
          <Item category="carb" value={data['carb ']} color="#2a2a2a" />
          <Item category="fat" value={data?.fat} color="#2a2a2a" />
          <Item
            category="reference weight"
            value={data?.refence_weight}
            color="#2a2a2a"
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },

  uploadButton: {
    marginBottom: 15,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },

  textContainer: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  text: {
    textTransform: 'capitalize',
    marginLeft: 40,
  },
});

export default FoodRecognition;
