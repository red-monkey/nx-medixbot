import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/AppointmentStyles'
import Header from '../Patient/components/Header'
import DottedLine from '../../icons/appointmentIcons/DottedLine.svg'
import AppointmentSteps from './components/AppointmentSteps'
import SearchBar from './components/SearchBar'

const questionsAndInputs = [
    {question: 'What is your health condition? ', placeholder: 'Including symptoms you are feeling '},
    {question: 'How long have you been experiencing it?', placeholder: 'When did it start?'},
    {question: 'Is it worse at certain times than at others?', placeholder: 'Worst in the morning?'},
    {question: 'Do you want to say anything else to say ', placeholder: 'Additional'},
]

const BookAppointment2 = () => {
    const [value, onChangeText] = useState('');
    const [userOption2, setUserOption2] = useState(null);
    const [userOption, setUserOption] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container} >
        <Header title='Book Appointment'/>
        <View style={styles.screenContentCart}>

          <AppointmentSteps />

          <View style={{marginTop: '10%', paddingHorizontal: '2%'}}>
            <DottedLine />
          </View>

          {/* Input Section */}

          <View>
            <Text style={styles.inputsHeader}>Please, answer the following questions to get insight in to your health status</Text>
            {questionsAndInputs.map(({question, placeholder}) => {
                return(
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>{question} </Text>
                        <TextInput 
                            editable
                            maxLength={200}
                            textAlign={'left'}
                            textAlignVertical={'top'}
                            style={styles.txtInput}
                            placeholder={placeholder}
                            placeholderTextColor={'#7B8D9E'}
                            onChangeText={text => onChangeText(text)}
                            multiline
                        />
                    </View>
                )
            })}
          </View>

          {/* Additional Information */}

          <View>
            <Text style={styles.inputsHeader}>Additional Information</Text>
            <View style={styles.inputSection}>
                <Text style={styles.questionTxt}>Do you live alone?</Text>
                <View style={styles.yesNoBoxContainer}>
                    <TouchableOpacity 
                      onPress={() => setUserOption('yes')} 
                      style={userOption === 'yes' ? styles.yesBox : styles.noBox}>
                        <Text style={userOption === 'yes' ? styles.yesBtnTxt : styles.noBtnTxt}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => setUserOption('no')} 
                      style={userOption === 'no' ? styles.yesBox : styles.noBox}>
                        <Text style={userOption === 'no' ? styles.yesBtnTxt : styles.noBtnTxt}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputSection}>
                <Text style={styles.questionTxt}>Do you have hearing or sight impairement?</Text>
                <View style={styles.yesNoBoxContainer}>
                <TouchableOpacity 
                      onPress={() => setUserOption2('yes')} 
                      style={userOption2 === 'yes' ? styles.yesBox : styles.noBox}>
                        <Text style={userOption2 === 'yes' ? styles.yesBtnTxt : styles.noBtnTxt}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => setUserOption2('no')} 
                      style={userOption2 === 'no' ? styles.yesBox : styles.noBox}>
                        <Text style={userOption2 === 'no' ? styles.yesBtnTxt : styles.noBtnTxt}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>

          {/* SearcBar component */}

          <SearchBar />

        </View>
    </ScrollView>
  )
}

export default BookAppointment2