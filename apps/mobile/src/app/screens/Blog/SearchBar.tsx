import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import SearchIcon from '../../icons/SearchIcon.svg';
import SearchFilterIcon from '../../icons/SearchFilterIcon.svg';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearchButtonPress = () => {
    if (!keyword) return;
    /* API CALL */
    setKeyword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.left}>
          <TouchableOpacity onPress={handleSearchButtonPress}>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Looking for..."
            value={keyword}
            onChangeText={(value) => setKeyword(value)}
            onEndEditing={handleSearchButtonPress}
          />
        </View>
        <TouchableOpacity>
          <SearchFilterIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 60,
  },
  searchBarContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'rgba(41,40,42,.1)',
    borderRadius: 15,
    paddingHorizontal: 10,
  },

  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  textInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Lora-Medium',
    marginLeft: 5,
    color: '#414042',
  },
});

export default SearchBar;
