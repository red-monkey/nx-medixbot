import React from "react"
import { ScrollView,View,Text } from "react-native"
import styles from "../../../styles/HomepageStyles"
import loginStyles from "../../../styles/LoginPageStyles"
import * as appointment from "../../Dashboard/components/Appointment";
import SettingMenu from "../../PatientProfile/components/SettingMenu";
import Header from "../components/Header"

const MedicalHistory = () => {
    return (
        <ScrollView contentContainerStyle={[styles.Container,{paddingBottom: 30}]} scrollEnabled>
            <Header title={'Medical History'}/>
            <View style={[loginStyles.loginPage,{paddingVertical: 25, paddingLeft: 20}]}>
                <Text style={{fontFamily: 'Montserrat-Bold',color: '#000',paddingLeft: 5}}>Please Add the Correct Infomation</Text>
                <View style={[appointment.styles.appointmentContainer]}>
                    <SettingMenu name={'Alcohol Use Disorder'} />
                    <SettingMenu name={'Fibormyalgia'} />
                    <SettingMenu name={'Allergies'} />
                    <SettingMenu name={'Gastrointestinal Bleeding'} />
                    <SettingMenu name={'Anxiety'} />
                    <SettingMenu name={'Glaucoma'} />
                    <SettingMenu name={'Arthritis'} />
                    <SettingMenu name={'Gout'} />
                    <SettingMenu name={'Asthma'} />
                    <SettingMenu name={'Headaches'} />
                    <SettingMenu name={'Atrial Fibrillation'} noBorder/>
                </View>
            </View>
        </ScrollView>       
    )
}

export default MedicalHistory;