import {Formik} from 'formik';
import React, {createRef, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {setMembershipModal,setMembership} from '../../../redux/actions/modal';
import loginStyles, {modalStyle} from '../../../styles/LoginPageStyles';
import * as styles from '../../../styles/RegisterStyle';
import {useAppSelector} from '../../../utils/hooks';
import {buttonStyle, membership} from '../../../utils/types';
import * as yup from 'yup';
import { MoreIcon} from '../../../commun/Icons';
import ThreeUsersIcon from '../icons/ThreeUsersIcon.svg'
import ThreeUsersIconDark from '../icons/ThreeUsersIconDark.svg'
import {focusHandler, pressOutHandler} from '../../../utils/functions';
import {  greyBackground } from '../../../styles/RegisterStyle';
import { employers, partners } from '../../../utils/constants';
import { PickerSingleOption } from './PickerSingleOption';
import { EMembership } from '@medixbot/types';

export default function MembershipModal() {
  const isOpen = useAppSelector(state => state.membershipModalReducer.isOpen);
  const dispatch = useDispatch<Dispatch>();
  const membershipTypes: Array<membership>= ['Referrer', 'Partner', 'Employer', 'Family'];
  const [membership,setMembershipTab] = useState<membership>('Referrer');
  const [openTab, setOpenTab] = useState<number>(0);
  const [partner,setPartner] = useState<string>("") ;
  const [employer,setEmployer] = useState<string>("") ;

  const partnersRefs = useRef([]);
  const employersRefs = useRef([]);
  const highlightedRefs = useRef([]);
  const highlightedRefsEmployers = useRef([]);

  if (partnersRefs.current.length !== partners.length) {
    // add or remove refs
    partnersRefs.current = Array(partners.length)
      .fill(0)
      .map((_, i) => partnersRefs.current[i] || createRef<TouchableOpacity>());
  }

  if (highlightedRefs.current.length !== partners.length) {
    // add or remove refs
    highlightedRefs.current = Array(partners.length)
      .fill(0)
      .map((_, i) => highlightedRefs.current[i] || createRef<TouchableOpacity>());
  }

  if (employersRefs.current.length !== employers.length) {
    // add or remove refs
    employersRefs.current = Array(employers.length)
      .fill(0)
      .map((_, i) => employersRefs.current[i] || createRef<TouchableOpacity>());
  }

  if (highlightedRefsEmployers.current.length !== employers.length) {
    // add or remove refs
    highlightedRefsEmployers.current = Array(employers.length)
      .fill(0)
      .map((_, i) => highlightedRefsEmployers.current[i] || createRef<TouchableOpacity>());
  }


  const GreenBtn = ({
    text,
    extraStyle,
    tab,
  }: {
    text: membership;
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
          setMembershipTab(text)
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
    ReferralCode: yup.string(),
    FamilyCode: yup.string(),
    FamilyLastName: yup.string(),
    /*ReferralCode: yup.string().required('Referral Code is Required'),
    FamilyCode: yup.string().required('Family Code is required'),
    FamilyLastName: yup.string().required('Family Last Name is required'),*/
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
        <View style={[modalStyle.modalView,{height: 500,paddingBottom: 30}]}>
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
              onSubmit={values => {
                if(openTab === 1 && partner.length > 0 ) dispatch(setMembership(EMembership.Partner))
                else if(openTab === 2 && employer.length > 0) dispatch(setMembership(EMembership.Employer))
                else if(openTab === 0) dispatch(setMembership(EMembership.Referrer))
                else dispatch(setMembership(EMembership.Family))
                dispatch(setMembershipModal(false))
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
                <View style={{justifyContent: 'space-between',height: '88%'}}>
                {
                  (membership === 'Referrer') ? 
                  (<>
                  <View
                      style={[styles.default.formInputContainerStyle, greyBackground]}
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
                  </>) : membership === 'Partner' ? 
                  (
                    <View>
                      <View style={styles.MembershipModalStyle.PartnerTitle}>
                        <ThreeUsersIcon />
                        <Text style={{marginLeft: 10, color: '#fff'}}>
                          Select Partner:
                        </Text>
                      </View>
                      <ScrollView style={styles.MembershipModalStyle.PartnersList}>
                        {partners.map((element,index) => (
                          <PickerSingleOption key={index} selectedButtonref={partnersRefs.current[index]} currentPartner={partner} element={element} refs={partnersRefs} setPartner={setPartner} highlightRef={highlightedRefs.current[index]} highlightedRefs={highlightedRefs}/> ))}
                      </ScrollView>
                    </View>
                    ): membership === 'Employer' ? (
                      <View>
                    <View style={styles.MembershipModalStyle.PartnerTitle}>
                      <ThreeUsersIcon />
                      <Text style={{marginLeft: 10, color: '#fff'}}>
                        Select Employer:
                      </Text>
                      </View>
                      <ScrollView style={styles.MembershipModalStyle.PartnersList}>
                        {employers.map((element,index) => (
                          <PickerSingleOption key={index} selectedButtonref={employersRefs.current[index]} currentPartner={employer} element={element} refs={employersRefs} setPartner={setEmployer} highlightRef={highlightedRefsEmployers.current[index]} highlightedRefs={highlightedRefsEmployers}/> ))}
                      </ScrollView>
                      </View>
                     ) :
                  (<View>
                  <View
                    style={[styles.default.formInputContainerStyle, greyBackground]}
                    ref={FamilyLastNameRef}>
                    <ThreeUsersIconDark />
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
                  <View
                     style={[styles.default.formInputContainerStyle, greyBackground]}
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
                  </View>)}
                  <View style={styles.MembershipModalStyle.submitButtonGroup}>
                    <TouchableOpacity
                      style={membership === 'Family' ? styles.MembershipModalStyle.submitButton : [styles.MembershipModalStyle.submitButton, styles.MembershipModalStyle.extended]}
                      onPress={()=>handleSubmit()}>
                        <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#fff'}]}>Save</Text>
                    </TouchableOpacity>
                    { membership === 'Family' ? <TouchableOpacity
                      style={[styles.MembershipModalStyle.submitButton,styles.MembershipModalStyle.createNewBtn]}
                      disabled={!isValid}>
                      <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#41416E'}]}>Create New</Text>
                    </TouchableOpacity> : null }
                  </View>
               </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </Modal>
  );
}
