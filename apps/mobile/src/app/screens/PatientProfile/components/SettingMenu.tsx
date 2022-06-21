import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity,Text,StyleSheet, View } from 'react-native'
import RightArrowIcon from '../../../../icons/RightArrow.svg';
import sharedStyles from '../../../styles/SharedStyles';

type Props = {
    icon?: any,
    name: string,
    component?: string,
    noBorder?: boolean
}

const SettingMenu = (props: Props) => {
  const navigation = useNavigation<any>();
  const navigateToScreen = () => {
    navigation.navigate(props.component);
  }
  return (
    <TouchableOpacity onPress={ props.component ? navigateToScreen : null} style={[SettingMenuStyle.container,props.noBorder ? {borderBottomWidth: 0} : null]}>
        <View style={[sharedStyles.row,sharedStyles.alignCenter]}>
            {props.icon ? props.icon : null}
            <Text style={SettingMenuStyle.text}>{props.name}</Text>            
        </View>
        <RightArrowIcon />
   </TouchableOpacity>
  )
}

const SettingMenuStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 50,
        borderBottomColor: '#00000020',
        borderBottomWidth: 1
    },
    text: {
        color: '#000',
        fontFamily: 'Montserrat-Medium',
        marginLeft: 10
    }
})
export default SettingMenu