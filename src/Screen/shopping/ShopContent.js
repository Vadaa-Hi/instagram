import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {shopData} from '../../data/ShopData';
const ShopContent = () => {
  return (
    <View>
      {shopData.map((data, index) => {
        return (
          <>
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
                        style={{width: 194, height: 200}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default ShopContent;

const styles = StyleSheet.create({});
