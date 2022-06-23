import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import styles from '../../../styles/HomepageStyles'
import Medix from '../../../icons/MedixbotMini.svg'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/store/ConfigureStore'
import { feelings, FeelingsCustomizable } from '../../Dashboard/components/GreetingBox/ActionBar'
import Settings from '../../../icons/Settings.svg'
import sharedStyles from '../../../styles/SharedStyles'

const Header = () => {
  const { mood } = useSelector((state: AppState) => state.challengeReducer);
  return (
    <View style={[styles.HeaderGroupInfo,{justifyContent: 'space-between', paddingHorizontal: 10}]}>
          {mood ? (
          <View style={{ margin: 5, aspectRatio: 1 }}><FeelingsCustomizable mood={mood} size={20}/></View>
        ) : <View/> }
        <View style={[sharedStyles.row,sharedStyles.alignCenter]}>
            <Medix />
            <Text style={style.text}>Profile</Text>
        </View>
        <TouchableOpacity>
            <Settings />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const style = StyleSheet.create({
    text: {
        color: '#41416E',
        fontFamily: 'Montserrat-Bold',
        marginLeft: 5,
        fontSize: 15
    }
})