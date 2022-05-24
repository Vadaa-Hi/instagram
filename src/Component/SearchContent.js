import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {searchData} from '../data/SearchData';

const SearchContent = () => {
  return (
    <View style={{marginTop: 8}}>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 259,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgData) => {
                    return (
                      <TouchableOpacity style={{paddingBottom: 2}}>
                        <Image
                          source={{uri: imageData}}
                          style={{width: 128, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity style={{marginLeft: 2}}>
                  <Image
                    source={{uri: data.images[5]}}
                    style={{width: 128, height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {data.images.map((imageData, imgData) => {
                  return (
                    <TouchableOpacity style={{paddingBottom: 2}}>
                      <Image
                        source={{uri: imageData}}
                        style={{width: 128, height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={{paddingRight: 2}}>
                  <Image
                    source={{uri: data.images[2]}}
                    style={{width: 260, height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 126,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgData) => {
                    return (
                      <TouchableOpacity style={{paddingRight: 2}}>
                        <Image
                          source={{uri: imageData}}
                          style={{width: 128, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({});
