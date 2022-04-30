import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../styles/HomepageStyles';
import '../../../../../assets/images/Logo.png';
import {InformationProps} from '../../../utils/types';

function Information({title,description}: InformationProps) {
  return (
      <View style={styles.infoPage}>
        <Text style={styles.infoPageTitle}>{title}</Text>
        <Text style={styles.infoPageDesc}>{description}</Text>
      </View>
  );
}

export default Information;
