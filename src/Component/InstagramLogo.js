import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Instagram_Logo = 'https://img.icons8.com/color/72/instagram-new--v1.png';

const InstagramLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={{uri: Instagram_Logo, height: 100, width: 100}} />
    </View>
  );
};

export default InstagramLogo;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});
