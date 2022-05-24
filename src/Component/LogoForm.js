import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const LogoForm = ({uri}) => {
  return (
    <View style={{marginLeft: 12}}>
      <TouchableOpacity>
        <Image source={{uri: uri}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoForm;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
