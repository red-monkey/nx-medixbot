import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import CountryPicker, { CallingCode } from 'react-native-country-picker-modal';
import Header from '../../components/CommunHeader';
import PhoneSelectBtn from '../../components/PhoneSelectBtn';
import styles from '../../styles/HomepageStyles';
import loginStyles from '../../styles/LoginPageStyles';
import EmailValidationIcon from '../../icons/EmailValidationIcon.svg';
import EmailValidationTickIcon from '../../icons/EmailValidationTickIcon.svg';
import { GradientTextFaceIdLogin } from '../../commun/Gradients';
import {
  EyeIcon,
  FaceFingerprintIconGroup,
  LockIcon,
  MailIcon,
} from '../../commun/Icons';
import { FacebookButton, GoogleButton } from '../../commun/Buttons';
import { CountryCode, ForgotPassProps } from '../../utils/types';
import { useAppSelector } from '../../utils/hooks';
import { useNavigation } from '@react-navigation/native';
import sharedStyles from '../../styles/SharedStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
import { focusHandler, pressOutHandler } from '../../utils/functions';
import { useLogin } from '../../apollo/GraphQL/Actions/useLogin';

const LoginPage = () => {
  const navigation = useNavigation<ForgotPassProps>();
  const loginMethod = useAppSelector(
    (state) => state.loginMethodReducer.communicationMethod
  );
  const [login] = useLogin();
  const [hidePassword, setHidePassword] = useState(true);
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [countryCallingCode, setCountryCallingCode] =
    useState<CallingCode>('1');
  const numberRef = useRef<View>(null);
  const emailRef = useRef<View>(null);
  const passwordRef = useRef<View>(null);
  const loginValidationSchema = yup.object().shape({
    method: yup.string().default(loginMethod),
    email: yup.string().when('method', {
      is: 'email',
      then: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
      otherwise: yup.string().default(''),
    }),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    phoneNumber: yup.string().when('method', {
      is: 'phone',
      then: yup
        .string()
        .required('Phone Number is Required')
        .min(8, ({ min }) => `Phone Number must be at least ${min} characters`),
      otherwise: yup.string().default(''),
    }),
  });

  return (
    <ScrollView contentContainerStyle={styles.Container} scrollEnabled>
      <Header />
      <View style={loginStyles.loginPage}>
        <View style={loginStyles.topPart}>
          <View style={loginStyles.textGroup}>
            <Text style={loginStyles.loginPageTitle}>Welcome</Text>
            <Text style={loginStyles.loginPageText}>
              Please Select the Way to Sign In
            </Text>
          </View>
          <PhoneSelectBtn />
        </View>
        <View style={loginStyles.formContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '', phoneNumber: '' }}
            onSubmit={(values) => {
              login(
                loginMethod === 'email'
                  ? values.email
                  : countryCallingCode + values.phoneNumber,
                values.password
              );
            }}
          >
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
                {loginMethod === 'email' ? (
                  <View style={loginStyles.formContainerStyle} ref={emailRef}>
                    <MailIcon />
                    <TextInput
                      autoFocus
                      onFocus={() => focusHandler(emailRef)}
                      onEndEditing={() => pressOutHandler(emailRef)}
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
                ) : loginMethod === 'phone' ? (
                  <View style={loginStyles.formContainerStyle} ref={numberRef}>
                    <CountryPicker
                      containerButtonStyle={sharedStyles.width_33}
                      countryCode={countryCode}
                      withFlag={true}
                      withCallingCode={true}
                      withCountryNameButton={false}
                      onSelect={(country) => {
                        setCountryCode(country.cca2);
                        setCountryCallingCode(country.callingCode[0]);
                      }}
                    />
                    <Text style={loginStyles.phoneInputStyle}>
                      +{countryCallingCode}
                    </Text>
                    <TextInput
                      autoFocus
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
                {loginMethod === 'email'
                  ? errors.email &&
                    touched.email && (
                      <Text style={loginStyles.errorText}>{errors.email}</Text>
                    )
                  : loginMethod === 'phone'
                  ? errors.phoneNumber &&
                    touched.phoneNumber && (
                      <Text style={loginStyles.errorText}>
                        {errors.phoneNumber}
                      </Text>
                    )
                  : null}
                <View style={loginStyles.formContainerStyle} ref={passwordRef}>
                  <LockIcon />
                  <TextInput
                    onFocus={() => focusHandler(passwordRef)}
                    onEndEditing={() => pressOutHandler(passwordRef)}
                    secureTextEntry={hidePassword}
                    style={loginStyles.formInputStyle}
                    placeholder="Password"
                    placeholderTextColor={'#41416E80'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setHidePassword(!hidePassword);
                    }}
                  >
                    <EyeIcon />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={loginStyles.errorText}>{errors.password}</Text>
                )}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}
                >
                  <Text style={loginStyles.forgotPassword}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={loginStyles.signInButton}
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                >
                  <Text
                    style={[
                      loginStyles.forgotPassword,
                      { textAlign: 'center', marginTop: 0, color: '#fff' },
                    ]}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <FaceFingerprintIconGroup />
        <GradientTextFaceIdLogin text={'Use Face/Touch ID to Login'} />
        <Text
          style={[
            loginStyles.loginPageText,
            {
              textAlign: 'center',
              marginTop: 25,
              fontFamily: 'Montserrat-Medium',
            },
          ]}
        >
          Or Sign Up / Sign In with
        </Text>
        <View style={loginStyles.socialMediaBtnGroup}>
          <GoogleButton />
          <FacebookButton />
        </View>
        <View style={loginStyles.bottomPart}>
          <Text
            style={[
              loginStyles.loginPageText,
              { textAlign: 'center', fontFamily: 'Montserrat-Medium' },
            ]}
          >
            Don’t Have An Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <Text
              style={[
                loginStyles.forgotPassword,
                { textAlign: 'center', marginTop: 0, marginLeft: 5 },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
