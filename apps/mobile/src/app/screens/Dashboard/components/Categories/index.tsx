import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import BodyHealth from '../../../../icons/BodyHealth.svg';
import MentalHealth from '../../../icons/MentalHealth.svg';
import DietHealth from '../../../icons/DietHealth.svg';
import FitnessHealth from '../../../icons/FitnessHealth.svg';
import { LinearTextGradient } from 'react-native-text-gradient';

const IconWrapper: React.FC<ViewProps & { backgroundColor: string }> = ({
  children,
  backgroundColor,
}) => {
  return (
    <View style={[styles.categoryIcon, { backgroundColor }]}>{children}</View>
  );
};

const categories = [
  {
    label: 'metabolic',
    icon: (
      <IconWrapper backgroundColor="#FFBABA">
        <DietHealth />
      </IconWrapper>
    ),
  },
  {
    label: 'fitness',
    icon: (
      <IconWrapper backgroundColor="#9800CC">
        <FitnessHealth />
      </IconWrapper>
    ),
  },
  {
    label: 'body',
    icon: (
      <IconWrapper backgroundColor="#F178B6">
        <BodyHealth />
      </IconWrapper>
    ),
  },
  {
    label: 'mental',
    icon: (
      <IconWrapper backgroundColor="#5D5FEF">
        <MentalHealth />
      </IconWrapper>
    ),
  },
];

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <LinearTextGradient
        style={styles.sectionTitle}
        locations={[0.1476, 1.2108]}
        colors={['#7374E8', '#EF9A9A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text>360 degree health</Text>
      </LinearTextGradient>
      <View style={styles.flatListWrapper}>
        <FlatList
          numColumns={2}
          data={categories}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.category}>
                  <View>
                    <Text style={styles.categoryLabel}>{item.label}</Text>
                    <Text style={styles.categoryLabel}>health</Text>
                  </View>
                  {item.icon}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    backgroundColor: '#FCDDEC',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },

  flatListWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  category: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 8,
    borderRadius: 15,
  },

  categoryLabel: {
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    color: '#41416E',
    textTransform: 'capitalize',
    marginRight: 5,
  },

  categoryIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});

export default Categories;
