import {StyleSheet} from 'react-native';
import {buttonStyle} from '../utils/types';
const registerStyles = StyleSheet.create({
  Container: {
    backgroundColor: '#E8F4D7',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  registerPage: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 18,
    paddingVertical: 40,
  },
  formInputContainerStyle: {
    marginTop: 15,
    backgroundColor: 'rgba(65, 64, 66, 0.05)',
    borderRadius: 34,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formSelectInputStyle: {
    marginTop: 15,
    backgroundColor: 'rgba(65, 64, 66, 0.05)',
    borderRadius: 34,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  formInputStyle: {
    color: '#41416E',
    textAlign: 'left',
    width: '75%',
    paddingLeft: 15,
  },
  selectButton: {
    color: '#009444',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#414042',
  },
  BottomPart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    paddingTop: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 15,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {width: 120, height: 118, borderRadius: 100, resizeMode: 'cover'},
});

export const PicturePickerModalStyle = StyleSheet.create({
  modalTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 18,
    width: '100%',
    letterSpacing: -0.23999999463558197,
    textAlign: 'left',
    color: '#414042',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '15%',
  },
  button: {
    borderColor: '#80839361',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  buttonText: {
    color: '#414042',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '600',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
  },
});

export const MembershipModalStyle = StyleSheet.create({
  modalTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21.09,
    width: '100%',
    letterSpacing: -0.23999999463558197,
    textAlign: 'left',
    color: '#41416E',
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingBottom: 15,
  },
  buttonList: {
    flexDirection: 'row',
    height: 32,
    borderRadius: 30,
    borderColor: '#009444',
    borderWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
  },
  submitButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    width: 145,
    height: 47,
    backgroundColor: 'transparent',
    marginTop: 35,
    //marginLeft: 20,
  },
  formContainer: {
    flexDirection: 'column',
    width: '85%',
    paddingTop: 15,
  },
});

export const leftButton: buttonStyle = {
  borderTopLeftRadius: 30,
  borderBottomLeftRadius: 30,
  borderRightColor: '#009444',
  borderRightWidth: 1,
  paddingLeft: 7,
};

export const rightButton: buttonStyle = {
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30,
};

export const middleButton: buttonStyle = {
  borderRightColor: '#009444',
  borderRightWidth: 1,
};

export const whiteBackground = {
  backgroundColor: '#fff',
};
export const greenBackground = {
  backgroundColor: '#009444',
};

export const greenText = {
  color: '#009444',
};

export const lightText = {
  color: '#fff',
};

export default registerStyles;
