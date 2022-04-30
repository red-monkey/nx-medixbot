import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import * as Picker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import {useAppSelector} from '../utils/hooks';
import {setPictureModal, setUserPicture} from '../redux/actions/modal';
import {modalStyle} from '../styles/LoginPageStyles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {PicturePickerModalStyle} from '../styles/RegisterStyle';
import {CameraIcon, GalleryIcon} from '../commun/Icons';
import sharedStyles from '../styles/SharedStyles';
import {ImagePickerResponse} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

export function PicturePickerModal() {
  const isOpen = useAppSelector(state => state.modalReducer.isOpen);
  const dispatch = useDispatch<Dispatch>();

  const handleCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        Picker.launchCamera(
          {mediaType: 'photo', includeBase64: true},
          (response: ImagePickerResponse) => {
            if (response) {
              if (!response.didCancel && !response.errorMessage) {
                dispatch(
                  setUserPicture(response.assets ? response.assets[0] : null),
                );
                dispatch(setPictureModal(false));
              }
            }
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleChoosePhoto = () => {
    Picker.launchImageLibrary(
      {mediaType: 'photo', includeBase64: true},
      (response: ImagePickerResponse) => {
        if (response) {
          if (!response.didCancel && !response.errorMessage) {
            dispatch(
              setUserPicture(response.assets ? response.assets[0] : null),
            );
            dispatch(setPictureModal(false));
          }
        }
      },
    );
  };
  return (
    <Modal
      hasBackdrop
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationOutTiming={150}
      backdropOpacity={0.5}
      onBackdropPress={() => dispatch(setPictureModal(false))}
      isVisible={isOpen}>
      <View style={modalStyle.centeredView}>
        <View style={[modalStyle.modalView,{paddingBottom: 10}]}>
          <Text style={PicturePickerModalStyle.modalTitleStyle}>
            Select Image
          </Text>
          <View style={PicturePickerModalStyle.iconsContainer}>
            <View>
              <TouchableOpacity
                style={PicturePickerModalStyle.button}
                onPress={handleChoosePhoto}>
                <GalleryIcon />
              </TouchableOpacity>
              <Text style={PicturePickerModalStyle.buttonText}>Gallery</Text>
            </View>
            <View style={sharedStyles.margin_left_30}>
              <TouchableOpacity
                style={PicturePickerModalStyle.button}
                onPress={handleCamera}>
                <CameraIcon />
              </TouchableOpacity>
              <Text style={PicturePickerModalStyle.buttonText}>Camera</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
