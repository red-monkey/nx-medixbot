import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/AppointmentStyles'
import Header from '../Patient/components/Header'
import ClockIcon from '../../icons/appointmentIcons/ClockIcon.svg'
import RightArrowIcon from '../../icons/appointmentIcons/RightArrowIcon.svg'

const descriptionCard = [
    {header: 'Patients', info: '200+'},
    {header: 'Exp.', info: '20 yr'},
    {header: 'Rating', info: '4.9'},
  ]

const DoctorDetails = () => {

  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop: 40}]} >
        <Header title='Doctor Details'/>
        <View style={styles.screenContentCart}>

            <View style={styles.doctorDetailsCard}>
                <Image style={styles.doctorDetailImage} source={{uri: 'https://cdn.create.vista.com/api/media/medium/444199198/stock-photo-woman-doctor-crossed-arms-isolated?token='}}/>
                <View style={styles.doctorDetailTxtGroup}>
                    <Text style={styles.detailCardDoctorName}>Dr. John Doe</Text>
                    <Text style={styles.detailCardDescripton}>Cardiologist in Medixbot hospital</Text>
                </View>
            </View>

            <View style={styles.doctorDescriptionCardContainer}>
                {descriptionCard.map((props) => {
                    return(
                        <View style={styles.doctorDescriptionCard}>
                            <Text style={styles.descriptionCardHeader}>{props.header}</Text>
                            <Text style={styles.descriptionCardTxt}>{props.info}</Text>
                        </View>
                    )
                })}
            </View>

            <View style={styles.aboutDoctorContainer}>
                <Text style={styles.aboutDoctorHeader}>About</Text>
                <Text style={styles.aboutDoctorDescripton}>{'\n'}MBBS, Ph.D., Fellow, International College of Surgeons.{'\n'}</Text>
                <Text style={styles.aboutDoctorDescripton}>Ex- Professor & Head of Department Department of Cardiology {'\n'}Harvard University</Text>
            </View>

            <View style={styles.availabilityContainer}>
                <View style={styles.availabilityIcon}>
                    <ClockIcon />
                </View>
                <View style={styles.availabilityTxtGroup}>
                    <Text style={styles.availabilityTxt}>Availability</Text>
                    <Text style={styles.availableTime}>9 AM - 9 PM</Text>
                </View>
                <View style={styles.rightArrowIcon}>
                    <RightArrowIcon />
                </View>
            </View>

            <TouchableOpacity style={styles.bookNowBtn}>
                    <Text style={styles.bookNowBtnTxt}>Book Now</Text>
            </TouchableOpacity>
          
        </View>
    </ScrollView>
  )
}

export default DoctorDetails;