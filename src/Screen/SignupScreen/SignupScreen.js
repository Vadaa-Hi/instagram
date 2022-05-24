import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SignupForm from '../../Component/SignupForm';
import InstagramLogo from '../../Component/InstagramLogo';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <InstagramLogo />
      <SignupForm navigation={navigation} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
});
