import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchIcon from '../../../icons/marketplaceicons/search.svg';
import Arrow from '../../../icons/marketplaceicons/arrow.svg';
import SearchSettings from '../../../icons/marketplaceicons/settingsGrid.svg';


const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View>
          <SearchIcon />
        </View>
        <TextInput
          style={{ width: '75%', paddingLeft: 10, fontFamily: "Lora-Medium", color: '#000' }}
          placeholder="Looking for..."
          placeholderTextColor="#A09FA0"
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log('press')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <View>
          <Arrow />
        </View>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <SearchSettings />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 57,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 25,
    borderColor: 'rgba(65, 64, 66, 0.15)',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
