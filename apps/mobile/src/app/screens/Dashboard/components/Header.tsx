import React from 'react';
import { View, Text, Image } from 'react-native';
import { DashboardHeaderGradient } from '../../../commun/Gradients';
import HamburgerbtnClosed from '../../../icons/HamburgerButtonClosed.svg';
import NotificationIcon from '../../../icons/Notification.svg';
import styles from '../../../styles/DashboardStyles';

export const Header = () => {
  return (
    <View>
      <View style={styles.HeaderGradiantBoxContainer}>
        <DashboardHeaderGradient />
      </View>
      <View style={styles.HeaderActionBar}>
        <View style={styles.HeaderRow}>
          <HamburgerbtnClosed />
          <Image
            style={{
              position: 'relative',
              top: 2,
            }}
            source={require('../../../../../../../assets/logos/medixbot.png')}
          />
          <NotificationIcon />
        </View>
      </View>
    </View>
  );
};
