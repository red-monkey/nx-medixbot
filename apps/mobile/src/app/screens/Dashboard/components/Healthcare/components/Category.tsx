import { useNavigation } from '@react-navigation/native'
import { colors } from 'apps/mobile/src/app/variables/colors'
import React from 'react'
import { View,StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { TCategory } from '..'

type Props = {
    category: TCategory,
}

const Category = (props: Props) => {
  const bgColor = props.category.color + '9F' ;
  const Icon = props.category.iconPath;
  const navigation = useNavigation<any>();
  const navigateToScreen = () => {
    navigation.navigate(props.category.path);
  }
  return (
    <View style={{width: 79, height: 100, alignItems: 'center'}}>
    <TouchableOpacity onPress={props.category.path ? navigateToScreen : null} style={[styles.container,{borderColor: props.category.color, backgroundColor: bgColor}]}>
      <Image source={props.category.iconPath} style={{width:30,height:30,resizeMode:'stretch',margin:7}}/> 
       {/*  <Icon />*/} 
    </TouchableOpacity>
    <Text style={{color: colors.Text, fontSize: 10.5, fontFamily: 'Montserrat-Medium', textAlign: 'center'}}>{props.category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 2
    }
})
export default Category