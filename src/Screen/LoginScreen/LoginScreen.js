import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InstagramLogo from '../../Component/InstagramLogo';
import LoginForm from '../../Component/LoginForm';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <InstagramLogo />
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
});
