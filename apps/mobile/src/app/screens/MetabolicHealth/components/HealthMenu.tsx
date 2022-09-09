import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowIcon from '../../../icons/healthIcons/ArrowIcon';
import sharedStyles from '../../../styles/SharedStyles';
import { colors } from '../../../variables/colors';

export type MetabolicMenuProps = {
  title: string;
  icon: any;
  measure: string;
  time: string;
  path?: string;
};

const HealthMenu = ({
  title,
  icon,
  time,
  measure,
  path,
}: MetabolicMenuProps) => {
  const navigation = useNavigation<any>();
  return (
    <View style={BoxStyles.container}>
      <View
        style={[
          sharedStyles.row,
          sharedStyles.alignCenter,
          sharedStyles.justifyCenter,
        ]}
      >
        <View style={BoxStyles.iconContainer}>{icon}</View>
        <View
          style={{
            paddingVertical: '12%',
            justifyContent: 'space-between',
            height: 90,
            marginLeft: 10,
          }}
        >
          <Text style={BoxStyles.title}>{title}</Text>
          <Text style={BoxStyles.time}>{time}</Text>
        </View>
      </View>
      <View
        style={{ height: '80%', justifyContent: 'space-between', width: 55 }}
      >
        <TouchableOpacity
          onPress={path && (() => navigation.navigate(path))}
          style={[
            BoxStyles.iconContainer,
            { backgroundColor: colors.newPink, width: 40, height: 40, top: 8 },
          ]}
        >
          <ArrowIcon />
        </TouchableOpacity>
        <Text
          style={[
            BoxStyles.time,
            { fontSize: 10, fontWeight: '800', top: -5, left: -5 },
          ]}
        >
          {measure}
        </Text>
      </View>
    </View>
  );
};

export default HealthMenu;

const BoxStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: colors.newLightBlue,
    borderWidth: 1.5,
    marginTop: 15,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: colors.MedixBotPrimaryColor,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: colors.newBlack,
  },
  time: {
    fontSize: 14,
    fontFamily: 'Lora-Regular',
    color: colors.newBlack,
  },
});
