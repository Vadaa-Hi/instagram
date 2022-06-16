import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import image from '../../../assets/img';
import logo from '../../../assets/icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {headerContainer} from '../../style/styles';
import LogoForm from '../../Component/LogoForm';
import Popover, {
  PopoverPlacement,
  PopoverMode,
} from 'react-native-popover-view';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const seperator = () => {
    return <View style={styles.seperator} />;
  };
  return (
    <View style={headerContainer}>
      <Popover
        from={
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={styles.image} source={image.instagram} />
              <Text> </Text>
              <SimpleLineIcons name="arrow-down" size={16} />
            </View>
          </TouchableOpacity>
        }
        placement={PopoverPlacement.FLOATING}
        popoverStyle={[styles.popoverShadow, {width: 130, height: 60}]}
        arrowStyle={{height: 0}}
        popoverShift={{x: -0.9, y: -0.77}}>
        <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.popoverText}>Following</Text>
            <Feather name="user-check" size={16} />
          </View>
        </TouchableOpacity>
        {seperator()}
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.popoverText}>Favorites</Text>
            <Ionicons name="star-outline" size={16} />
          </View>
        </TouchableOpacity>
      </Popover>
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
  popoverShadow: {
    overflow: 'visible',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  popoverText: {
    margin: 3,
    marginRight: 20,
    fontSize: 20,
  },
  seperator: {
    height: 1,
    backgroundColor: 'grey',
    width: '100%',
    opacity: 0.3,
    // marginHorizontal: 16,
    zIndex: 10,
  },
});
