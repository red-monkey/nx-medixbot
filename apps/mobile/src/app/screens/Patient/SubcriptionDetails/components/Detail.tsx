import { IUser } from '../../../../apollo/GraphQL/types';
import { useIsUser } from '../../../../customHooks/useIsUser';
import { colors } from '../../../../variables/colors';
import React, { useState } from 'react'
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'


function Detail() {
    const [, getUser, ] = useIsUser();
    const details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa scelerisque augue phasellus rhoncus morbi facilisis elementum. '
    const userInf = getUser()
  return (
    <View style={styles.container}>
          <View style={styles.showName}>
            <Text style={styles.text}>Name</Text>
            <Text style={[styles.text,{fontFamily: 'Montserrat-Medium'}]}>{userInf?.fullName}</Text>
          </View>
          <View style={styles.detailTexts}>
            <Text style={[styles.text, { marginBottom: 4 }]}>Detail</Text>
            <Text style={styles.describtionText}>
              {details}
            </Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.RenewBtn}>
              <Text style={{ fontFamily: 'Montserrat-Bold', color: '#4f60f4' }}>Renew</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UpgradeBtn}>
              <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff' }}>Upgrade</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
      color: '#000',
      fontSize: 14,
      fontFamily: 'Montserrat-Bold'
    },
    showName: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      width: '100%'
    },
    detailTexts: {
      marginHorizontal: 15,
      padding: 15,
      borderColor: '#e7e7e7',
      borderWidth: 1,
      borderRadius: 12,
    },
    describtionText: {
      fontSize: 12,
      fontFamily: 'Lora-Medium',
      color: colors.Text
    },
    buttons: {
      marginTop: 15,
      marginBottom: 30,
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    RenewBtn: {
      backgroundColor: '#fff',
      width: 143,
      height: 47,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#4f60f4',
      borderRadius: 6,
    },
    UpgradeBtn: {
      backgroundColor: '#4f60f4',
      width: 143,
      height: 47,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#4f60f4',
      borderRadius: 6,
    },
  });
  