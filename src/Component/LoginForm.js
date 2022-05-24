import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
import ChangeForm from './ChangeForm';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.wrapper}>
      <InputForm
        placeholder={'Email or phone number'}
        placeholderTextColor="#444"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputForm
        placeholder={'Password'}
        placeholderTextColor="#444"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: '#6bb0f5'}}>Forgot password</Text>
      </View>
      <ButtonForm onPress={() => navigation.navigate('MyTabs')} text="Log in" />
      <ChangeForm
        text="Don't have an account?"
        subtext="Sign up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
});
