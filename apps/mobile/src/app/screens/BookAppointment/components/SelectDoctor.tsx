import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../../../styles/AppointmentStyles'
import SearchDoctorBar from './SearchDoctorBar'
import EllipseIcon from '../../icons/appointmentIcons/EllipseIcon.svg'
import StarIcon from '../../icons/appointmentIcons/StarIcon.svg'
import { useNavigation } from '@react-navigation/native'
import { DoctorDetailsProps, TDoctor } from '../../../utils/types'
import { useAppSelector } from '../../../utils/hooks'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { setDoctor } from '../../../redux/actions/appointment'
import loginStyles from '../../../styles/LoginPageStyles'

const liveDoctors = [
  {imgUri: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1658252456~exp=1658253056~hmac=0ffe26c9ee75ebce0ba575896687ed2c19a6b4ab5c7c1537b441648c71025bfc&w=1380'},
  {imgUri: 'https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg'},
  {imgUri: 'https://cdn.create.vista.com/api/media/medium/444199198/stock-photo-woman-doctor-crossed-arms-isolated?token='},
  {imgUri: 'https://doctorsofturkey.com/uploads/doctor_photos/233/profile_image/n1K5sko3ZvpDReLg.jpg'},
  {imgUri: 'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1658252456~exp=1658253056~hmac=dcae096243ab0305bed3fdbcaacb46409ead3fa70f742a2fbc79960e38440903&w=1380'},
]


const popularDoctors: TDoctor[] = [
  { title:'Dr.', name:'Elliot Alderson', description:'Urologist in Medixbot hospital', rate: '4.9', reviewNumber: '30', imgUri: 'https://oak-street-health.imgix.net/nappy-waxbill/production/heros/how-do-i-find-doctors-who-accept-medicare-near-me.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=488&q=60&w=500&s=440167ab45afdd2c0f1dc5897ea9c2ca', patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. \n\n Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Dr.', name:'Mary Jane', description:'Ortopedist in Medixbot hospital', rate: '4.5', reviewNumber: '56', imgUri: 'https://www.evercare.ng/wp-content/uploads/2021/02/Dr-Mirabel-Nwosu-1.jpg', patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons.\n Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Dr.', name:'Peter Parker', description:'Cardiothoracic and Vascular Surgeon in Medixbot hospital', rate: '4.6', reviewNumber: '16', imgUri: 'https://www.evercare.ng/wp-content/uploads/2021/02/Dr-Andriy-Danyltsiv-1.jpg', patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Op. Dr.', name:'Jane Doe', description:'Cardiologist in Medixbot hospital', rate: '4.7', reviewNumber: '25', imgUri: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1658252456~exp=1658253056~hmac=0ffe26c9ee75ebce0ba575896687ed2c19a6b4ab5c7c1537b441648c71025bfc&w=1380',patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Dr.', name:'Brend Khan', description:'Ortopedist in Medixbot hospital', rate: '4.9', reviewNumber: '44', imgUri: 'https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg', patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Dr.', name:'Leyla Yilmaz', description:'Urologist in Medixbot hospital', rate: '4.4', reviewNumber: '8', imgUri: 'https://cdn.create.vista.com/api/media/medium/444199198/stock-photo-woman-doctor-crossed-arms-isolated?token=', patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Prof. Dr.', name:'Ahmet Turkoglu', description:'Cardiologist in Medixbot hospital', rate: '4.8', reviewNumber: '19', imgUri: 'https://doctorsofturkey.com/uploads/doctor_photos/233/profile_image/n1K5sko3ZvpDReLg.jpg', patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
  { title:'Dr.', name:'Al Pacino', description:'Anaesthetist in Medixbot hospital', rate: '4.2', reviewNumber: '27', imgUri: 'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1658252456~exp=1658253056~hmac=dcae096243ab0305bed3fdbcaacb46409ead3fa70f742a2fbc79960e38440903&w=1380',patients: 220, experience: '20 yr', about: 'MBBS, Ph.D., Fellow, International College of Surgeons. Ex- Professor & Head of Department Department of Cardiology Harvard University', availability: ['9:00 AM', '10:30 AM' , '11:00 AM', '02:00 PM', '3:30 PM', '4:30 PM' , '5:30 PM']},
]

const SelectDoctor = ({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) => {
  const [choiceNotMade, setChoiceNotMade] = useState<boolean>(false)
  const [selectedDoctor, setSelectedDoctor] = useState<TDoctor>()
  const dispatch = useDispatch<Dispatch>()
  const navigation = useNavigation<DoctorDetailsProps>()
  const confirm = () => {
    if(!selectedDoctor) {
      setChoiceNotMade(true);
      return
    }else {
      dispatch(setDoctor(selectedDoctor));
      setStep(4)
    }
  }
  return (
    <View>
      <SearchDoctorBar />

      {/* Live Doctors Section */}

      <View style={styles.liveDoctorsSection}>
        <Text style={styles.liveDoctorsHeader}>Live Doctors</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.liveDoctors}>
          {liveDoctors.map(({imgUri},i) => {
            return(
              <TouchableOpacity key={i} style={styles.liveDoctorImageContainer}>
                <Image style={styles.liveDoctorImage} source={{uri: imgUri}} />
                <View style={styles.ellipseIcon}><EllipseIcon /></View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>

{/* Popular Doctors Section */}

<View style={styles.popularDoctorsSection}>
  <Text style={styles.popularDoctorsHeader}>Popular Doctors</Text>
  {popularDoctors.map((props,i) => {
    return(
      <TouchableOpacity key={i} onPress={()=> setSelectedDoctor(props)} style={[styles.popularDoctors, selectedDoctor?.name === props.name ? styles.selectedDoctor : null]}>
        <TouchableOpacity onPress={()=>navigation.navigate('DoctorDetails',{doctor: props})}>
          <Image style={styles.popularDoctorImage} source={{uri: props.imgUri}} />
        </TouchableOpacity>
        <View style={styles.popularDoctorInfosContainer}>
            <Text style={styles.popularDoctorName}>{props.title} {props.name}</Text>
          <Text adjustsFontSizeToFit style={styles.popularDoctorDescripton}>{props.description}</Text>
          <View style={styles.doctorCritics}>
            <Text style={styles.starIcon}> <StarIcon /> </Text>
            <Text style={styles.popularDoctorRate}>{props.rate}</Text>
            <Text style={styles.popularDoctorReview}>({props.reviewNumber} reviews)</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  })}
  </View>
  {choiceNotMade && <Text style={[loginStyles.errorText,{textAlign: 'center'}]}>Please choose a doctor from the list</Text>}
  <TouchableOpacity onPress={confirm} style={styles.nextBtn}>
    <Text style={styles.nextBtnTxt}>Next</Text>
  </TouchableOpacity>

  </View>
  )
}

export default SelectDoctor