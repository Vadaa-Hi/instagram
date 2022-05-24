import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {shopStoryData} from '../../data/ShopStoryData';
const Story = () => {
  return (
    <View style={{marginBottom: 13, marginLeft: 12}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {shopStoryData.map((story, index) => (
          <TouchableOpacity>
            <ImageBackground source={{uri: story.image}} style={[styles.story]}>
              <View key={index}>
                <Image source={{uri: story.brandImage}} style={styles.avatar} />
                <Text style={[styles.text, {fontWeight: '600'}]}>
                  {story.productname}
                </Text>
                <Text style={[styles.text, {fontSize: 10}]}>
                  {story.follower} followers
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    resizeMode: 'cover',
    overflow: 'hidden',
    width: 140,
    height: 160,
    borderRadius: 8,
    marginRight: 5,
    // paddingHorizontal: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 2,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {color: '#fff', bottom: -60, left: 10},
});
