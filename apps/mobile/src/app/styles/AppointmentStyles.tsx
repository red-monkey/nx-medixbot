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
        fontSize: 8,
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
      }
});

export default styles;