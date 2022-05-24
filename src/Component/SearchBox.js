import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBox = ({placeholder}) => {
  return (
    <View style={styles.inputView}>
      <AntDesign name="search1" size={22} />
      <TextInput
        placeholder={placeholder}
        style={{fontSize: 20, marginLeft: 20, fontWeight: '500'}}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    width: '94%',
    // marginTop: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    // marginBottom: 8,
    // margin: 6,
    alignSelf: 'center',
    backgroundColor: '#ebebeb', //ecf0f1
  },
});
