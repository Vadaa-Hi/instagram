import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const InputForm = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputField}>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#fafafa',
    marginBottom: 10,
    borderWidth: 1,
  },
});
