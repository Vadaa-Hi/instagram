import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {headerContainer} from '../../style/styles';
import LogoForm from '../../Component/LogoForm';
import logo from '../../../assets/icons';
const ShopHeader = () => {
  return (
    <View style={[headerContainer]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            //   color: 'white',
          }}>
          Shop
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <LogoForm uri={logo.calendar} />
        <LogoForm uri={logo.menu} />
      </View>
    </View>
  );
};

export default ShopHeader;

const styles = StyleSheet.create({});
