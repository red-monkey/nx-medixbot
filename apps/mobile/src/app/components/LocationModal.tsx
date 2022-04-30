import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useAppSelector} from '../utils/hooks';
import {setLocationModal} from '../redux/actions/modal';
import loginStyles, {modalStyle} from '../styles/LoginPageStyles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {LocationModalStyles} from '../styles/RegisterStyle';
import CustomModal from './CustomModal';
import * as styles from '../styles/RegisterStyle';

export function LocationModal() {
  const isOpen = useAppSelector(state => state.locationModalReducer.isOpen);
  const dispatch = useDispatch<Dispatch>();
  const handleSubmit = () => {
    return (null)
  }
  const content = 
   <View style={LocationModalStyles.container}>
    <Text style={modalStyle.modalTitleStyle}>
      Select Location
    </Text>
    <View style={LocationModalStyles.inputContainer}>
      <Text style={LocationModalStyles.inputTextPlaceholder}>Select country</Text>
      <TouchableOpacity>
        <Text style={LocationModalStyles.inputTextButton}>Select</Text>
      </TouchableOpacity>
    </View>
    <View style={LocationModalStyles.inputContainer}>
      <Text style={LocationModalStyles.inputTextPlaceholder}>Select state</Text>
      <TouchableOpacity>
        <Text style={LocationModalStyles.inputTextButton}>Select</Text>
      </TouchableOpacity>
    </View>
    <View style={LocationModalStyles.inputContainer}>
        <TextInput
          style={LocationModalStyles.inputField}
          placeholderTextColor={'#41416E80'}
          placeholder="City"
        />
    </View>
    <View style={LocationModalStyles.inputContainer}>
        <TextInput
          style={LocationModalStyles.inputField}
          placeholderTextColor={'#41416E80'}
          placeholder="Post Code"
        />
    </View>
    <TouchableOpacity
        style={[styles.MembershipModalStyle.submitButton, styles.MembershipModalStyle.extended]}
        onPress={()=>handleSubmit}>
            <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#fff'}]}>Save</Text>
    </TouchableOpacity>
   </View>
  return (
    <CustomModal content={content} visible={isOpen} onBackdropPress={()=> dispatch(setLocationModal(false))} />
  );
}