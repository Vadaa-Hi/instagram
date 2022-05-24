import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchBox from '../../Component/SearchBox';
import SearchContent from '../../Component/SearchContent';
import PlusLoader from '../../Component/PlusLoader';

const SearchScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox placeholder="Search" />
        <SearchContent />
        <PlusLoader />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
