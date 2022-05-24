import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import InputForm from '../Component/InputForm';
import ButtonForm from '../Component/ButtonForm';
import ChangeForm from '../Component/ChangeForm';

const SignupForm = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <InputForm
        placeholder={'Email or phone number'}
        placeholderTextColor="#444"
      />
      <InputForm placeholder={'Username'} placeholderTextColor="#444" />
      <InputForm placeholder={'Password'} placeholderTextColor="#444" />
      <ButtonForm
        text="Sign up"
        onPress={() => Alert.alert('Та амжилттай бүртгүүллээ.')}
      />
      <ChangeForm
        text="Already have an account?"
        subtext="Log in"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
});
