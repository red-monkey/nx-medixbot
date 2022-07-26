import { StyleSheet } from 'react-native';
import { colors } from '../variables/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenContentCart: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    marginTop: 20,
  },
  topHeader: {
    color: colors.newBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    marginLeft: '6%',
    marginTop: '15%'
  },
  addFoodSectionContainer: {

  },
  uploadImageComponent: {},
  uploaderBtn: {},
  uploadedImgPreview: {},
  inputSection: {
    paddingHorizontal: 20,
    marginLeft: 5
  },
  questionTxt: {
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 18,
    marginVertical: '4%',
  },
  txtInput: {
    borderRadius: 8,
    backgroundColor: 'rgba(215, 234, 255, 0.3)',
    fontSize: 12,
    width: '90%',
    height: 50,
    color: '#000000',
    paddingLeft: 15,
  },
  ingredientsOfFoodContainer: {
    marginTop: '8%'
  },
  ingredientsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
    height: 238,
    alignSelf: 'center',
    borderRadius: 16,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#414042',
  },
  ingredientsType: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  ingredientItem: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '14%'
  },
  iconContainer: {
    backgroundColor: '#FF6079',
    width: 58,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  iconContainer2: {
    backgroundColor: colors.MedixBotPrimaryColor,
    width: 58,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  saveBtn: {
    width: '85%',
    height: 56,
    backgroundColor: colors.MedixBotPrimaryColor,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '20%',
  },
  saveBtnTxt: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
  },
  ingredientName: {
    fontSize: 15,
    color: colors.newBlack,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 15
  },
  ingredientAmount: {
    color: 'black'
  },
  foodSelectionInputContainer: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 34,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '77%',
    marginLeft: '6%'
  },
  foodSelectionInput: {
    color: '#414042',
    fontFamily: 'Lora-Medium',
    fontSize: 14,
    textAlign: 'left',
    width: '75%',
    paddingLeft: 15,
  },
  cameraIconContainer: {
    borderWidth: 1,
    borderRadius: 15,
    width: 33,
    height: 33,
    borderColor: '#58595B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoPreviewBox: {
    width: 268, 
    height: 184, 
    borderWidth: 1, 
    marginVertical: '10%', 
    marginHorizontal: '6%',
    borderRadius: 10,
    borderColor: colors.newBlack
  },
  numInput: {
    borderRadius: 8,
    backgroundColor: 'rgba(215, 234, 255, 0.1)',
    fontSize: 14,
    height: 30,
    color: '#000000',
    marginTop: -2,
    marginRight: -5,
    padding: 5
  }
});

export default styles;
