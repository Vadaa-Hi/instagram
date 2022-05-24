import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ReelHeader from './reelHeader';
import ReelComponent from './ReelComponent';

const ReelScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black',
        position: 'relative',
      }}>
      <StatusBar barStyle="light-content" />
      <ReelHeader />
      <ReelComponent />
    </View>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({});
