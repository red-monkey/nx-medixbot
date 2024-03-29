import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../variables/colors';
const loginStyles = StyleSheet.create({
  loginPage: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 15,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 18,
    paddingVertical: 40,
  },
  loginPageTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.23999999463558197,
    textAlign: 'left',
    color: '#41416E',
  },
  
  textGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 50,
    width: 180,
  },
  loginPageText: {
    fontFamily: 'Lora-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.23999999463558197,
    textAlign: 'left',
    color: '#41416E',
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 125,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3095E2',
    height: 60,
  },
  selectBtnText: {
    fontFamily: 'Lora-Regular',
    width: 50,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: -0.23999999463558197,
    textAlign: 'left',
    color: '#3095E2',
  },
  formContainer: {
    flexDirection: 'column',
    paddingRight: 10,
  },
  formInputStyle: {
    fontFamily: 'Lora-Regular',
    color: '#41416E',
    textAlign: 'left',
    width: '75%',
  },
  phoneInputStyle: {
    color: '#41416E',
    textAlign: 'left',
    borderRightColor: '#ECECED',
    borderRightWidth: 1,
    paddingRight: 7,
  },
  formContainerStyle: {
    marginTop: 15,
    backgroundColor: 'rgba(65, 64, 66, 0.05)',
    borderRadius: 34,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signInButton: {
    width: 300,
    height: 47,
    backgroundColor: colors.MedixBotPrimaryColor,
    marginTop: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  forgotPassword: {
    color: colors.MedixBotPrimaryColor,
    fontWeight: '500',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    textAlign: 'right',
    marginTop: 10,
  },
  resetPassword: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    textAlign: 'center',
  },
  iconGroupId: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 7,
  },
  icon: {
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  textFaceIdLogin: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
  },
  googleBtn: {
    width: 140,
    height: 60,
    borderRadius: 34,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookBtn: {
    width: 140,
    height: 60,
    borderRadius: 34,
    backgroundColor: '#305CCD',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  socialMediaBtnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  bottomPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  errorText: {
    color: colors.error,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.23999999463558197,
    marginLeft: 10,
    marginTop: 5,
  },
});

export const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    bottom: -20,
  },
  modalView: {
    width: Dimensions.get('screen').width,
    backgroundColor: colors.MedixBotPrimaryColor,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 40,
    paddingTop: 40,
  },
  modalButton: {height: '100%', justifyContent: 'center', width: 20},
  optionStyle: {
    height: 35,
    justifyContent: 'flex-start',
    width: '83%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionStyleSelected: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginStart: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  optionTextStyle: {
    fontFamily: 'Lora-Bold',
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0.23999999463558197,
    textAlign: 'left',
    color: '#fff',
    marginLeft:7
  },
  selectedText: {
    color: '#414042'
  },
  modalTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 18,
    width: '80%',
    letterSpacing: -0.23999999463558197,
    textAlign: 'left',
    color: '#fff',
    paddingHorizontal: 8,
    paddingBottom: 15,
  },
});

export const forgotPassword = StyleSheet.create({
  textGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectButtonContainer: {
    height: '20%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginBottom: 10,
  },
  bottomPart: {
    height: '30%',
    marginTop: 100,
    justifyContent: 'space-evenly',
  },
});

export const verificationCode = StyleSheet.create({
  verificationPageTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.23999999463558197,
    textAlign: 'center',
    color: '#414042',
  },
  verificationPageText: {
    fontFamily: 'Lora-Regular',
    fontSize: 14,
    marginTop: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.23999999463558197,
    textAlign: 'center',
    color: '#41416E',
  },
  verificationPageTextGreen: {
    fontFamily: 'Lora-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.23999999463558197,
    textAlign: 'center',
    color: colors.MedixBotPrimaryColor,
  },
  formInputStyle: {
    color: '#41416E',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    fontSize: 16,
  },
  formContainerStyle: {
    marginBottom: 15,
    width: 60,
    height: 60,
    backgroundColor: '#4140420D',
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'rgba(65, 64, 66, 0.05)',
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerStyle: {
    color: colors.MedixBotPrimaryColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  resendCode: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.MedixBotPrimaryColor,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
  },
  timerContainer: {
    height: '18%',
  },
  buttonContainer: {
    height: '28%',
    marginTop: '20%',
    justifyContent: 'space-evenly',
  },
});

export const resetPass = StyleSheet.create({
  resetPage: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 15,
    width: '100%',
    height: '92%',
    paddingLeft: 30,
    paddingRight: 18,
    paddingVertical: 40,
  },
});

export default loginStyles;
