import React, {createRef, useEffect, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Header from '../../components/CommunHeader';
import styles from '../../styles/HomepageStyles';
import loginStyles, {
  forgotPassword,
  verificationCode,
} from '../../styles/LoginPageStyles';
import sharedStyles from '../../styles/SharedStyles';
import {useAppSelector} from '../../utils/hooks';
import {getItem} from '../../redux/crud';
import {ResetPassProps} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import {focusHandler, pressOutHandler} from '../../utils/functions';

const VerificationCode = () => {
  const navigation = useNavigation<ResetPassProps>();
  const [emailOrNumber, setEmailOrNumber] = useState<string | null | undefined>(
    '',
  );
  const verifMethod = useAppSelector(
    state => state.loginMethodReducer.communicationMethod,
  );

  const focusHandlerInput = (reference: React.RefObject<TextInput>) => {
    reference.current?.focus();
  };
  useEffect(() => {
    getItem(verifMethod).then(item => {
      setEmailOrNumber(item);
    });
  }, [verifMethod]);
  const [timer, setTimer] = useState(30);
  const [isValid, setValid] = useState(false);
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const inputs = Array(4).fill(0, 0, 4);
  const arrLength = Array(4).length;
  const elRefs = useRef([]);
  const inputRefs = useRef([]);
  const checkValidation = () => {
    setValid(true);
    code.map((_, i) => {
      if (code[i].length === 0) {
        setValid(false);
        return;
      }
    });
  };
  useEffect(() => {
    if (timer >= 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);
  if (elRefs.current.length !== arrLength) {
    // add or remove refs
    elRefs.current = Array(arrLength)
      .fill(0)
      .map((_, i) => elRefs.current[i] || createRef<View>());
  }
  if (inputRefs.current.length !== arrLength) {
    // add or remove refs
    inputRefs.current = Array(arrLength)
      .fill(0)
      .map((_, i) => inputRefs.current[i] || createRef<View>());
  }
  return (
    <View style={styles.Container}>
      <Header />
      <View style={loginStyles.loginPage}>
        <View style={forgotPassword.textGroup}>
          <Text style={verificationCode.verificationPageTitle}>
            Verification Required
          </Text>
          <Text style={verificationCode.verificationPageText}>
            We Send a 4 Digit Code to
            {verifMethod === 'phone'
              ? ' mobile number'
              : ' e-mail address'}{' '}
          </Text>
          <Text style={verificationCode.verificationPageTextGreen}>
            {emailOrNumber}
          </Text>
        </View>
        <View style={[verificationCode.formContainer, sharedStyles.padding_60]}>
          <View style={sharedStyles.row}>
            {inputs.map((_, i) => (
              <View
                style={verificationCode.formContainerStyle}
                ref={elRefs.current[i]}
                key={i}>
                <TextInput
                  ref={inputRefs.current[i]}
                  maxLength={1}
                  keyboardType="numeric"
                  onFocus={() => focusHandler(elRefs.current[i])}
                  onEndEditing={() => pressOutHandler(elRefs.current[i])}
                  style={verificationCode.formInputStyle}
                  placeholderTextColor={'#41416E80'}
                  onChangeText={(text: string) => {
                    const modifiedCode = code;
                    modifiedCode[i] = text;
                    setCode(modifiedCode);
                    checkValidation();
                    if (code[i].length === 1 && i < 3) {
                      pressOutHandler(elRefs.current[i]);
                      focusHandler(elRefs.current[i + 1]);
                      focusHandlerInput(inputRefs.current[i + 1]);
                    }
                    if (code[i].length === 0 && i > 0) {
                      pressOutHandler(elRefs.current[i]);
                      focusHandler(elRefs.current[i - 1]);
                      focusHandlerInput(inputRefs.current[i - 1]);
                    }
                  }}
                />
              </View>
            ))}
          </View>
          <View style={verificationCode.timerContainer}>
            {timer >= 0 ? (
              <Text style={verificationCode.timerStyle}>
                0:{timer < 10 ? '0' + timer : timer}
              </Text>
            ) : null}
          </View>
          <View style={verificationCode.buttonContainer}>
            <TouchableOpacity
              style={loginStyles.signInButton}
              disabled={!isValid}
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={[
                      loginStyles.forgotPassword,
                      {textAlign: 'center', marginTop: 0, marginLeft: 5, color: '#fff'},
                    ]}>Verify</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={timer > 0}
            onPress={() => {
              setTimer(30);
            }}>
            <Text style={verificationCode.resendCode}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerificationCode;
