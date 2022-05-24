import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {headerContainer} from '../../style/styles';

const ShopOther = ({LeftText, RightText, color}) => {
  return (
    <View style={[headerContainer]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            //   color: 'white',
          }}>
          {LeftText}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={{color: color}}>{RightText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopOther;

const styles = StyleSheet.create({});
