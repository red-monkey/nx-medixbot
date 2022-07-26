import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '../../../styles/MetabolicHealthStyles';
import * as yup from 'yup';
import { Formik } from 'formik';
import loginStyles from '../../../styles/LoginPageStyles';
import Header from '../../Patient/components/Header';
import CaloryIcon from '../../../icons/metabolichealthicons/CaloryIcon.svg'
import CarbsIcon from '../../../icons/metabolichealthicons/CarbsIcon.svg'
import FatsIcon from '../../../icons/metabolichealthicons/FatsIcon.svg'
import ProteinsIcon from '../../../icons/metabolichealthicons/ProteinsIcon.svg'
import CameraIcon from '../../../icons/metabolichealthicons/CameraIcon.svg'
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux'; 
import { setPictureModal } from '../../../redux/actions/modal';
import { PicturePickerModal } from '../../Register/components/PicturePickerModal';
import sharedStyles from '../../../styles/SharedStyles';

const AddFood = () => {
  const [foodImage, setFoodImage] = useState<string>(null)

  console.log(foodImage);
    
  const dispatch = useDispatch<Dispatch>()

  const HealthStatusFormValidationSchema = yup.object().shape({
    foodName: yup
      .string()
      .required('Please specify your food name.'),
    weightOfFood: yup
      .string()
      .required('Please specify the quantity of your food.'),
    calorie: yup.string(),
    carbs: yup.string(),
    fats: yup.string(),
    proteins: yup.string(),
  });

  const submitInformation = () => {
    console.log('submitted');
}

  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop: 40, paddingBottom: 0}]}>
      <Header title='Add Food'/>
      <View style={styles.screenContentCart}>
        <View style={styles.addFoodSectionContainer}>
          <Text style={styles.topHeader}>Add a Food</Text>

          <PicturePickerModal setFoodImage={setFoodImage} />

          <Text style={{color: 'black', fontSize: 25}}>{foodImage}</Text>

          <TouchableOpacity
            style={[styles.foodSelectionInputContainer, sharedStyles.dashedBorder]}
            onPress={() => {
            dispatch(setPictureModal(true));
        }}>
            <View style={styles.cameraIconContainer}><CameraIcon /></View>
            <Text style={styles.foodSelectionInput}>
                Upload food image
            </Text>
          </TouchableOpacity>

          <View style={styles.photoPreviewBox}>  
            <Image resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 9}} source={{uri: 'https://cdn.cnn.com/cnnnext/dam/assets/220707113925-17-maldives-best-overwater-villas-velaa.jpg'}} />
          </View>

          <Formik
            validationSchema={HealthStatusFormValidationSchema}
            initialValues={{
              foodName: '',
              weightOfFood: '',
              calorie: '',
              carbs: '',
              fats: '',
              proteins: '',
            }}
            onSubmit={values => {
                submitInformation()
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
                            <Text style={styles.questionTxt}>What did you eat?</Text>
                            <TextInput 
                                editable
                                maxLength={200}
                                value={values.foodName}
                                textAlign={'left'}
                                textAlignVertical={'top'}
                                style={styles.txtInput}
                                placeholder={'write the name of the food you eat'}
                                placeholderTextColor={'#7B8D9E'}
                                onBlur={handleBlur('foodName')}
                                onChangeText={handleChange('foodName')}
                                multiline
                            />
                    </View>
                    {errors.foodName && touched.foodName && (
                        <Text style={[loginStyles.errorText,{marginLeft: 20}]}>{errors.foodName}</Text>
                    )}
                    <View style={styles.inputSection}>
                        <Text style={styles.questionTxt}>How much did you eat in gram?</Text>
                        <TextInput 
                            editable
                            maxLength={200}
                            value={values.weightOfFood}
                            textAlign={'left'}
                            textAlignVertical={'top'}
                            style={styles.txtInput}
                            placeholder={'write the quantity you eat in gram'}
                            placeholderTextColor={'#7B8D9E'}
                            onBlur={handleBlur('weightOfFood')}
                            onChangeText={handleChange('weightOfFood')}
                            multiline
                        />
                    </View>
                    {errors.weightOfFood && touched.weightOfFood && (
                        <Text style={[loginStyles.errorText,{marginLeft: 20}]}>{errors.weightOfFood}</Text>
                    )}

                    <View style={styles.ingredientsOfFoodContainer}>
                        <Text style={[styles.questionTxt, {marginLeft: '5%'}]}>What amount does the food you eat contain?</Text>
                        <View style={styles.ingredientsBox}>
                            <View style={styles.ingredientsType}>
                                <View style={styles.ingredientItem}>
                                    <View style={styles.iconContainer}><CaloryIcon /></View>
                                    <View>
                                        <View><Text style={styles.ingredientName}>Cal</Text></View>
                                        <View>
                                            <TextInput 
                                              editable
                                              maxLength={5}
                                              //value={values.calorie}
                                              placeholder={`${'46'}%`}
                                              keyboardType={'numeric'}
                                              style={styles.numInput} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.ingredientItem}>
                                    <View style={styles.iconContainer2}><CarbsIcon /></View>
                                    <View>
                                        <View><Text style={styles.ingredientName}>Carbs</Text></View>
                                        <View>
                                            <TextInput 
                                              editable
                                              maxLength={5}
                                              //value={`${values.carbs}%`}
                                              placeholder={`${'24'}%`}
                                              keyboardType={'numeric'}
                                              style={styles.numInput} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ingredientsType}>
                                <View style={styles.ingredientItem}>
                                    <View style={styles.iconContainer}><FatsIcon /></View>
                                    <View>
                                        <View><Text style={styles.ingredientName}>Fats</Text></View>
                                        <View>
                                            <TextInput 
                                              editable
                                              maxLength={5}
                                              //value={values.fats}
                                              placeholder={`${'37'}%`}
                                              keyboardType={'numeric'}
                                              style={styles.numInput} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.ingredientItem}>
                                    <View style={styles.iconContainer2}><ProteinsIcon /></View>
                                    <View>
                                        <View><Text style={[styles.ingredientName, {marginLeft: -3}]}>Proteins</Text></View>
                                        <View>
                                            <TextInput 
                                              editable
                                              maxLength={5}
                                              //value={`${values.proteins}%`}
                                              placeholder={`${'29'}%`}
                                              keyboardType={'numeric'}
                                              style={styles.numInput} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={()=>handleSubmit()} style={styles.saveBtn}>
                        <Text style={styles.saveBtnTxt}>Save</Text>
                    </TouchableOpacity>

                </> 
              )} 
              </Formik>

        </View>
      </View>
    </ScrollView>
  );
};

export default AddFood;
