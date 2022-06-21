import React from "react";
import { TouchableOpacity, View } from "react-native";
import DollarIcon from "../../../icons/Dollar";
import HelpIcon from "../../../icons/Help";
import LinkIcon from "../../../icons/Link";
import MedixcoinIcon from "../../../icons/Medixcoin.svg";
import RingIcon from "../../../icons/Ring";
import UserIcon from "../../../icons/User";
import WalletIcon from "../../../icons/Wallet";
import { styles } from "../../Dashboard/components/Appointment";
import SettingMenu from "./SettingMenu";

const ProfileSettings = () => {
    return(
        <View style={[styles.appointmentContainer]}>
            <SettingMenu name={'Edit Profile'} icon={<UserIcon />} />
            <SettingMenu name={'Subscription Detail'} icon={<WalletIcon />} />
            <SettingMenu name={'Payment Method'} icon={<DollarIcon />} />
            <SettingMenu name={'Notification Settings'} icon={<RingIcon />} />
            <SettingMenu name={'Connected Devices'} icon={<LinkIcon />} />
            <SettingMenu name={'MediXcoins'} icon={<MedixcoinIcon />} />
            <SettingMenu name={'Help'} icon={<HelpIcon />} noBorder/>
        </View>
    )
};

export default ProfileSettings;