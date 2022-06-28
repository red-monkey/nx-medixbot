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
//   import SearchIcon from "../../../assets/search.svg";
//   import SearchSettings from "../../../assets/settingsGrid.svg";
//   import Arrow from "../../../assets/arrow.svg";
import Arrow from '../../../icons/marketplaceicons/arrow.svg';
import SearchSettings from '../../../icons/marketplaceicons/settingsGrid.svg';

type Props = {};

const deviceWidth = Dimensions.get('window').width;

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View>
          <SearchIcon />
        </View>
        <TextInput
          style={{ width: '80%', paddingLeft: 10 }}
          placeholder="Looking for..."
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
    padding: 8,
    marginBottom: 25,
    borderColor: 'rgba(65, 64, 66, 0.15)',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
