import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import RightArrowIcon from '../../../../icons/RightArrowIcon.svg';

interface INotification {
  color: string;
  icon: JSX.Element;
  category: string;
  count: number;
}

const Notification: React.FC<INotification> = ({
  category,
  count,
  icon,
  color,
}) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.innerContainer}>
        <View style={styles.categoryContainer}>
          {icon}
          <Text style={[styles.categoryLabel, { color }]}>{category}</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={[styles.count, { color }]}>{count}</Text>
          <RightArrowIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 15,
  },

  innerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoryLabel: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    textTransform: 'capitalize',
    marginLeft: 10,
  },

  countContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  count: {
    fontFamily: 'Lora-Bold',
    fontSize: 14,
    marginRight: 20,
  },
});

export default Notification;
