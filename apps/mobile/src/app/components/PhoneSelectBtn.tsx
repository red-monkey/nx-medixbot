import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import loginStyles, {modalStyle} from '../styles/LoginPageStyles';
import {Dispatch} from 'redux';
import {loginMethod} from '../utils/types';
import {setLoginMethod} from '../redux/actions/login';
import {useAppSelector} from '../utils/hooks';
import {ArrowIcon, BlueEnveloppeIcon, PhoneIcon} from '../commun/Icons';
import {Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
const PhoneSelectBtn = () => {
  const communicationMethod = useAppSelector(
    state => state.loginReducer.communicationMethod,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch<Dispatch>();
  const switchLoginMethod = (method: loginMethod) => {
    dispatch(setLoginMethod(method));
    setModalVisible(!modalVisible);
  };

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
      <Modal
        hasBackdrop
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationOutTiming={10}
        backdropOpacity={0.5}
        onBackdropPress={() => setModalVisible(false)}
        isVisible={modalVisible}>
        <View style={modalStyle.centeredView}>
          <View style={modalStyle.modalView}>
            <Text style={modalStyle.modalTitleStyle}>Select method</Text>
            <TouchableOpacity
              style={modalStyle.optionStyle}
              onPress={() => switchLoginMethod('phone')}>
              <Text style={modalStyle.optionTextStyle}>Phone Number</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyle.optionStyle}
              onPress={() => switchLoginMethod('email')}>
              <Text style={modalStyle.optionTextStyle}>E-mail Address</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PhoneSelectBtn;
