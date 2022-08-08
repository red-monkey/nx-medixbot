import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import CountryPicker, {CallingCode} from 'react-native-country-picker-modal';
import Header from '../../components/CommunHeader';
import registerStyles from '../../styles/RegisterStyle';
import  ArrowIcon from '../../icons/ArrowIcon.svg';
import {
  CalendarIcon,
  EyeIcon,
  GenderIcon,
  GlobalIcon,
  LocationIcon,
  LockIcon,
  MailIcon,
  ThreeUsersIcon,
  UserIcon,
  UsernameIcon,
} from '../../commun/Icons';
import SelectedIcon from '../../icons/SelectedIcon.svg'
import UnselectedIcon from '../../icons/UnselectedIcon.svg'
import EmailValidationIcon from '../../icons/EmailValidationIcon.svg';
import EmailValidationTickIcon from '../../icons/EmailValidationTickIcon.svg';
import {CountryCode, ForgotPassProps, location} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import sharedStyles from '../../styles/SharedStyles';
import {Formik} from 'formik';
import * as yup from 'yup';
import loginStyles, { modalStyle } from '../../styles/LoginPageStyles';
import {focusHandler, pressOutHandler} from '../../utils/functions';
import {PicturePickerModal} from './components/PicturePickerModal';
import {setDateModal, setLanguageModal, setMembershipModal, setPictureModal} from '../../redux/actions/modal';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux'; 
import {useAppSelector} from '../../utils/hooks';
import MembershipModal from './components/MembershipModal';
import CustomModal from '../../components/CustomModal';
import { colors } from '../../variables/colors';
import { LanguageModal } from './components/LanguageModal';
import { EGender, EMembership, EUserRole, IRegisterUser } from '@medixbot/types';
import { useRegister } from '../../apollo/GraphQL/Actions/useRegister';
import {Asset} from 'react-native-image-picker';
import DatePickerModal from './components/DatePickerModal';
const RegisterScreen = () => {
  const [register] = useRegister();
  const [userPicture, setUserPicture] = useState<Asset>(null);
  const navigation = useNavigation<ForgotPassProps>();
  const languages = useAppSelector(state => state.languageModalReducer.selectedLanguages);
  const membership = useAppSelector(state => state.membershipReducer.membership)
  const location = useAppSelector(state => state.locationReducer);
  const birthDate = useAppSelector(state => state.DatePickerModalReducer.date)
  const base64Icon = `data:image/jpg;base64,${userPicture?.base64}`;
  const dispatch = useDispatch<Dispatch>();
  const [hidePassword, setHidePassword] = useState(true);
  const [gender, setGender] = useState<EGender | null>(null);
  const [genderModalIsOpen, setGenderModal] = useState<boolean>(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [countryCallingCode, setCountryCallingCode] =
    useState<CallingCode>('1');
  const nameRef = useRef<View>(null);
  const numberRef = useRef<View>(null);
  const emailRef = useRef<View>(null);
  const passwordRef = useRef<View>(null);
  const repeatPasswordRef = useRef<View>(null);
  const registrationValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    phoneNumber: yup
      .string()
      .min(8, ({min}) => `Phone Number must be at least ${min} characters`),
    name: yup.string().required('Name is required'),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords don't match")
      .required('Confirm password is required'),
  });

  type props = {
    values: {
      email: string; 
      password: string; 
      phoneNumber: string; 
      name: string; 
      passwordRepeat: string
    },
    base64Icon: string,
    location: location,
    membership: EMembership
  }

  function setData({values,base64Icon,location,membership}: props) {
    const data: IRegisterUser = {
      fullName: values.name,
      password: values.password,
      dateOfBirth: birthDate,
      gender: gender,
      membership: membership,
      city: location.city,
      country: location.country,
      /*profileImage: base64Icon,*/
      userRole: EUserRole.Patient,
      state: location.state,
      postCode: location.postCode
    }
    console.log(data)
    if (values.email.length < 1) return {...data,tel: values.phoneNumber} 
    else return {...data,email: values.email} 
    
  }


  //Gender modal
  const content = <><Text style={modalStyle.modalTitleStyle}>Select Gender</Text>
  <TouchableOpacity
    style={gender === 'male' ? modalStyle.optionStyleSelected : modalStyle.optionStyle}
    onPress={() => {setGender(EGender.Male);setGenderModal(false)}}>
    {gender === 'male' ? <SelectedIcon /> : <UnselectedIcon /> }
    <Text style={gender === 'male' ?[modalStyle.optionTextStyle,modalStyle.selectedText]:modalStyle.optionTextStyle}>Male</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={gender === 'female' ? modalStyle.optionStyleSelected : modalStyle.optionStyle}
    onPress={() => {setGender(EGender.Female);setGenderModal(false)}}>
     {gender === 'female' ? <SelectedIcon /> : <UnselectedIcon /> }
    <Text style={gender === 'female' ?[modalStyle.optionTextStyle,modalStyle.selectedText]:modalStyle.optionTextStyle}>Female</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={gender === 'others' ? modalStyle.optionStyleSelected : modalStyle.optionStyle}
    onPress={() => {setGender(EGender.Others);setGenderModal(false)}}>
    {gender === 'others' ? <SelectedIcon /> : <UnselectedIcon /> }
    <Text style={gender === 'others' ?[modalStyle.optionTextStyle,modalStyle.selectedText]:modalStyle.optionTextStyle}>Others</Text>
  </TouchableOpacity>
  <View style={sharedStyles.padding_60}/>
  </>


  return (
    <ScrollView contentContainerStyle={registerStyles.Container} scrollEnabled>
      <StatusBar  translucent={false} backgroundColor={colors.backgroundColor}  barStyle="dark-content" />
      <Header />
      <View style={registerStyles.registerPage}>
        <View style={loginStyles.topPart}>
          <View style={loginStyles.textGroup}>
            <Text style={loginStyles.loginPageTitle}>Create Account</Text>
            <Text style={loginStyles.loginPageText}>
              Please Enter the all details
            </Text>
          </View>
        </View>
        <View style={loginStyles.formContainer}>
          <Formik
            validationSchema={registrationValidationSchema}
            initialValues={{
              email: '',
              password: '',
              phoneNumber: '',
              name: '',
              passwordRepeat: '',
            }}
            onSubmit={values => {
              register(setData({values,base64Icon,location,membership}));
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
                {userPicture !== null ? (
                  <View style={registerStyles.imageContainer}>
                    <Image
                      style={registerStyles.imageStyle}
                      source={{uri: base64Icon}}
                    />
                  </View>
                ) : null}
                <PicturePickerModal setPicture={setUserPicture}/>
                <MembershipModal />
                <LanguageModal />
                <DatePickerModal />
                <CustomModal onBackdropPress={() => setGenderModal(false)} content={content} visible={genderModalIsOpen}/>
                <TouchableOpacity
                  style={[
                    registerStyles.formSelectInputStyle,
                    sharedStyles.dashedBorder,
                    {backgroundColor: '#fff'}
                  ]}
                  onPress={() => {
                    dispatch(setPictureModal(true));
                  }}>
                  <UserIcon />
                  <Text style={registerStyles.formInputStyle}>
                    Upload Profile Image
                  </Text>
                </TouchableOpacity>
                <View
                  style={registerStyles.formInputContainerStyle}
                  ref={nameRef}>
                  <UsernameIcon />
                  <TextInput
                    autoFocus
                    onFocus={() => focusHandler(nameRef)}
                    onEndEditing={() => pressOutHandler(nameRef)}
                    keyboardType="email-address"
                    placeholderTextColor={'#41416E80'}
                    style={registerStyles.formInputStyle}
                    placeholder="Full Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                </View>
                {errors.name && touched.name && (
                  <Text style={loginStyles.errorText}>{errors.name}</Text>
                )}

                <View style={loginStyles.formContainerStyle} ref={numberRef}>
                  <CountryPicker
                    containerButtonStyle={sharedStyles.width_33}
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
                {touched.phoneNumber && values.email.length < 1 && values.phoneNumber.length < 1 && (
                  <Text style={loginStyles.errorText}>
                    {errors.phoneNumber = 'please enter at least phone number or email address'}
                  </Text>
                )}

                <View style={loginStyles.formContainerStyle} ref={emailRef}>
                  <MailIcon />
                  <TextInput
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
                {touched.phoneNumber && values.email.length < 1 && values.phoneNumber.length < 1 && !errors.phoneNumber && (
                  <Text style={loginStyles.errorText}>
                    {errors.email = 'please enter at least phone number or email address'}
                  </Text>)}

                <View style={registerStyles.formSelectInputStyle}>
                  <GenderIcon />
                  <Text style={loginStyles.formInputStyle}>{gender ? gender : 'Select Gender'}</Text>
                  <TouchableOpacity onPress={()=>setGenderModal(true)}>
                    <ArrowIcon />
                  </TouchableOpacity>
                </View>

                <View style={registerStyles.formSelectInputStyle}>
                  <CalendarIcon />
                  <Text style={registerStyles.formInputStyle}>
                    {birthDate.length > 0 ? birthDate : 'Date Of Birth'}
                  </Text>
                  <TouchableOpacity onPress={()=>{dispatch(setDateModal(true))}}>
                    <Text style={registerStyles.selectButton}>Select</Text>
                  </TouchableOpacity>
                </View>

                <View style={registerStyles.formSelectInputStyle}>
                  <GlobalIcon />
                  <Text style={registerStyles.formInputStyle}>{ languages.length > 0 ? languages.map(elem => elem+', ') : 'Language' }</Text>
                  <TouchableOpacity onPress={() => {
                      dispatch(setLanguageModal(true));
                    }}>
                    <Text style={registerStyles.selectButton}>Select</Text>
                  </TouchableOpacity>
                </View>

                <View style={registerStyles.formSelectInputStyle}>
                  <LocationIcon />
                  {
                      location.country || location.city || location.state || location.postCode ?
                      <Text style={registerStyles.formInputStyle}>{location.state} {location.city } {location.country} {location.postCode} </Text> :
                      <Text style={registerStyles.formInputStyle}>Location</Text>
                  }
                  <TouchableOpacity onPress={() => {
                      navigation.navigate('SelectLocation');
                    }}>
                      <Text style={registerStyles.selectButton}>Select</Text>
                  </TouchableOpacity>
                </View>

                <View style={registerStyles.formSelectInputStyle}>
                  <ThreeUsersIcon />
                  <Text style={registerStyles.formInputStyle}>
                    {membership !== null ? membership : 'Referrer/Partner/Employer/Family'}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(setMembershipModal(true));
                    }}>
                    <Text style={registerStyles.selectButton}>Select</Text>
                  </TouchableOpacity>
                </View>

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
                    }}>
                    <EyeIcon />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={loginStyles.errorText}>{errors.password}</Text>
                )}
                <View
                  style={loginStyles.formContainerStyle}
                  ref={repeatPasswordRef}>
                  <LockIcon />
                  <TextInput
                    onFocus={() => focusHandler(repeatPasswordRef)}
                    onEndEditing={() => pressOutHandler(repeatPasswordRef)}
                    secureTextEntry={hideConfirmPassword}
                    style={loginStyles.formInputStyle}
                    placeholder="Re-enter Password"
                    placeholderTextColor={'#41416E80'}
                    onChangeText={handleChange('passwordRepeat')}
                    onBlur={handleBlur('passwordRepeat')}
                    value={values.passwordRepeat}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setHideConfirmPassword(!hideConfirmPassword);
                    }}>
                    <EyeIcon />
                  </TouchableOpacity>
                </View>
                {errors.passwordRepeat && touched.passwordRepeat && (
                  <Text style={loginStyles.errorText}>
                    {errors.passwordRepeat}
                  </Text>
                )}
                <View
                  style={[
                    sharedStyles.row,
                    sharedStyles.alignCenter,
                    sharedStyles.padding_15,
                    sharedStyles.justifyCenter
                  ]}>
                  <Text style={registerStyles.termsText}>
                    By tapping “Sign Up”, you accept our
                  </Text>
                  <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, marginLeft: 5}]}>Terms</Text>
                </View>
                <TouchableOpacity
                  style={loginStyles.signInButton}
                  onPress={()=>handleSubmit()}
                  >
                  <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, marginLeft: 5, color: '#fff'}]}>Sign Up</Text>
                </TouchableOpacity>
                <View style={registerStyles.BottomPart}>
                  <Text style={[registerStyles.termsText,{fontFamily: 'Montserrat-Medium'}]}>
                    Already Have An Account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, marginLeft: 5}]}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          <View />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;


