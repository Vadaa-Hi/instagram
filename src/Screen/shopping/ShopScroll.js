import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const HeaderName = [
  'Shops',
  'Videos',
  "Editors' picks",
  'Collections',
  'Guides',
];

const ShopScroll = ({story}) => {
  return (
    <View style={styles.view}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {HeaderName.map((story, index) => (
          <TouchableOpacity>
            <View key={index} style={styles.textStyle}>
              <Text style={styles.text}>{story}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ShopScroll;

const styles = StyleSheet.create({
  text: {fontSize: 14, fontWeight: '600'},
  textStyle: {
    alignItems: 'center',
    // marginHorizontal: 0,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ebebeb',
    paddingVertical: 7,
    marginRight: 7,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  view: {marginVertical: 13, marginHorizontal: 12},
});
