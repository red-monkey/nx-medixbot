import React from "react"
import { ScrollView, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/HomepageStyles";
import loginStyles from "../../styles/LoginPageStyles";
import Header from "./components/Header";
import LogoutButton from "./components/LogoutButton";
import ProfileSettings from "./components/ProfileSettings";
import TopBar from "./components/TopBar";

const PatientProfile = () => {
    return(
        <ScrollView contentContainerStyle={[styles.Container,{paddingTop: 40,paddingBottom: 40}]} scrollEnabled>
            <Header />
            <View style={[loginStyles.loginPage,{paddingLeft: 17}]}>
                <TopBar />
                <ProfileSettings />
                <LogoutButton />
            </View>
        </ScrollView>
    )
}

export default PatientProfile;