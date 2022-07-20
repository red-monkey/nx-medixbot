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
        fontSize: 9.5,
        fontFamily: 'Montserrat-Bold',
        alignContent: 'center',
        marginTop: 8,
        color: '#000000',
        width: '99%',
        textAlign: 'center'
      },
      line: {
        minWidth: '25%', 
        height: 3, 
        backgroundColor: '#ececf1', 
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
      },
      liveDoctorImageContainer: {
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
      },
      liveDoctorImage: {
        width: 91,
        height: 91,
        borderRadius: 25,
        marginHorizontal: 4
      },
      liveDoctors: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        
      },
      liveDoctorsSection: {
        paddingHorizontal: 30,
        marginTop: 15
      },
      liveDoctorsHeader: {
        color: '#0E1012',
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 18,
        marginVertical: '4%',
        marginLeft: '2%'
      },
      ellipseIcon: {
        position: 'absolute',
        top: '1%',
        right: '2%'
      },
      popularDoctorsSection: {
        paddingHorizontal: 20,
        marginTop: 25
      },
      popularDoctorsHeader: {
        color: '#0E1012',
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 18,
        marginTop: '4%',
        marginLeft: '5%',
        marginBottom: 6
      },
      popularDoctors: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: '4%'
      },
      popularDoctorImage: {
        borderRadius: 26,
        width: 104,
        height: 115,
        marginLeft: '-1%'
      },
      popularDoctorInfosContainer: {
        justifyContent: 'space-around',
        marginRight: '-3%',
        maxWidth: '62%',
        width: '65%',
      },
      doctorCritics: {
        display: 'flex',
        flexDirection: 'row',
        flex: .1,
        justifyContent: 'space-evenly',
        alignSelf: 'flex-start',
        alignItems: 'center',
      },
      popularDoctorName: {
        fontSize: 18,
        color: '#0E1012',
        fontFamily: 'Montserrat-SemiBold',
        flex: 1,
        flexWrap: 'wrap'
      },
      popularDoctorDescripton: {
        fontFamily: 'Lora-Medium',
        fontSize: 11,
        color: '#4A545E',
      },
      popularDoctorRate: {
        fontFamily: 'Lora-Bold',
        color: '#0E1012',
        marginHorizontal: '4%'
      },
      starIcon: {
        marginTop: 2
      },
      popularDoctorReview: {
        fontFamily: 'Lora-Medium',
        fontSize: 11,
        color: '#4A545E'
      }
});

export default styles;