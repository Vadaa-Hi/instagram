import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ShopHeader from './ShopHeader';
import SearchBox from '../../Component/SearchBox';
import {container} from '../../style/styles';
import ShopScroll from './ShopScroll';
import ShopContent from './ShopContent';
import ShopOther from './ShopOther';
import ShopStory from './ShopStory';
import PlusLoader from '../../Component/PlusLoader';
const ShoppingScreen = () => {
  return (
    <SafeAreaView style={container}>
      <ShopHeader />
      <ScrollView>
        <SearchBox placeholder="Search shops" />
        <ShopScroll />
        <ShopContent />
        <ShopOther LeftText="Shops for you" RightText="See All" />
        <ShopStory />
        <ShopOther
          LeftText="lemonpress.mn and similar shops"
          RightText="See All"
        />
        <ShopStory />
        <PlusLoader />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({});
