import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ChangeForm = ({onPress, text, subtext}) => {
  return (
    <View style={styles.Container}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{color: '#6bb0f5'}}> {subtext}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeForm;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
  },
});
