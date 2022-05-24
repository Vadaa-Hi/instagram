import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileForm = ({width}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
      }}>
      <Text>Profile</Text>
      {/* <Text>
        When you share photos and videos, they'll appear on your profile
      </Text>
      <Text>Share your first photo or video</Text> */}
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({});
