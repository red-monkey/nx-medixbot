import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Text
  } from 'react-native';
  import React from 'react';
  import HospitalIcon from '../../../icons/appointmentIcons/HospitalIcon.svg'
  import { colors } from '../../../variables/colors';
  
  const SearchBar = ({setIsOpen, selectedHospital}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,selectedHospital: string}) => {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <View>
            <HospitalIcon />
          </View>
          <Text style={{ paddingLeft: 10, fontFamily: "Lora-Medium", color: selectedHospital ? '#000' :  '#A09FA0' }}>
            {selectedHospital || 'Hospital'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('press')}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <TouchableOpacity style={styles.selectBtn} onPress={()=>setIsOpen(true)}>
            <Text style={styles.selectBtnTxt}>Select</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SearchBar;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#f6f5f6',
      height: 57,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      width: '90%',
      borderRadius: 34,
      paddingHorizontal: 10,
      marginTop: 15,
      borderColor: 'rgba(65, 64, 66, 0.15)',
      alignSelf: 'center',
      marginBottom: 5
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      width: '78%'
    },
    selectBtnTxt: {
        color: colors.MedixBotPrimaryColor, 
        fontFamily: 'Lora-Medium',
        marginRight: 15
    },
    selectBtn: {
        
    }
  });
  