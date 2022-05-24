import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const reelHeader = () => {
  return (
    <View style={styles.reelHeader}>
      <Text style={styles.headerText}>Reels</Text>
      <Feather name="camera" size={25} color="white" />
    </View>
  );
};

export default reelHeader;

const styles = StyleSheet.create({
  reelHeader: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
