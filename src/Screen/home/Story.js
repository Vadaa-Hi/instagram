import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {USERS} from '../../data/users';

const Story = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <TouchableOpacity>
            <View
              key={index}
              style={{alignItems: 'center', marginHorizontal: 4}}>
              <Image source={{uri: story.image}} style={styles.story} />
              <Text>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + '...'
                  : story.user.toLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});
