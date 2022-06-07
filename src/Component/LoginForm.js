import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
import ChangeForm from './ChangeForm';
import {useMutation} from '@apollo/client';
import {login, forgotPassword} from '../Screen/LoginScreen/graphql/mutations';
import {AuthContext} from '../useAuth';

const LoginForm = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.wrapper}>
      <InputForm
        placeholder={'Email or phone number'}
        placeholderTextColor="#444"
        value={username}
        onChangeText={setUsername}
      />
      <InputForm
        placeholder={'Password'}
        placeholderTextColor="#444"
        value={password}
        onChangeText={setPassword}
      />
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: '#6bb0f5'}}>Forgot password</Text>
      </View>
      <ButtonForm onPress={() => signIn({username, password})} text="Log in" />
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
