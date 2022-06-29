import React, { useState } from 'react'
import { View,Image,Text,StyleSheet } from 'react-native'
import { IUser } from '../../../apollo/GraphQL/types';
import { useIsUser } from '../../../customHooks/useIsUser';
import GlobeIcon from '../../../icons/Globe';
import LocationIcon from '../../../icons/Location';
import styles from '../../../styles/DashboardStyles'
import sharedStyles from '../../../styles/SharedStyles';
import { colors } from '../../../variables/colors';
import Medixbot from '../../../../icons/Medixbot.svg'
import { ChallengeBar, EmojiBar } from '../../Dashboard/components/GreetingBox/ActionBar';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/store/ConfigureStore';


const TopBar = () => {
    const { mood } = useSelector((state: AppState) => state.challengeReducer);
    const [, getUser, deleteUserData] = useIsUser();
    const [userInf,setUserInf] = useState<IUser | null>();
    const user = getUser().then(user => setUserInf(JSON.parse(user)));
    return (
      <View>
        <View style={[sharedStyles.row,{justifyContent: 'space-between', marginBottom: 10}]}>
          <Image
            style={styles.userAvatar}
            source={require('../../../../../../../assets/images/profile.jpg')}
          />
          <View>
            <Text style={styles.userName}>{userInf?.fullName}</Text>
            <View style={[sharedStyles.row,sharedStyles.alignCenter]}>
                <GlobeIcon />
                <Text style={BarStyle.smallText}>English</Text>
            </View>
            <View style={[sharedStyles.row,sharedStyles.alignCenter]}>
                <LocationIcon />
                <Text style={BarStyle.smallText}>Luxembourg</Text>
            </View>    
          </View>
          <View style={[sharedStyles.row,sharedStyles.alignCenter,{marginLeft: 10}]}>
                <Medixbot />
                <Text style={BarStyle.status}>Patient of 
                 <Text style={{fontSize: 18}}> MEDIXBOT</Text>
                </Text>
          </View>
        </View>
            {mood ? <ChallengeBar mood={mood} /> : <EmojiBar />}
        </View>
    )

}

const BarStyle = StyleSheet.create({
    smallText: {
        color: colors.MedixBotPrimaryColor,
        fontFamily: 'Montserrat-Medium',
        marginLeft: 5,
        fontSize:11
    },
    status: {
        position: 'relative',
        fontFamily: 'Montserrat-Black',
        fontSize: 14,
        color: '#41416E',
        marginLeft: 5,
        width: 120
      },
})

export default TopBar