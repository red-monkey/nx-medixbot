import * as React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useAppSelector} from '../utils/hooks';
import * as styles from '../styles/RegisterStyle';
import {setLanguageModal, setSelectedLanguages} from '../redux/actions/modal';
import loginStyles, {modalStyle} from '../styles/LoginPageStyles';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {LocationModalStyles, } from '../styles/RegisterStyle';
import CustomModal from './CustomModal';
import { languages } from '../utils/constants';
import { createRef, useRef } from 'react';
import { selectElement, UnselectElement } from '../utils/functions';

export function LanguageModal() {
  const isOpen = useAppSelector(state => state.languageModalReducer.isOpen);
  const selectedLanguages = useAppSelector(state => state.languageModalReducer.selectedLanguages);
  const elRefs = useRef([]);

  if (elRefs.current.length !== languages.length) {
    // add or remove refs
    elRefs.current = Array(languages.length)
      .fill(0)
      .map((_, i) => elRefs.current[i] || createRef<TouchableOpacity>());
  }

  const dispatch = useDispatch<Dispatch>();
    const handleSubmit = () => {
        return (null)
    }
  const checkIfSelected = (lang: string) => {
    let inserted = false;
    selectedLanguages.forEach((item,i) => {
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
                        {languages.map((element,index) => (
                          <TouchableOpacity style={checkIfSelected(element) === true ? styles.LanguageModalStyles.selectedText: null} key={index} ref={elRefs.current[index]} onPress={()=>{
                            dispatch(setSelectedLanguages(element));
                            checkIfSelected(element) === false ? UnselectElement(elRefs.current[index]) : selectElement(elRefs.current[index])
                            }}>
                            <Text>{element}</Text>
                          </TouchableOpacity>
                        ))}
    </ScrollView>
    <TouchableOpacity
        style={[styles.MembershipModalStyle.submitButton, styles.MembershipModalStyle.extended]}
        onPress={()=>handleSubmit}>
            <Text style={[loginStyles.forgotPassword,{textAlign: 'center', marginTop: 0, color: '#fff'}]}>Save</Text>
    </TouchableOpacity>
   </View>
  return (
    <CustomModal content={content} visible={isOpen} onBackdropPress={()=> dispatch(setLanguageModal(false))} />
  );
}