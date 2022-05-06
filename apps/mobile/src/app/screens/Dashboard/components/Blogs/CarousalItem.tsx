import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

interface ICarousalItem {
  url: string;
  title: string;
  timestamp: string;
}

const CarousalItem: React.FC<ICarousalItem> = ({ url, title, timestamp }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{ uri: url }}
        />
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.timestamp}>
            {moment(timestamp, 'YYYYMMDD').fromNow()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    position: 'relative',
    marginHorizontal: 0,
  },
  image: {
    width: width * 0.8,
    height: height * 0.25,
    borderRadius: 15,
  },

  textWrap: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(65, 65, 110, .5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Black',
  },

  timestamp: {
    color: '#fff',
    opacity: 0.5,
    fontFamily: 'Lora-Regular',
  },
});

export default CarousalItem;
