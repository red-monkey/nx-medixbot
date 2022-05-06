import { useNavigation } from '@react-navigation/native';
import { BlogsProps } from '../../../../utils/types';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Carousal from './Carousal';

const Blogs = () => {
  const navigation = useNavigation<BlogsProps>();
  return (
    <View style={styles.blogsContainer}>
      <View style={styles.top}>
        <Text style={styles.title}>newsfeeds</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
          <Text style={styles.viewAll}>view all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Carousal />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blogsContainer: {
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    elevation: 3,
  },

  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    color: '#41416E',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    textTransform: 'capitalize',
  },

  viewAll: {
    color: '#4C5DF4',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    textTransform: 'capitalize',
  },
});

export default Blogs;
