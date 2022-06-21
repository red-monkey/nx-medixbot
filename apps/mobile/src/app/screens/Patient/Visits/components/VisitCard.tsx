import { EyeEmoji } from 'apps/mobile/src/app/icons/EyeEmoji'
import HospitalIcon from 'apps/mobile/src/app/icons/Hospital'
import { ShareIcon } from 'apps/mobile/src/app/icons/ShareIcon'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TVisit } from '..'
import GreatEmoji from '../../../../icons/GreatEmoji.svg'
import GoodEmoji from '../../../../icons/GoodEmoji.svg'
import OkayEmoji from '../../../../icons/OkayEmoji.svg'
import BadEmoji from '../../../../icons/BadEmoji.svg'
import AwfulEmoji from '../../../../icons/AwfulEmoji.svg'
import { colors } from 'apps/mobile/src/app/variables/colors'

const VisitCard = (props: TVisit) => {
  const [feedback, setFeedback] = useState<any>(null)
  return (
    <View style={styles.infoContainer}>
    <View style={styles.row_1}>
      <View style={styles.hospitalIcon}>
        <HospitalIcon />
      </View>
      <View style={{ marginLeft: 10, marginRight: 60 }}>
        <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Medium', color: colors.Text }}>{props.InstitutionName}</Text>
      </View>
    </View>

    <View style={styles.field}>
      <Text style={{fontFamily: 'Lora-Regular'}}>Clinic Name</Text>
      <Text style={[styles.text]}>{props.ClinicName}</Text>
    </View>
    <View style={styles.field}>
      <Text style={{fontFamily: 'Lora-Regular'}}>Doctor Name</Text>
      <Text style={[styles.text]}>{props.DoctoName}</Text>
    </View>
    <View style={[styles.field,{marginBottom: 15}]}>
      <Text style={{fontFamily: 'Lora-Regular'}}>Hospital Tracking No</Text>
      <Text style={[styles.text]}>{props.HospitalTrackingNo}</Text>
    </View>
    <Text style={[styles.text, { marginBottom: 5 }]}>Evaluate</Text>
    <View style={styles.iconsContainer}>
        {feedback ? feedback :
             <>
                <TouchableOpacity onPress={() => setFeedback(<GreatEmoji />)}>
                    <GreatEmoji />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFeedback(<GoodEmoji />)}>
                    <GoodEmoji />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFeedback(<OkayEmoji />)}>
                    <OkayEmoji />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFeedback(<BadEmoji />)}>
                    <BadEmoji />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFeedback(<AwfulEmoji />)}>
                    <AwfulEmoji />
                </TouchableOpacity>
              </>  }
    </View>
            <View style={styles.Btns}>
              <TouchableOpacity style={styles.ViewDetailsBtn}>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold',textAlign: 'center' }}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ShareBtn}>
                <ShareIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.HideBtn}>
                <EyeEmoji />
              </TouchableOpacity>
            </View>
          </View>
  )
}

export default VisitCard

const styles = StyleSheet.create({
    
    subContainer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },

    text: {
      fontSize: 13,
      fontFamily: 'Montserrat-Bold',
      color: '#000',
    },
    infoContainer: {
      padding: 5,
      paddingHorizontal: 10,
      marginTop: 8,
      width: '95%',
      marginLeft: 7,
      borderRadius: 12,
      shadowColor: 'rgba(0, 0, 0, 0.8)',
      shadowOpacity: 0.1,
      elevation: 3,
      backgroundColor: '#fff'
    },
    row_1: {
      flexDirection: 'row',
      marginTop: 5,
      marginBottom: 18,
  
    },
    hospitalIcon: {
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#f0d9f7',
      borderColor: '#f0d9f7',
    },
    field: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 3,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 8,
      marginVertical: 20,
      borderRadius: 16,
      borderColor: 'rgba(65, 64, 66, 0.2)',
      borderWidth: 1,
      backgroundColor: '#f6f6f6',
    },
    Btns: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: 15,
    },
    ViewDetailsBtn: {
      backgroundColor: '#4c5df4',
      paddingVertical: 15,
      borderRadius: 10,  
      width: '57%',
    },
    ShareBtn: {
      backgroundColor: '#f6f6f6',
      borderRadius: 10,
      padding: 8,
      fontWeight: 'bold',
    },
    HideBtn: {
      padding: 13,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#b240d9',
    },
  });