import { Formik } from "formik"
import React, { useRef, useState } from "react"
import * as yup from 'yup';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"
import Header from "../../components/CommunHeader"
import styles from "../../styles/HomepageStyles"
import loginStyles, { modalStyle, resetPass } from "../../styles/LoginPageStyles"
import registerStyles, { LanguageModalStyles, LocationModalStyles } from "../../styles/RegisterStyle";
import { focusHandler, pressOutHandler } from "../../utils/functions";
import CustomModal from "../../components/CustomModal";
import { countries } from "../../utils/constants";
import { setLocation } from "../../redux/actions/location";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useNavigation } from "@react-navigation/native";
import { ForgotPassProps } from "../../utils/types";
import { useAppSelector } from "../../utils/hooks";



export const SelectLocation = () => {

    const navigation = useNavigation<ForgotPassProps>();
    const [selectedCountry, setSelectedCountry] = useState<null|string>(null)
    const [isVisible,setIsVisible] = useState(false);
    const location = useAppSelector(state => state.locationReducer);
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
                            <Text style={element === selectedCountry ? LocationModalStyles.highlightedText : null}>{element}</Text>
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
        <View style={styles.Container}>
            <Header />
            <View style={resetPass.resetPage}>
            <View style={loginStyles.topPart}>
            <View style={loginStyles.textGroup}>
                <Text style={loginStyles.loginPageTitle}>Select Location</Text>
                <Text style={[loginStyles.loginPageText,{width: 200}]}>
                    Please Enter the location details
                </Text>
            </View>
            </View>
            <SelectCountryModal />
            <View style={loginStyles.formContainer}>
          <Formik
            validationSchema={selectLocationValidationSchema}
            initialValues={{
              state: location.state ? location.state : '',
              city: location.city ? location.city : '',
              postCode: location.postCode ? location.postCode : '',
              addressLine1: location.addressLine1 ? location.addressLine1 : '',
              addressLine2: location.addressLine2 ? location.addressLine2 : '',
            }}
            onSubmit={values => {
              dispatch(setLocation({country: selectedCountry, city: values.city, state: values.state, postCode: values.postCode, addressLine1: values.addressLine1, addressLine2: values.addressLine2}))
              navigation.goBack();
           }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
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
                  style={loginStyles.signInButton}
                  onPress={()=>handleSubmit()}
                  >
                  <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, marginLeft: 5, color: '#fff'}]}>Save</Text>
                </TouchableOpacity>                         
                </> )}
              </Formik>
        </View>
            </View>
        </View>
    )
}

