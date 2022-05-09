import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export interface IProps {
  category?: string;
  title?: string;
  titleColor: string;
  imageURL?: string;
  backgroundColor: string;
  customStyle?: { [property: string]: string | number };
}

const SectionCard: React.FC<IProps> = ({
  category,
  title,
  titleColor,
  imageURL,
  backgroundColor,
  customStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { backgroundColor }, customStyle]}
    >
      {category && <Text style={styles.category}>{category}</Text>}
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{
          uri: imageURL,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    backgroundColor: '#41416E',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    width: 280,
    shadowColor: 'rgba(0, 0, 0, .8)',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  image: {
    width: 260,
    height: 200,
    borderRadius: 15,
  },

  category: {
    color: '#FCDDEC',
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Montserrat-SemiBold',
    marginVertical: 10,
  },
});

export default SectionCard;
