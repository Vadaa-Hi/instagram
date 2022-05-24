import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {container, green, headerContainer} from '../../style/styles';
import LogoForm from '../../Component/LogoForm';
import logo from '../../../assets/icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const UserHeader = () => {
  return (
    <View
      style={[
        // {marginHorizontal: 12},
        headerContainer,
        ,
      ]}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Vadaa </Text>
          <SimpleLineIcons
            name="arrow-down"
            size={16}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
              marginTop: 6,
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <LogoForm uri={logo.plus} />
        <LogoForm uri={logo.menu} />
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({});
