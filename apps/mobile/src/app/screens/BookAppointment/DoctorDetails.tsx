import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/AppointmentStyles'
import Header from '../Patient/components/Header'
import ClockIcon from '../../icons/appointmentIcons/ClockIcon.svg'
import RightArrowIcon from '../../icons/appointmentIcons/RightArrowIcon.svg'
import { useNavigation } from '@react-navigation/native'
import { AppointmentStackParamList, DoctorDetailsProps } from '../../utils/types'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { setDoctor } from '../../redux/actions/appointment'

const descriptionCard = [
    {header: 'Patients', info: '200+'},
    {header: 'Exp.', info: '20 yr'},
    {header: 'Rating', info: '4.9'},
  ]

const DoctorDetails = ({route}) => {
  const {doctor} = route.params
  const dispatch = useDispatch<Dispatch>()
  const navigation = useNavigation<DoctorDetailsProps>()
  const confirm = () => {
    dispatch(setDoctor(doctor))
    navigation.navigate('BookAppointment', {step: 4})
  }
  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop: 40}]} >
        <Header title='Doctor Details'/>
        <View style={styles.screenContentCart}>

            <View style={styles.doctorDetailsCard}>
                <Image style={styles.doctorDetailImage} source={{uri: doctor.imgUri}}/>
                <View style={styles.doctorDetailTxtGroup}>
                    <Text style={styles.detailCardDoctorName}>{doctor.title} {doctor.name}</Text>
                    <Text style={styles.detailCardDescripton}>{doctor.description}</Text>
                </View>
            </View>

            <View style={styles.doctorDescriptionCardContainer}>
                {descriptionCard.map((props,i) => {
                    return(
                        <View style={styles.doctorDescriptionCard} key={i}>
                            <Text style={styles.descriptionCardHeader}>{props.header}</Text>
                            <Text style={styles.descriptionCardTxt}>{props.info}</Text>
                        </View>
                    )
                })}
            </View>

            <View style={styles.aboutDoctorContainer}>
                <Text style={styles.aboutDoctorHeader}>About</Text>
                <Text style={styles.aboutDoctorDescripton}>{doctor.about}</Text>
            </View>

            <View style={styles.availabilityContainer}>
                <View style={styles.availabilityIcon}>
                    <ClockIcon />
                </View>
                <View style={styles.availabilityTxtGroup}>
                    <Text style={styles.availabilityTxt}>Availability</Text>
                    <Text style={styles.availableTime}>{doctor.availability[0]} - {doctor.availability[doctor.availability.length - 1]}</Text>
                </View>
                <View>
                    <RightArrowIcon />
                </View>
            </View>

            <TouchableOpacity style={styles.bookNowBtn} onPress={confirm}>
                    <Text style={styles.bookNowBtnTxt}>Book Now</Text>
            </TouchableOpacity>
          
        </View>
    </ScrollView>
  )
}

export default DoctorDetails;