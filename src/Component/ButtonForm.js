import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const ButtonForm = ({onPress, text}) => {
  return (
    <View style={{marginTop: 30}}>
      <Pressable titleSize={20} style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonForm;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0096f6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,
  },
});
