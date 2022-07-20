import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Dispatch } from 'redux';
import CustomModal from '../../components/CustomModal';
import loginStyles, { modalStyle, resetPass } from '../../styles/LoginPageStyles';
import registerStyles, { LanguageModalStyles, LocationModalStyles } from '../../styles/RegisterStyle';
import { countries } from '../../utils/constants';
import { useAppSelector } from '../../utils/hooks';
import { IAddressData, ProductProps } from '../../utils/types';
import styles from '../../styles/HomepageStyles';
import Header from '../Patient/components/Header';
import { Formik } from 'formik';
import { focusHandler, pressOutHandler } from '../../utils/functions';
import { setShippingAddress } from '../../redux/actions/marketplace';
import { setLocation } from '../../redux/actions/location';
import * as CardStyles from '../../styles/CardStyles'

const SetShipping = ({route}) => {
    const location = useAppSelector(state => state.locationReducer);
    const [selectedCountry, setSelectedCountry] = useState<null|string>(null)
    const [isVisible,setIsVisible] = useState(false);
    const formatAddressString = (params: IAddressData) => {
        dispatch(setLocation({country: params.country, city: params.city, postCode: params.postCode, state: params.state, addressLine1: params.addressLine1, addressLine2: params.addressLine2}))
        const addrStr = (params.addressLine2 ?( params.addressLine2 + ', ') : '' )+
        (params.addressLine1 ?( params.addressLine1 + ', ' ): '')+
        (params.state ?( params.state + ', ') : '') +
        (params.city ? (params.city + ', ') : '')+
        (params.postCode ?  (params.postCode.toString() + ', ') : '')+
        (selectedCountry !== null ? selectedCountry  : ( location.country !== '' ? location.country : ''))
        return(addrStr);
    }
    const navigation = useNavigation<ProductProps>()
    const dispatch = useDispatch<Dispatch>();
    const content = <View style={LocationModalStyles.container}>
    <Text style={modalStyle.modalTitleStyle}>
        Select Country
    </Text>
    <ScrollView style={[LanguageModalStyles.languagesList,{height: 400}]}>
                        {countries.map((element,index) => (
                          <TouchableOpacity key={index} onPress={()=>{
                            setSelectedCountry(element);
                            setIsVisible(false);
                            pressOutHandler(countryRef)
                            }}>
                            <Text style={element === selectedCountry ? LocationModalStyles.highlightedText : {color: "#fff"}}>{element}</Text>
                          </TouchableOpacity>
                        ))}
    </ScrollView>
    </View>
    
    const SelectCountryModal = () => {
        return (
            <CustomModal content={content} visible={isVisible} onBackdropPress={()=> {setIsVisible(false); pressOutHandler(countryRef)}} />
        )
    }

    const countryRef = useRef<View>(null);
    const stateRef = useRef<View>(null);
    const cityRef = useRef<View>(null);
    const postCodeRef = useRef<View>(null);
    const addressLine1 = useRef<View>(null);
    const addressLine2 = useRef<View>(null);

    const selectLocationValidationSchema = yup.object().shape({
        state: yup
          .string(),
        city: yup
          .string(),
        postCode: yup
          .string(),
        addressLine1: yup
          .string(),
        addressLine2: yup
          .string(),
      });


    return (
        <ScrollView contentContainerStyle={[styles.Container]}>
            <Header title='Checkout'/>
            <View style={[resetPass.resetPage,{paddingBottom: 40}]}>
            <View style={loginStyles.topPart}>
            <View style={loginStyles.textGroup}>
                <Text style={[loginStyles.loginPageTitle,{width: 200}]}>Set shipping Address</Text>
                <Text style={[loginStyles.loginPageText,{width: 200}]}>
                    Please Enter the shipping details
                </Text>
            </View>
            </View>
            <SelectCountryModal />
            <View style={loginStyles.formContainer}>
          <Formik
            validationSchema={selectLocationValidationSchema}
            initialValues={{
              state: location?.state ? location.state : '',
              city: location?.city ? location.city : '',
              postCode: location?.postCode ? location.postCode : '',
              addressLine1: location?.addressLine1 ? location.addressLine1 : '',
              addressLine2:  location?.addressLine2 ? location.addressLine2 : '',
            }}
            onSubmit={values => {
                dispatch(setShippingAddress(formatAddressString({
                  addressLine1: values.addressLine1, addressLine2: values.addressLine2, city: values.city, country: selectedCountry, postCode: values.postCode,
                  state: values.state
              })))
            navigation.goBack()
           }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
            }) => (
                <>
                <View style={[registerStyles.formSelectInputStyle, {paddingHorizontal: 3,paddingRight: 15}]} ref={countryRef}>
                  <Text style={registerStyles.formInputStyle}>
                    {selectedCountry === null ? (location.country ? location.country : 'Select Country') : selectedCountry}
                  </Text>
                  <TouchableOpacity onPress={()=>{setIsVisible(true); focusHandler(countryRef)}}>
                    <Text style={registerStyles.selectButton}>Select</Text>
                  </TouchableOpacity>
                </View>
              <View
                  style={LocationModalStyles.formInputContainerStyle}
                  ref={stateRef}>
                  <TextInput
                    onFocus={() => focusHandler(stateRef)}
                    onEndEditing={() => pressOutHandler(stateRef)}
                    keyboardType="default"
                    placeholderTextColor={'#41416E80'}
                    style={registerStyles.formInputStyle}
                    placeholder="State"
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    value={values.state}
                  />
                </View>
                <View
                    style={LocationModalStyles.formInputContainerStyle}
                    ref={cityRef}>
                    <TextInput
                        onFocus={() => focusHandler(cityRef)}
                        onEndEditing={() => pressOutHandler(cityRef)}
                        keyboardType="default"
                        placeholderTextColor={'#41416E80'}
                        style={registerStyles.formInputStyle}
                        placeholder="City"
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                    />
                    </View>
                <View
                    style={LocationModalStyles.formInputContainerStyle}
                    ref={postCodeRef}>
                    <TextInput
                        onFocus={() => focusHandler(postCodeRef)}
                        onEndEditing={() => pressOutHandler(postCodeRef)}
                        keyboardType="numeric"
                        placeholderTextColor={'#41416E80'}
                        style={registerStyles.formInputStyle}
                        placeholder="Post Code"
                        onChangeText={handleChange('postCode')}
                        onBlur={handleBlur('postCode')}
                        value={values.postCode}
                    />
                </View>               
                <View
                    style={LocationModalStyles.formInputContainerStyle}
                    ref={addressLine1}>
                    <TextInput
                        onFocus={() => focusHandler(addressLine1)}
                        onEndEditing={() => pressOutHandler(addressLine1)}
                        keyboardType="default"
                        placeholderTextColor={'#41416E80'}
                        style={registerStyles.formInputStyle}
                        placeholder="Address Line 1"
                        onChangeText={handleChange('addressLine1')}
                        onBlur={handleBlur('addressLine1')}
                        value={values.addressLine1}
                    />
                </View>                 

                <View
                    style={LocationModalStyles.formInputContainerStyle}
                    ref={addressLine2}>
                    <TextInput
                        onFocus={() => focusHandler(addressLine2)}
                        onEndEditing={() => pressOutHandler(addressLine2)}
                        keyboardType="default"
                        placeholderTextColor={'#41416E80'}
                        style={registerStyles.formInputStyle}
                        placeholder="Address Line 2"
                        onChangeText={handleChange('addressLine2')}
                        onBlur={handleBlur('addressLine2')}
                        value={values.addressLine2}
                    />
                </View>                 
                <TouchableOpacity
                  style={[CardStyles.default.payCheckoutButton,{width: '99%'}]}
                  onPress={()=>handleSubmit()}
                  >
                  <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, marginLeft: 5, color: '#fff'}]}>Save</Text>
                </TouchableOpacity>                         
                </> )}
              </Formik>
        </View>
            </View>
        </ScrollView>
    )
}

export default SetShipping