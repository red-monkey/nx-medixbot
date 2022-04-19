import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Header from '../../components/CommunHeader';
import styles from '../../styles/HomepageStyles';
import loginStyles, {
  forgotPassword,
  resetPass,
} from '../../styles/LoginPageStyles';
import {GradientRedButton} from '../../commun/Gradients';
import {EyeIcon, LockIcon} from '../../commun/Icons';
import sharedStyles from '../../styles/SharedStyles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {focusHandler, pressOutHandler} from '../../utils/functions';

const ResetPasswordPage = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const passwordRef = useRef<View>(null);
  const repeatPasswordRef = useRef<View>(null);
  const resetPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords don't match")
      .required('Confirm password is required'),
  });
  return (
    <View style={styles.Container}>
      <Header />
      <View style={resetPass.resetPage}>
        <View style={forgotPassword.textGroup}>
          <Text style={loginStyles.loginPageTitle}>Create a New Password</Text>
          <Text style={loginStyles.loginPageText}>
            Please Enter a New Password Twice
          </Text>
        </View>
        <Formik
          validationSchema={resetPasswordSchema}
          initialValues={{password: '', passwordRepeat: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={[loginStyles.formContainer, sharedStyles.padding_60]}>
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
              <View style={forgotPassword.bottomPart}>
                <TouchableOpacity
                  style={loginStyles.signInButton}
                  onPress={handleSubmit}>
                  <GradientRedButton text={'Change Password'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ResetPasswordPage;
