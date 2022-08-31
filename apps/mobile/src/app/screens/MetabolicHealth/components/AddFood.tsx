import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/MetabolicHealthStyles';
import * as yup from 'yup';
import { Formik, FormikTouched } from 'formik';
import loginStyles from '../../../styles/LoginPageStyles';
import Header from '../../Patient/components/Header';
import CaloryIcon from '../../../icons/metabolichealthicons/CaloryIcon.svg';
import CarbsIcon from '../../../icons/metabolichealthicons/CarbsIcon.svg';
import FatsIcon from '../../../icons/metabolichealthicons/FatsIcon.svg';
import ProteinsIcon from '../../../icons/metabolichealthicons/ProteinsIcon.svg';
import CameraIcon from '../../../icons/metabolichealthicons/CameraIcon.svg';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setPictureModal } from '../../../redux/actions/modal';
import { PicturePickerModal } from '../../Register/components/PicturePickerModal';
import sharedStyles from '../../../styles/SharedStyles';
import { Asset } from 'react-native-image-picker';
import { colors } from '../../../variables/colors';
import { addFood } from '../../../redux/actions/food';
import { useNavigation } from '@react-navigation/native';
import { FoodClassifierService } from '../../../services';

const AddFood = () => {
  const [loading, setLoading] = useState(false);
  const [predictedFood, setPredictedFood] = useState<IFood[]>([]);
  const [foodImage, setFoodImage] = useState<Asset>(null);
  const [imageMissing, setImageMissing] = useState(false);
  const [wrongTotal, setWrongTotal] = useState(false);
  const navigation = useNavigation<any>();
  const HealthStatusFormValidationSchema = yup.object().shape({
    foodName: yup.string().required('Please specify your food name.'),
    weightOfFood: yup
      .string()
      .required('Please specify the quantity of your food.'),
    calorie: yup
      .string()
      .required(
        'Please specify all the nutritional intformation relative to your food !'
      ),
    carbs: yup
      .string()
      .required(
        'Please specify all the nutritional intformation relative to your food !'
      ),
    fats: yup
      .string()
      .required(
        'Please specify all the nutritional intformation relative to your food !'
      ),
    proteins: yup
      .string()
      .required(
        'Please specify all the nutritional intformation relative to your food !'
      ),
  });
  const dispatch = useDispatch<Dispatch>();

  const calculateCalories = () => {
    return (
      predictedFood[0]?.foodCharacteristic[0]?.karbonhidrat * 4 +
      predictedFood[0]?.foodCharacteristic[0]?.yag * 9 +
      predictedFood[0]?.foodCharacteristic[0]?.protein * 4
    );
  };

  useEffect(() => {
    if (!foodImage) return;
    setImageMissing(true);
    const base64 = `data:${foodImage.type};base64,${foodImage.base64}`;
    setLoading(true);
    FoodClassifierService.predict(base64)
      .then((res) => {
        setPredictedFood(
          res.data.data.food.map((food) => {
            return {
              id: food?.id,
              name: food?.name,
              accuracy: food?.Accuracy,
              foodDescription: food?.food_description,
              foodCharacteristic: [
                {
                  agirlik: food?.food_characteristic[0]?.Agirlik,
                  karbonhidrat: food?.food_characteristic[0]?.Karbonhidrat,
                  protein: food?.food_characteristic[0]?.Protein,
                  yag: food?.food_characteristic[0]?.Yag,
                  foodId: food?.food_characteristic[0]?.food_id,
                },
              ],
            };
          })
        );
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [foodImage]);

  const controlFields = (
    touched: FormikTouched<{
      foodName: string;
      weightOfFood: string;
      calorie: string;
      carbs: string;
      fats: string;
      proteins: string;
    }>,
    values: {
      foodName: string;
      weightOfFood: string;
      calorie: string;
      carbs: string;
      fats: string;
      proteins: string;
    }
  ) => {
    if (!touched.foodName && !values.foodName)
      values.foodName = predictedFood[0]?.name;
    if (!touched.weightOfFood && !values.weightOfFood)
      values.weightOfFood =
        predictedFood[0]?.foodCharacteristic[0]?.agirlik?.toString();
    if (!touched.calorie && !values.calorie)
      values.calorie = calculateCalories().toString();
    if (!touched.carbs && !values.carbs)
      values.carbs =
        predictedFood[0]?.foodCharacteristic[0]?.karbonhidrat?.toString();
    if (!touched.fats && !values.fats)
      values.fats = predictedFood[0]?.foodCharacteristic[0]?.yag?.toString();
    if (!touched.proteins && !values.proteins)
      values.proteins =
        predictedFood[0]?.foodCharacteristic[0]?.protein?.toString();
    const total =
      parseInt(values.carbs) +
      parseInt(values.fats) +
      parseInt(values.proteins);
    if (total !== 100) setWrongTotal(true);
    else setWrongTotal(false);
  };
  const submitInformation = (values: {
    foodName: string;
    weightOfFood: string;
    calorie: string;
    carbs: string;
    fats: string;
    proteins: string;
  }) => {
    if (wrongTotal) return;
    const addedFood: FoodRecognitionData = {
      foodName: values.foodName,
      quantity: parseInt(values.weightOfFood),
      calories: parseInt(values.calorie),
      carbs: parseInt(values.carbs),
      fats: parseInt(values.fats),
      proteins: parseInt(values.proteins),
    };
    dispatch(addFood(addedFood));
    navigation.navigate('MetabolicHealth');
  };

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#000' }}>Predicting...</Text>
      </View>
    );

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: 40, paddingBottom: 0 },
      ]}
    >
      <Header title="Add Food" />
      <View style={styles.screenContentCart}>
        <View style={styles.addFoodSectionContainer}>
          <Text style={styles.topHeader}>Add a Food</Text>

          <PicturePickerModal setPicture={setFoodImage} />

          <TouchableOpacity
            style={[
              styles.foodSelectionInputContainer,
              sharedStyles.dashedBorder,
            ]}
            onPress={() => {
              dispatch(setPictureModal(true));
              setFoodImage(null);
            }}
          >
            <View style={styles.cameraIconContainer}>
              <CameraIcon />
            </View>
            <Text style={styles.foodSelectionInput}>Upload food image</Text>
          </TouchableOpacity>

          <View style={styles.photoPreviewBox}>
            {foodImage && (
              <Image
                resizeMode="cover"
                style={{ width: '100%', height: '100%', borderRadius: 9 }}
                source={{ uri: `data:image/jpg;base64,${foodImage.base64}` }}
              />
            )}
          </View>
          {imageMissing && (
            <Text
              style={[
                loginStyles.errorText,
                { marginLeft: 20, marginTop: -15 },
              ]}
            >
              Please add a picture !
            </Text>
          )}
          <Formik
            validationSchema={HealthStatusFormValidationSchema}
            initialValues={{
              foodName: foodImage ? predictedFood[0]?.name : '',
              weightOfFood: foodImage
                ? predictedFood[0]?.foodCharacteristic[0]?.agirlik
                : '',
              calorie: foodImage ? calculateCalories() : '',
              carbs: foodImage
                ? predictedFood[0]?.foodCharacteristic[0]?.karbonhidrat
                : '',
              fats: foodImage
                ? predictedFood[0]?.foodCharacteristic[0]?.yag
                : '',
              proteins: foodImage
                ? predictedFood[0]?.foodCharacteristic[0]?.protein
                : '',
            }}
            onSubmit={(values) => {
              submitInformation(values);
            }}
          >
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
                    editable={foodImage ? true : false}
                    maxLength={200}
                    onTouchStart={() => {
                      touched.foodName = true;
                      values.foodName =
                        !values.foodName && predictedFood[0]?.name;
                    }}
                    value={
                      foodImage &&
                      (touched.foodName
                        ? values?.foodName
                        : predictedFood[0]?.name)
                    }
                    textAlign={'left'}
                    style={styles.txtInput}
                    textAlignVertical={'top'}
                    placeholder={'write the name of the food you eat'}
                    placeholderTextColor={'#7B8D9E'}
                    onBlur={handleBlur('foodName')}
                    onChangeText={handleChange('foodName')}
                    multiline
                  />
                </View>
                {errors.foodName && touched.foodName && (
                  <Text style={[loginStyles.errorText, { marginLeft: 20 }]}>
                    {errors.foodName}
                  </Text>
                )}
                <View style={styles.inputSection}>
                  <Text style={styles.questionTxt}>
                    How much did you eat in gram?
                  </Text>
                  <TextInput
                    editable={foodImage ? true : false}
                    maxLength={200}
                    onTouchStart={() => {
                      touched.weightOfFood = true;
                      values.weightOfFood =
                        !values.weightOfFood &&
                        predictedFood[0]?.foodCharacteristic[0]?.agirlik?.toString();
                    }}
                    value={
                      foodImage &&
                      (touched.weightOfFood
                        ? values.weightOfFood
                        : predictedFood[0]?.foodCharacteristic[0]?.agirlik?.toString())
                    }
                    textAlign={'left'}
                    textAlignVertical={'top'}
                    style={styles.txtInput}
                    placeholder={'write the quantity you eat in gram'}
                    placeholderTextColor={'#7B8D9E'}
                    onBlur={handleBlur('weightOfFood')}
                    onChangeText={handleChange('weightOfFood')}
                    keyboardType={'numeric'}
                    multiline
                  />
                </View>
                {errors.weightOfFood && touched.weightOfFood && (
                  <Text style={[loginStyles.errorText, { marginLeft: 20 }]}>
                    {errors.weightOfFood}
                  </Text>
                )}

                <View style={styles.ingredientsOfFoodContainer}>
                  <Text style={[styles.questionTxt, { marginLeft: '5%' }]}>
                    What amount does the food you eat contain?
                  </Text>
                  <View style={styles.ingredientsBox}>
                    <View style={styles.ingredientsType}>
                      <View style={styles.ingredientItem}>
                        <View style={styles.iconContainer}>
                          <CaloryIcon />
                        </View>
                        <View style={{ width: 40 }}>
                          <Text style={styles.ingredientName}>Cal</Text>
                          <TextInput
                            editable={foodImage ? true : false}
                            maxLength={6}
                            onTouchStart={() => {
                              touched.calorie = true;
                              values.calorie =
                                !values.calorie && calculateCalories();
                            }}
                            value={
                              foodImage &&
                              (touched.calorie
                                ? values.calorie
                                : calculateCalories().toString())
                            }
                            onChangeText={handleChange('calorie')}
                            onBlur={handleBlur('calorie')}
                            placeholderTextColor={'#7B8D9E'}
                            placeholder={'46'}
                            style={[styles.numInput]}
                            keyboardType={'numeric'}
                          />
                        </View>
                      </View>
                      <View style={styles.ingredientItem}>
                        <View style={styles.iconContainer2}>
                          <CarbsIcon />
                        </View>
                        <View>
                          <Text style={styles.ingredientName}>Carbs</Text>
                          <View
                            style={[styles.numInput, { flexDirection: 'row' }]}
                          >
                            <TextInput
                              editable={foodImage ? true : false}
                              maxLength={2}
                              onTouchStart={() => {
                                touched.carbs = true;
                                values.carbs =
                                  !values.carbs &&
                                  predictedFood[0]?.foodCharacteristic[0]?.karbonhidrat?.toString();
                              }}
                              onChangeText={handleChange('carbs')}
                              onBlur={handleBlur('carbs')}
                              value={
                                foodImage
                                  ? touched.carbs
                                    ? values.carbs
                                    : predictedFood[0]?.foodCharacteristic[0]?.karbonhidrat?.toString()
                                  : values.carbs
                              }
                              placeholderTextColor={'#7B8D9E'}
                              placeholder={'0'}
                              keyboardType={'numeric'}
                              style={styles.input}
                            />
                            <Text
                              style={[
                                styles.percentage,
                                (touched.carbs || foodImage) && {
                                  color: colors.Text,
                                },
                              ]}
                            >
                              gr
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.ingredientsType}>
                      <View style={styles.ingredientItem}>
                        <View style={styles.iconContainer}>
                          <FatsIcon />
                        </View>
                        <View>
                          <Text style={styles.ingredientName}>Fats</Text>
                          <View
                            style={[styles.numInput, { flexDirection: 'row' }]}
                          >
                            <TextInput
                              editable={foodImage ? true : false}
                              maxLength={2}
                              onTouchStart={() => {
                                touched.fats = true;
                                values.fats =
                                  !values.fats &&
                                  predictedFood[0]?.foodCharacteristic[0]?.yag?.toString();
                              }}
                              value={
                                foodImage &&
                                (touched.fats
                                  ? values.fats
                                  : predictedFood[0]?.foodCharacteristic[0]?.yag?.toString())
                              }
                              onChangeText={handleChange('fats')}
                              placeholder={`0`}
                              keyboardType={'numeric'}
                              placeholderTextColor={'#7B8D9E'}
                              style={styles.input}
                            />
                            <Text
                              style={[
                                styles.percentage,
                                (touched.fats || foodImage) && {
                                  color: colors.Text,
                                },
                              ]}
                            >
                              gr
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.ingredientItem}>
                        <View style={styles.iconContainer2}>
                          <ProteinsIcon />
                        </View>
                        <View>
                          <Text
                            style={[styles.ingredientName, { marginLeft: -3 }]}
                          >
                            Proteins
                          </Text>
                          <View
                            style={[styles.numInput, { flexDirection: 'row' }]}
                          >
                            <TextInput
                              editable={foodImage ? true : false}
                              maxLength={2}
                              onTouchStart={() => {
                                touched.proteins = true;
                                values.proteins =
                                  !values.proteins &&
                                  predictedFood[0]?.foodCharacteristic[0]?.protein?.toString();
                              }}
                              value={
                                foodImage &&
                                (touched.proteins
                                  ? values.proteins
                                  : predictedFood[0]?.foodCharacteristic[0]?.protein?.toString())
                              }
                              onChangeText={handleChange('proteins')}
                              placeholder={'0'}
                              placeholderTextColor={'#7B8D9E'}
                              keyboardType={'numeric'}
                              style={styles.input}
                            />
                            <Text
                              style={[
                                styles.percentage,
                                (touched.proteins || foodImage) && {
                                  color: colors.Text,
                                },
                              ]}
                            >
                              gr
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    {((touched.calorie && errors.calorie) ||
                      (touched.carbs && errors.carbs) ||
                      (touched.proteins && errors.proteins) ||
                      (touched.fats && errors.fats)) && (
                      <Text style={loginStyles.errorText}>
                        {errors.calorie ||
                          errors.carbs ||
                          errors.proteins ||
                          errors.fats}
                      </Text>
                    )}
                    {wrongTotal && (
                      <Text style={loginStyles.errorText}>
                        Percentages you entered are wrong, please make sure the
                        total equals 100%
                      </Text>
                    )}
                  </View>
                </View>

                <TouchableOpacity
                  onPress={
                    foodImage
                      ? () => {
                          controlFields(touched, values);
                          handleSubmit();
                        }
                      : () => setImageMissing(true)
                  }
                  style={styles.saveBtn}
                >
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

interface IFood {
  id: number;
  name: string;
  accuracy: number;
  foodDescription: string;
  foodCharacteristic: [
    {
      agirlik: 200.0;
      karbonhidrat: 52.0;
      protein: 88.0;
      yag: 12.0;
      foodId: 60.0;
    }
  ];
}
