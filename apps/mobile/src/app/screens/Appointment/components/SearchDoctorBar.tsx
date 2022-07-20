import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import SearchIcon from '../../../icons/appointmentIcons/SearchIcon.svg'
  import FilterIcon from '../../../icons/appointmentIcons/FilterIcon.svg'
  
  const SearchDoctorBar = () => {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <View>
            <SearchIcon />
          </View>
          <TextInput
            style={{  paddingLeft: 10, fontFamily: "Lora-Medium", color: '#000', fontSize: 11 }}
            placeholder=" Search doctor......"
            placeholderTextColor="#8AA0BC"
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('press')}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <TouchableOpacity style={styles.filterBtn}>
            <FilterIcon />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SearchDoctorBar;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#EEF6FC',
      height: 57,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      width: '80%',
      borderRadius: 18,
      marginTop: 30,
      borderColor: '#EEF6FC',
      alignSelf: 'center',
      marginBottom: 5,
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 15,
      width: '80%',
    },
    filterBtn: {
        marginRight: 20
    }
  });


  