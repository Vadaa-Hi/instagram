import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import image from '../../../assets/img';
import logo from '../../../assets/icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {headerContainer} from '../../style/styles';
import LogoForm from '../../Component/LogoForm';

const Header = () => {
  return (
    <View style={headerContainer}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.image} source={image.instagram} />
          <Text> </Text>
          <SimpleLineIcons name="arrow-down" size={16} />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <LogoForm uri={logo.plus} />
        <LogoForm uri={logo.like} />
        <LogoForm uri={logo.messenger} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
  },
  containerStyle: {
    backgroundColor: 'green',
    padding: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
