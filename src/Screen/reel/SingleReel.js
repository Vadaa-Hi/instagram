import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);
  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };
  const onError = error => {
    console.log('Error', error);
  };

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        // backgroundColor: 'red',
      }}>
      <TouchableOpacity
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={false}
          resizMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.video}
          muted={mute}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </TouchableOpacity>
      {!mute ? (
        <Ionicons
          name="volume-mute"
          visible={!mute}
          style={[
            // styles.mute,
            {
              top: windowHeight / 2.3,
              left: windowWidth / 2.3,
              fontSize: 30,
              padding: 8,
              color: 'white',
              position: 'absolute',
              backgroundColor: 'rgba(52,52,52,0.6)',
              // borderRadius: 100,
            },
          ]}
        />
      ) : null}
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 90,
          padding: 10,
        }}>
        <View>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{
                width: 200,
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={{
                    uri: item.postProfile,
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                    marginBottom: 4,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
                {item.title}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    borderWidth: 1,
                    borderColor: 'white',
                    marginLeft: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    fontSize: 12,
                    width: '90%',
                    textAlign: 'center',
                    // alignSelf: 'center',
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 12, marginHorizontal: 10}}>
            {item.des}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Ionicons
              name="ios-musical-note"
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: 'white'}}>
              The Weeknd - Blinding light ⚈ Original Audio
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          right: 0,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{padding: 10}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color: 'white'}}>{item.like}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="ellipsis-vertical-sharp"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <Image
            source={{
              uri: item.postProfile,
            }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 100,
              marginBottom: 4,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;

const styles = StyleSheet.create({
  // mute: {
  //   position: 'absolute',
  //   backgroundColor: 'rgba(52,52,52,0.6)',
  //   borderRadius: 100,
  // },
});
