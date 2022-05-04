import * as React from 'react';
import {Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {useAppSelector} from '../../../utils/hooks';
import * as styles from '../../../styles/RegisterStyle';
import {setLanguageModal, setSelectedLanguages} from '../../../redux/actions/modal';
import loginStyles, {modalStyle} from '../../../styles/LoginPageStyles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {LocationModalStyles, } from '../../../styles/RegisterStyle';
import CustomModal from '../../../components/CustomModal';
import { languages } from '../../../utils/constants';
import { createRef, useRef } from 'react';
import { PickerOption } from './PickerOption';

export function LanguageModal() {
  const isOpen = useAppSelector(state => state.languageModalReducer.isOpen);
  const selectedLanguages = useAppSelector(state => state.languageModalReducer.selectedLanguages);
  const selectedLanguagesTemp = [...selectedLanguages];
  
  const elRefs = useRef([]);
  const unselectedElRefs = useRef([]);

    
  if (elRefs.current.length !== languages.length) {
    // add or remove refs
    elRefs.current = Array(languages.length)
      .fill(0)
      .map((_, i) => elRefs.current[i] || createRef<TouchableOpacity>());
  }

  if (unselectedElRefs.current.length !== languages.length) {
    // add or remove refs
    unselectedElRefs.current = Array(languages.length)
      .fill(0)
      .map((_, i) => unselectedElRefs.current[i] || createRef<TouchableOpacity>());
  }


  const dispatch = useDispatch<Dispatch>();
  const checkIfSelected = (lang: string,languages: string[]) => {
    let inserted = false;
    selectedLanguagesTemp.forEach((item,i) => {
      if(item === lang)inserted =true;
    });  
    return inserted;     
  }
  const content = 
   <View style={LocationModalStyles.container}>
    <Text style={modalStyle.modalTitleStyle}>
        Select Language
    </Text>
    <ScrollView style={styles.LanguageModalStyles.languagesList}>
                          {
                            languages.map((element,index) => (
                              <PickerOption key={index} element={element} selectedButtonref={elRefs.current[index]} unselectedButtonRef={unselectedElRefs.current[index]} IsSelected={checkIfSelected(element, selectedLanguagesTemp)} selectedLanguagesTemp={selectedLanguagesTemp} />
                            ))
                          }
    </ScrollView>
    <TouchableOpacity
        style={[styles.MembershipModalStyle.submitButton, styles.MembershipModalStyle.extended]}
        onPress={()=>{dispatch(setSelectedLanguages(selectedLanguagesTemp));dispatch(setLanguageModal(false))}}>
            <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#fff'}]}>Save</Text>
    </TouchableOpacity>
   </View>
  return (
    <CustomModal content={content} visible={isOpen} onBackdropPress={()=> {dispatch(setLanguageModal(false))}} />
  );
}