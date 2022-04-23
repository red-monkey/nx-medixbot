import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import CountryPicker, {CallingCode} from 'react-native-country-picker-modal';
import Header from '../../components/CommunHeader';
import PhoneSelectBtn from '../../components/PhoneSelectBtn';
import styles from '../../styles/HomepageStyles';
import loginStyles, {forgotPassword} from '../../styles/LoginPageStyles';
import {
  MailIcon,
} from '../../commun/Icons';
import EmailValidationIcon from '../../icons/EmailValidationIcon.svg';
import EmailValidationTickIcon from '../../icons/EmailValidationTickIcon.svg';
import {CountryCode, ResetPassProps, VerificationForm} from '../../utils/types';
import {useAppSelector} from '../../utils/hooks';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {storeItem} from '../../redux/crud';
import {focusHandler, pressOutHandler} from '../../utils/functions';

const ForgotPasswordPage = () => {
  const verifMethod = useAppSelector(
    state => state.loginReducer.communicationMethod,
  );
  const navigation = useNavigation<ResetPassProps>();
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [countryCallingCode, setCountryCallingCode] =
    useState<CallingCode>('1');
  const numberRef = useRef<View>(null);
  const emailRef = useRef<View>(null);

  const verificationFormValidationSchema = yup.object().shape({
    method: yup.string().default(verifMethod),
    email: yup.string().when('method', {
      is: 'email',
      then: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
      otherwise: yup.string().default(''),
    }),
    phoneNumber: yup.string().when('method', {
      is: 'phone',
      then: yup
        .string()
        .required('Phone Number is Required')
        .min(8, ({min}) => `Phone Number must be at least ${min} characters`)
        .trim(),
      otherwise: yup.string().default(''),
    }),
  });
  const storeToAsyncStorage = (values: VerificationForm) => {
    if (verifMethod === 'phone') {
      storeItem('+' + countryCallingCode + values.phoneNumber, verifMethod);
    } else if (verifMethod === 'email') {
      storeItem(values.email, verifMethod);
    }
  };

  return (
    <View style={styles.Container}>
      <Header />
      <View style={loginStyles.loginPage}>
        <View style={forgotPassword.textGroup}>
          <Text style={loginStyles.loginPageTitle}>Forgot/Reset Password</Text>
          <Text style={loginStyles.loginPageText}>
            Please Select the Way to Receive a Verfication Code{' '}
          </Text>
        </View>
        <View style={forgotPassword.selectButtonContainer}>
          <PhoneSelectBtn />
        </View>
        <View style={loginStyles.formContainer}>
          <Formik
            validationSchema={verificationFormValidationSchema}
            initialValues={{email: '', phoneNumber: ''}}
            onSubmit={values => {
              storeToAsyncStorage(values);
              navigation.navigate('VerificationCode');
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
                {verifMethod === 'email' ? (
                  <View style={loginStyles.formContainerStyle} ref={emailRef}>
                    <MailIcon />
                    <TextInput
                      onFocus={() => focusHandler(emailRef)}
                      onEndEditing={() => {
                        pressOutHandler(emailRef);
                      }}
                      keyboardType="email-address"
                      placeholderTextColor={'#41416E80'}
                      style={loginStyles.formInputStyle}
                      placeholder="Email Address"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {values.email.length > 0 ? (
                      errors.email ? (
                        <EmailValidationIcon />
                      ) : (
                        <EmailValidationTickIcon />
                      )
                    ) : (
                      <EmailValidationIcon />
                    )}
                  </View>
                ) : verifMethod === 'phone' ? (
                  <View style={loginStyles.formContainerStyle} ref={numberRef}>
                    <CountryPicker
                      containerButtonStyle={{width: 33}}
                      countryCode={countryCode}
                      withFlag={true}
                      withCallingCode={true}
                      withCountryNameButton={false}
                      onSelect={country => {
                        setCountryCode(country.cca2);
                        setCountryCallingCode(country.callingCode[0]);
                      }}
                    />
                    <Text style={loginStyles.phoneInputStyle}>
                      +{countryCallingCode}
                    </Text>
                    <TextInput
                      onFocus={() => focusHandler(numberRef)}
                      onEndEditing={() => pressOutHandler(numberRef)}
                      keyboardType="numeric"
                      placeholderTextColor={'#41416E80'}
                      style={loginStyles.formInputStyle}
                      placeholder="Phone Number"
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values.phoneNumber}
                    />
                  </View>
                ) : null}
                {verifMethod === 'email'
                  ? errors.email &&
                    touched.email && (
                      <Text style={loginStyles.errorText}>{errors.email}</Text>
                    )
                  : verifMethod === 'phone'
                  ? errors.phoneNumber &&
                    touched.phoneNumber && (
                      <Text style={loginStyles.errorText}>
                        {errors.phoneNumber}
                      </Text>
                    )
                  : null}
                <View style={forgotPassword.bottomPart}>
                  <TouchableOpacity
                    style={loginStyles.signInButton}
                    onPress={() => handleSubmit()}
                    disabled={!isValid}>
                    <Text style={[
                      loginStyles.forgotPassword,
                      {textAlign: 'center', marginTop: 0,  color: '#fff'},
                    ]}>Send Code</Text>
                  </TouchableOpacity>
                </View>
                <View style={loginStyles.bottomPart}>
                  <Text
                    style={[loginStyles.loginPageText, {textAlign: 'center'}]}>
                    Don’t Have An Account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, marginLeft: 5}]}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordPage;
