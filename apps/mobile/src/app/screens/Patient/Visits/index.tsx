import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from '../../../styles/HomepageStyles'
import loginStyles from '../../../styles/LoginPageStyles'
import Header from '../components/Header'
import VisitCard from './components/VisitCard'

export type TVisit = {
    InstitutionName: string,
    ClinicName: string,
    DoctoName: string,
    HospitalTrackingNo: string
}
const visits: TVisit[] = [
    {
        InstitutionName: 'Turkish Ministry of Health sakarya training and reserach hospital',
        ClinicName: 'Ortopedy',
        DoctoName: 'Ali Lazim',
        HospitalTrackingNo: '02145236'
    },
    {
        InstitutionName: 'Turkish Ministry of Health sakarya training and reserach hospital',
        ClinicName: 'Surgery',
        DoctoName: 'John Doe',
        HospitalTrackingNo: '02145236'
    }
]
const Visits = () => {
  return (
    <ScrollView contentContainerStyle={[styles.Container]}>
        <Header title={'Visits'} />
        <View style={[loginStyles.loginPage,{paddingTop: 25, paddingBottom: 70, paddingLeft: 10,paddingRight: 10}]}>
            <Text style={{fontFamily: 'Montserrat-Bold',color: '#000',paddingLeft: 5, marginBottom: 10}}>Please Add The Correct Information</Text>
            {visits.map((item,i)=>(
                <VisitCard key={i} InstitutionName={item.InstitutionName} ClinicName={item.ClinicName} DoctoName={item.DoctoName} HospitalTrackingNo={item.HospitalTrackingNo} />
            ))}
        </View>
    </ScrollView>
  )
}

export default Visits