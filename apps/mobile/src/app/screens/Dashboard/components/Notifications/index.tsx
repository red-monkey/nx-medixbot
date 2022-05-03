import ReminderIcon from '../../../../icons/ReminderIcon';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Notification from './Notification';
import MessageIcon from 'apps/mobile/src/app/icons/MessageIcon';

const Notifications = () => {
  return (
    <View style={styles.notificationsContainer}>
      <Notification
        category="reminders"
        count={5}
        color="#F5007E"
        icon={<ReminderIcon width={34} height={32} />}
      />
      <Notification
        category="messages"
        count={3}
        color="#009444"
        icon={<MessageIcon width={34} height={32} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsContainer: {
    marginBottom: 20,
  },
});

export default Notifications;
