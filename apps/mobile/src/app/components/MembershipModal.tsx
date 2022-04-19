import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {setMembershipModal} from '../redux/actions/modal';
import loginStyles, {modalStyle} from '../styles/LoginPageStyles';
import * as styles from '../styles/RegisterStyle';
import {useAppSelector} from '../utils/hooks';
import {buttonStyle} from '../utils/types';
import * as yup from 'yup';
import {GreenArrowIcon, MoreIcon, ThreeUsersIcon} from '../commun/Icons';
import {focusHandler, pressOutHandler} from '../utils/functions';
import {GradientRedButton} from '../commun/Gradients';

export default function MembershipModal() {
  const isOpen = useAppSelector(state => state.membershipModalReducer.isOpen);
  const dispatch = useDispatch<Dispatch>();
  const membershipTypes = ['Referrer', 'Partner', 'Employer', 'Family'];
  const [openTab, setOpenTab] = useState<number>(0);
  const GreenBtn = ({
    text,
    extraStyle,
    tab,
  }: {
    text: string;
    extraStyle?: buttonStyle;
    tab: number;
  }): JSX.Element => {
    return (
      <TouchableOpacity
        style={[
          styles.MembershipModalStyle.button,
          openTab === tab ? styles.greenBackground : styles.whiteBackground,
          extraStyle,
        ]}
        onPress={() => {
          setOpenTab(tab);
        }}>
        <Text
          style={[
            styles.MembershipModalStyle.buttonText,
            openTab === tab ? styles.lightText : styles.greenText,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };
  const ReferralCodeRef = useRef<View>(null);
  const FamilyCodeRef = useRef<View>(null);
  const FamilyLastNameRef = useRef<View>(null);
  const MembershipValidationSchema = yup.object().shape({
    ReferralCode: yup.string().required('Referral Code is Required'),
    FamilyCode: yup.string().required('Family Code is required'),
    FamilyLastName: yup.string().required('Family Last Name is required'),
  });
  return (
    <Modal
      hasBackdrop
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationOutTiming={150}
      backdropOpacity={0.5}
      onBackdropPress={() => dispatch(setMembershipModal(false))}
      isVisible={isOpen}>
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <Text style={styles.MembershipModalStyle.modalTitleStyle}>
            Are you a member of?
          </Text>
          <View style={styles.MembershipModalStyle.buttonList}>
            {membershipTypes.map((item, i) => (
              <GreenBtn
                text={item}
                key={i}
                extraStyle={
                  i === 0
                    ? styles.leftButton
                    : i === membershipTypes.length - 1
                    ? styles.rightButton
                    : styles.middleButton
                }
                tab={i}
              />
            ))}
          </View>
          <View style={styles.MembershipModalStyle.formContainer}>
            <Formik
              validationSchema={MembershipValidationSchema}
              initialValues={{
                ReferralCode: '',
                FamilyCode: '',
                FamilyLastName: '',
              }}
              onSubmit={values => console.log(values)}>
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
                  <View
                    style={styles.default.formInputContainerStyle}
                    ref={ReferralCodeRef}>
                    <MoreIcon />
                    <TextInput
                      onFocus={() => focusHandler(ReferralCodeRef)}
                      onEndEditing={() => pressOutHandler(ReferralCodeRef)}
                      placeholderTextColor={'#41416E80'}
                      style={styles.default.formInputStyle}
                      placeholder="Referral Code"
                      onChangeText={handleChange('ReferralCode')}
                      onBlur={handleBlur('ReferralCode')}
                      value={values.ReferralCode}
                    />
                  </View>
                  {errors.ReferralCode && touched.ReferralCode && (
                    <Text style={loginStyles.errorText}>
                      {errors.ReferralCode}
                    </Text>
                  )}

                  <View style={styles.default.formSelectInputStyle}>
                    <ThreeUsersIcon />
                    <Text style={loginStyles.formInputStyle}>
                      Select Partner
                    </Text>
                    <TouchableOpacity>
                      <GreenArrowIcon />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.default.formSelectInputStyle}>
                    <ThreeUsersIcon />
                    <Text style={loginStyles.formInputStyle}>
                      Select Employer
                    </Text>
                    <TouchableOpacity>
                      <GreenArrowIcon />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={styles.default.formInputContainerStyle}
                    ref={FamilyCodeRef}>
                    <MoreIcon />
                    <TextInput
                      onFocus={() => focusHandler(FamilyCodeRef)}
                      onEndEditing={() => pressOutHandler(FamilyCodeRef)}
                      placeholderTextColor={'#41416E80'}
                      style={styles.default.formInputStyle}
                      placeholder="Family Code"
                      onChangeText={handleChange('FamilyCode')}
                      onBlur={handleBlur('FamilyCode')}
                      value={values.FamilyCode}
                    />
                  </View>
                  {errors.FamilyCode && touched.FamilyCode && (
                    <Text style={loginStyles.errorText}>
                      {errors.FamilyCode}
                    </Text>
                  )}
                  <View
                    style={styles.default.formInputContainerStyle}
                    ref={FamilyLastNameRef}>
                    <ThreeUsersIcon />
                    <TextInput
                      onFocus={() => focusHandler(FamilyLastNameRef)}
                      onEndEditing={() => pressOutHandler(FamilyLastNameRef)}
                      placeholderTextColor={'#41416E80'}
                      style={styles.default.formInputStyle}
                      placeholder="Family Last Name"
                      onChangeText={handleChange('FamilyLastName')}
                      onBlur={handleBlur('FamilyLastName')}
                      value={values.FamilyLastName}
                    />
                  </View>
                  {errors.FamilyLastName && touched.FamilyLastName && (
                    <Text style={loginStyles.errorText}>
                      {errors.FamilyLastName}
                    </Text>
                  )}
                  <View style={styles.MembershipModalStyle.submitButtonGroup}>
                    <TouchableOpacity
                      style={styles.MembershipModalStyle.submitButton}
                      onPress={handleSubmit}
                      disabled={!isValid}>
                      <GradientRedButton text={'Save'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.MembershipModalStyle.submitButton}
                      onPress={handleSubmit}
                      disabled={!isValid}>
                      <GradientRedButton text={'Create New'} />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </Modal>
  );
}
