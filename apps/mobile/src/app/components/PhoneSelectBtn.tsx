import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import loginStyles, {modalStyle} from '../styles/LoginPageStyles';
import {Dispatch} from 'redux';
import {loginMethod} from '../utils/types';
import {setLoginMethod} from '../redux/actions/login';
import {useAppSelector} from '../utils/hooks';
import {ArrowIcon} from '../commun/Icons';
import PhoneIcon from '../icons/PhoneIcon.svg';
import BlueEnveloppeIcon from '../icons/BlueEnveloppeIcon.svg';
import {Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import CustomModal from './CustomModal';
const PhoneSelectBtn = () => {
  const communicationMethod = useAppSelector(
    state => state.loginMethodReducer.communicationMethod,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch<Dispatch>();
  const switchLoginMethod = (method: loginMethod) => {
    dispatch(setLoginMethod(method));
    setModalVisible(!modalVisible);
  };
  const content = <><Text style={modalStyle.modalTitleStyle}>Select Account Type</Text>
  <TouchableOpacity
    style={modalStyle.optionStyle}
    onPress={() => switchLoginMethod('phone')}>
    <Text style={modalStyle.optionTextStyle}>Phone Number</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={modalStyle.optionStyle}
    onPress={() => switchLoginMethod('email')}>
    <Text style={modalStyle.optionTextStyle}>E-mail</Text>
  </TouchableOpacity></>
  return (
    <View>
      <View style={loginStyles.selectBtn}>
        {communicationMethod === 'phone' ? (
          <PhoneIcon />
        ) : (
          <BlueEnveloppeIcon />
        )}
        <Text style={loginStyles.selectBtnText}>
          {communicationMethod === 'phone' ? 'Phone Number' : 'Email'}
        </Text>
        <TouchableOpacity
          style={modalStyle.modalButton}
          onPress={() => setModalVisible(true)}>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
      <CustomModal onBackdropPress={() => setModalVisible(false)} content={content} visible={modalVisible}/>
    </View>
  );
};

export default PhoneSelectBtn;
