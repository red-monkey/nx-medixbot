import React, { useState } from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import styles from '../../../styles/AppointmentStyles'
import HospitalsModal from './HospitalsModal'
import SearchBar from './SearchBar'
import * as yup from 'yup';
import { Formik } from 'formik'
import loginStyles from '../../../styles/LoginPageStyles'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { TAppointment, TNatureOfHealth } from '../../../utils/types'
import { setNatureOfHealth } from '../../../redux/actions/appointment'

const questionsAndInputs = [
    {question: 'What is your health condition? ', placeholder: 'Including symptoms you are feeling '},
    {question: 'How long have you been experiencing it?', placeholder: 'When did it start?'},
    {question: 'Is it worse at certain times than at others?', placeholder: 'Worst in the morning?'},
    {question: 'Do you want to say anything else to say ', placeholder: 'Additional'},
]

const NatureOfHealth = ({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) => {
    const dispatch = useDispatch<Dispatch>()
    const HealthStatusFormValidationSchema = yup.object().shape({
        healthCondition: yup
          .string()
          .required('Please specify your health condition'),
        startDate: yup
          .string()
          .required('Please specify when did this condition start'),
        ifWorseAtCertainTimes: yup
          .string(),
        additionalInfo: yup.string(),
        });
    const [modalVisible, setIsVisible] = useState(false);
    const [selectedHospital, setSelectedHospital] = useState<string>();
    const [liveAlone, setLiveAlone] = useState(null);
    const [impairement, setUserimpairement] = useState(null);
    const [missingFields, setMissingFields] = useState(false)
    const checkRequiredFields = () => {
        if (!liveAlone || !impairement || !selectedHospital) {
            setMissingFields(true)
            return(false)
        }
        else return true 
    }
    const submitInformation = (appointmentDetails: TNatureOfHealth) => {
        dispatch(setNatureOfHealth(appointmentDetails))
        setStep(3)
    }
  return (
        <View>
            <HospitalsModal setIsOpen={setIsVisible} isOpen={modalVisible} selectedHospital={selectedHospital} setSelectedHospital={setSelectedHospital} />
            <Text style={styles.inputsHeader}>Please, answer the following questions to get insight in to your health status</Text>
            <Formik
            validationSchema={HealthStatusFormValidationSchema}
            initialValues={{
              healthCondition: '',
              startDate: '',
              ifWorseAtCertainTimes: '',
              additionalInfo: '',
            }}
            onSubmit={values => {
                if(!checkRequiredFields()) return;
                submitInformation({HealthCondition: values.healthCondition, StartDate: values.startDate, hospital: selectedHospital, liveAlone: liveAlone, impairement: impairement,Worse: values.ifWorseAtCertainTimes, AdditionalInfo: values.additionalInfo})
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
                    <View style={styles.inputSection}>
                            <Text style={styles.questionTxt}>What is your health condition?</Text>
                            <TextInput 
                                editable
                                maxLength={200}
                                value={values.healthCondition}
                                textAlign={'left'}
                                textAlignVertical={'top'}
                                style={styles.txtInput}
                                placeholder={'Including symptoms you are feeling'}
                                placeholderTextColor={'#7B8D9E'}
                                onBlur={handleBlur('healthCondition')}
                                onChangeText={handleChange('healthCondition')}
                                multiline
                            />
                    </View>
                    {errors.healthCondition && touched.healthCondition && (
                        <Text style={[loginStyles.errorText,{marginLeft: 20}]}>{errors.healthCondition}</Text>
                    )}
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>How long have you been experiencing it?</Text>
                        <TextInput 
                            editable
                            maxLength={200}
                            value={values.startDate}
                            textAlign={'left'}
                            textAlignVertical={'top'}
                            style={styles.txtInput}
                            placeholder={'When did it start?'}
                            placeholderTextColor={'#7B8D9E'}
                            onBlur={handleBlur('startDate')}
                            onChangeText={handleChange('startDate')}
                            multiline
                        />
                    </View>
                    {errors.startDate && touched.startDate && (
                        <Text style={[loginStyles.errorText,{marginLeft: 20}]}>{errors.startDate}</Text>
                    )}
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>Is it worse at certain times than at others?</Text>
                        <TextInput 
                            editable
                            maxLength={200}
                            textAlign={'left'}
                            value={values.ifWorseAtCertainTimes}
                            textAlignVertical={'top'}
                            style={styles.txtInput}
                            onBlur={handleBlur('ifWorseAtCertainTimes')}
                            onChangeText={handleChange('ifWorseAtCertainTimes')}
                            placeholder={'Worst in the morning?'}
                            placeholderTextColor={'#7B8D9E'}
                            multiline
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>Do you want to say anything else to say </Text>
                        <TextInput 
                            editable
                            maxLength={200}
                            textAlign={'left'}
                            value={values.additionalInfo}
                            textAlignVertical={'top'}
                            style={styles.txtInput}
                            placeholder={'Additional'}
                            placeholderTextColor={'#7B8D9E'}
                            onBlur={handleBlur('additionalInfo')}
                            onChangeText={handleChange('additionalInfo')}
                            multiline
                        />
                    </View> 
            {/*questionsAndInputs.map(({question, placeholder},i) => {
                return(
                    <View style={styles.inputSection} key={i}>
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
            })*/}

                    {/* Additional Information */}

                <View style={{marginTop: 25}}>
                    <Text style={styles.inputsHeader}>Additional Information</Text>
                    {missingFields && <Text style={[loginStyles.errorText,{marginLeft: 20}]}>Please make sure to enter all the fields below</Text>}
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>Do you live alone?</Text>
                        <View style={styles.yesNoBoxContainer}>
                            <TouchableOpacity 
                              onPress={() => setLiveAlone('yes')} 
                              style={liveAlone === 'yes' ? styles.yesBox : styles.noBox}>
                                <Text style={liveAlone === 'yes' ? styles.yesBtnTxt : styles.noBtnTxt}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              onPress={() => setLiveAlone('no')} 
                              style={liveAlone === 'no' ? styles.yesBox : styles.noBox}>
                                <Text style={liveAlone === 'no' ? styles.yesBtnTxt : styles.noBtnTxt}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>Do you have hearing or sight impairement?</Text>
                        <View style={styles.yesNoBoxContainer}>
                        <TouchableOpacity 
                              onPress={() => setUserimpairement('yes')} 
                              style={impairement === 'yes' ? styles.yesBox : styles.noBox}>
                                <Text style={impairement === 'yes' ? styles.yesBtnTxt : styles.noBtnTxt}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              onPress={() => setUserimpairement('no')} 
                              style={impairement === 'no' ? styles.yesBox : styles.noBox}>
                                <Text style={impairement === 'no' ? styles.yesBtnTxt : styles.noBtnTxt}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <SearchBar setIsOpen={setIsVisible} selectedHospital={selectedHospital}/>

                <TouchableOpacity onPress={()=>handleSubmit()} style={styles.nextBtn}>
                    <Text style={styles.nextBtnTxt}>Next</Text>
                </TouchableOpacity>

                </> 
              )} 
              </Formik>

        </View>
  )
}

export default NatureOfHealth

