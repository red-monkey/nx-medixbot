import React, { ReactNode } from 'react';
import { StyleSheet, FlatList, StatusBar, View } from 'react-native';
import Header from '../components/CommunHeader';

const ScreenSkeleton: React.FC<ReactNode> = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Header />
      <FlatList
        style={styles.bodyContainer}
        data={[null]}
        renderItem={() => {
          return <View>{children}</View>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F2FC',
    paddingTop: 30,
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    paddingTop: 20,
  },
});

export default ScreenSkeleton;
