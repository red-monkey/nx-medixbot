import sharedStyles from '../../../../styles/SharedStyles';
import { colors } from '../../../../variables/colors';
import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity, Dimensions} from 'react-native';
import Calendar from '../../../../icons/CalendarIcon.svg'
import AgendaComponent from './components/Agenda';
const Appointment = () => {
  return (
    <View style={styles.appointmentContainer}>
      <View style={styles.header}>
        <View style={sharedStyles.row}>
          <Text style={styles.title}>Upcoming Appointments</Text>
          <Text style={styles.badge}>5</Text>
        </View>
        <TouchableOpacity style={[sharedStyles.row,sharedStyles.alignCenter]}>
          <Text style={styles.makeAppointment}>Make Appointment</Text>
          <Calendar />
        </TouchableOpacity>
      </View>
      <AgendaComponent/>
    </View>
  );
};

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '95%',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  badge: {
   backgroundColor: colors.PureGreenBackground,
   width: 21,
   height: 21,
   textAlign: 'center',
   textAlignVertical: 'center',
   borderRadius: 7,
   fontWeight: 'bold',
   fontSize: 15,
   color: colors.PureGreen
  },
  title: {
    fontFamily: 'Lora-Bold',
    color: colors.Text,
    fontSize: 12,
    textAlignVertical: 'center'
  },
  appointmentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'column',
    marginVertical: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    elevation: 3,
    justifyContent: 'flex-start',
    paddingVertical: 5,
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: 220
  },
  makeAppointment: {
    color: colors.MedixBotPrimaryColor,
    fontFamily: 'Montserrat-Bold',
    fontSize: 12
  }
});

export default Appointment;
