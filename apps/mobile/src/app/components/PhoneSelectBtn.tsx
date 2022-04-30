import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import loginStyles, {modalStyle} from '../styles/LoginPageStyles';
import {Dispatch} from 'redux';
import SelectedIcon from '../icons/SelectedIcon.svg'
import UnselectedIcon from '../icons/UnselectedIcon.svg'
import {loginMethod} from '../utils/types';
import {setLoginMethod} from '../redux/actions/login';
import {useAppSelector} from '../utils/hooks';
import {ArrowIcon} from '../commun/Icons';
import PhoneIcon from '../icons/PhoneIcon.svg';
import BlueEnveloppeIcon from '../icons/BlueEnveloppeIcon.svg';
import {Text, View, TouchableOpacity} from 'react-native';
import CustomModal from './CustomModal';
import sharedStyles from '../styles/SharedStyles';
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
  const content = <><Text style={modalStyle.modalTitleStyle}>Select your sign in method</Text>
  <TouchableOpacity
    style={communicationMethod === 'phone' ? modalStyle.optionStyleSelected : modalStyle.optionStyle}
    onPress={() => switchLoginMethod('phone')}> 
   {communicationMethod === 'phone' ? <SelectedIcon /> : <UnselectedIcon /> }
    <Text style={communicationMethod === 'phone' ?[modalStyle.optionTextStyle,modalStyle.selectedText]:modalStyle.optionTextStyle}>Phone Number</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={communicationMethod === 'email' ? modalStyle.optionStyleSelected : modalStyle.optionStyle}    onPress={() => switchLoginMethod('email')}>
   {communicationMethod === 'email' ? <SelectedIcon /> : <UnselectedIcon /> }
    <Text style={communicationMethod === 'email' ?[modalStyle.optionTextStyle,modalStyle.selectedText]:modalStyle.optionTextStyle}>E-mail</Text>
  </TouchableOpacity>
  <View style={sharedStyles.padding_60}/>
  </>
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
