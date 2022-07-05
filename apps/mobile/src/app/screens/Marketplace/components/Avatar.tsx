import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'


const Avatar = () => {
  return (
      <Image style={styles.wrapper} source={{uri:"https://picsum.photos/200/300"}}/>
  )
}

export default Avatar

const styles = StyleSheet.create({
    wrapper:{
        borderRadius:50,
        width:50,
        height:50
    }
})