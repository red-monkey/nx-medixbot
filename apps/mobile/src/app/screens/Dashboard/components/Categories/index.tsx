import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import BodyHealth from '../../../../icons/BodyHealth.svg';
import MentalHealth from '../../../icons/MentalHealth.svg';
import DietHealth from '../../../icons/DietHealth.svg';
import FitnessHealth from '../../../icons/FitnessHealth.svg';

const categories = [
  { label: 'body', icon: <BodyHealth /> },
  { label: 'mental', icon: <MentalHealth /> },
  { label: 'metabolic', icon: <DietHealth /> },
  { label: 'fitness', icon: <FitnessHealth /> },
];

const Categories = () => {
  return (
    <FlatList
      style={styles.categoriesContainer}
      numColumns={2}
      data={categories}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View style={styles.category}>
              {item.icon}
              <Text style={styles.categoryLabel}>{item.label}</Text>
              <Text style={styles.categoryLabel}>health</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    elevation: 3,
  },

  category: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },

  categoryLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
    textTransform: 'capitalize',
  },
});

export default Categories;
