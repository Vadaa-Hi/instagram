/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, SafeAreaView, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {green, container} from '../../style/styles';
import Header from './Header';
import Story from './Story';
import {POSTS} from '../../data/post';
import Post from './Post';

const HomeScreen = () => {
  return (
    <SafeAreaView style={container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Story />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
