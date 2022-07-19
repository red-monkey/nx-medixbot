import { StyleSheet } from "react-native";
import { colors } from "../variables/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      screenContentCart: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        marginTop: 20,
        paddingBottom: 35
    },
      appointmentStatusBox: {
        borderRadius: 25,
        backgroundColor: "#ececf1",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      appointmentStatusTxt: {
        fontSize: 10,
        fontFamily: 'Montserrat-Bold',
        alignContent: 'center',
        marginTop: 8,
        color: '#000000'
      },
      line: {
        width: 48, 
        height: 3, 
        backgroundColor: '#ececf1', 
        marginLeft: -44, 
        marginRight: -25, 
        marginTop: 25
      },
      healthcareIcons: {
        width: 30,
        height: 25,
      },
      healthcareIconContainer: {
        paddingTop: 14,
        paddingBottom: 15,
        paddingLeft: 11,
        paddingRight: 13.73,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        width: 56.73,
        height: 56,
        display: 'flex',
      },
      healthcareTypesCard: {
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 24,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(190,202,218,1)",
        shadowColor: "rgba(107,134,179,0.25)",
        elevation: 1,
        shadowOffset: { width: 0, height: 2 },
        width: 319,
        height: 100,
        flexDirection: 'row',
      },
      healthcareTypes: {
        alignItems: 'center',
        marginVertical: 10
      },
      healthcareTypeTxtGroup: {
        marginLeft: '7%',
        marginTop: '2%'
      },
      healthCareTypeHeader: {
        fontSize: 15, 
        color: '#0E1012', 
        fontFamily: 'Montserrat-Bold'
      },
      healthCareTypeDescription: {
        color: '#7B8D9E', 
        fontFamily: 'Lora-Regular'
      },
      inputsHeader: {
        color: '#000000',
        fontFamily: "Montserrat-Bold",
        fontSize: 16,
        paddingHorizontal: 17,
        marginBottom: 15,
      },
      inputSection: {
        paddingHorizontal: 17,
      },
      questionTxt: {
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold',
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 18,
        marginVertical: '4%'
      },
      txtInput: {
        borderRadius: 20,
        backgroundColor: "#F5F5F6",
        fontSize: 12,
        width: 319,
        height: 93,
        color: '#000000',
        paddingLeft: 15,
      },
      yesBox: {
        backgroundColor: colors.MedixBotPrimaryColor,
        borderRadius: 8,
        width: 70,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10%'
      },
      noBox: {
        backgroundColor: '#dbdffd',
        borderRadius: 8,
        width: 70,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10%'
      },
      yesNoBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      yesBtnTxt: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold'
      },
      noBtnTxt: {
        color: '#4c5df4',
        fontFamily: 'Montserrat-SemiBold'
      }
});

export default styles;