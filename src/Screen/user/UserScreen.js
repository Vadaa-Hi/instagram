import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {container} from '../../style/styles';
import UserHeader from './UserHeader';
import UserProfile from './UserProfile';
const UserScreen = () => {
  return (
    <SafeAreaView style={[container]}>
      <UserHeader />
      <UserProfile />
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
