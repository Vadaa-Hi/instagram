import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useRef, useContext} from 'react';
import {Button} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ShopOther from '../shopping/ShopOther';
import {userScrollData} from '../../data/userScrollData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import UserForm from './UserForm';
import ProfileForm from './ProfileForm';
import {useQuery, gql} from '@apollo/client';
import {AuthContext} from '../../useAuth';
import ButtonForm from '../../Component/ButtonForm';

// import {KNOW} from './graphql/queries';
const screenWidth = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
export const TRACKS = gql`
  query TracksForHome {
    tracksForHome {
      id
      title
      author {
        name
        photo
      }
    }
  }
`;

const UserProfile = ({user}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  const {loading, error, data} = useQuery(TRACKS);
  const {signOut} = useContext(AuthContext);
  // if (loading) return <View> 'Loading'</View>;
  // if (error) return <View>`Aldaa! ${error.message}`</View>;

  console.log('data===>', data);
  return (
    <View>
      <User user={user} />
      <EditUser user={user} data={data} signOut={signOut} />
      <ShopOther
        LeftText="Discover people"
        RightText="See All"
        color="#69aadb"
      />
      <UserStory />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => scrollView.current.scrollTo({x: 0})}>
          <Animated.View>
            <Ionicons name="apps" size={25} />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollView.current.scrollTo({x: screenWidth})}>
          <Animated.View>
            <SimpleLineIcons name="user" size={25} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        ref={scrollView}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: '70%',
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animation}}}],
          {useNativeDriver: false},
        )}>
        <View
          style={{
            backgroundColor: 'blue',

            width: screenWidth,
          }}>
          <Text
            style={{
              fontSize: 50,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </View>
        <View
          style={{
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: 'green',
            width: screenWidth,
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const User = ({user}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
    <TouchableOpacity>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/asian-chinese-female-doctor-working-on-medical-report-with-laptop-and-picture-id1309783183?b=1&k=20&m=1309783183&s=170667a&w=0&h=M9TeQBEjvv5b0E4SINbc5oFkTBYmi7-eo3RTTBDHjdk=',
        }}
        style={styles.user}
      />
    </TouchableOpacity>
    <View>
      <Text style={styles.text}>100 </Text>
      <Text style={styles.text}>Posts</Text>
    </View>
    <View>
      <Text style={styles.text}>100 </Text>
      <Text style={styles.text}>Followers</Text>
    </View>
    <View>
      <Text style={styles.text}>100 </Text>
      <Text style={styles.text}>Following</Text>
    </View>
  </View>
);

const EditUser = ({user, data, signOut}) => (
  <View>
    <Text style={{marginLeft: 12, marginVertical: 12}}>Davaa</Text>
    <Button
      onPress={() => {
        signOut();
      }}
      color="black">
      Sign Out
    </Button>
    <ScrollView horizontal>
      {data?.tracksForHome.map((item, index) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: 100,
            height: 80,
            borderWidth: 0.2,
            marginHorizontal: 5,
            marginVertical: 5,
          }}>
          <View
            style={
              {
                // flex: 1,
                // flexDirection: 'r',
              }
            }>
            <Text>{item.id}</Text>
          </View>
          <View style={{}}>
            <Text>{item.author.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Button
        mode="outlined"
        color="black"
        style={{
          marginHorizontal: 12,
          borderWidth: 1,
          width: '80%',
          height: 40,
        }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '500',
          }}>
          Edit Profile
        </Text>
      </Button>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: '#ebebeb',
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.2,
        }}>
        <FontAwesome5 name="user-plus" size={22} />
      </View>
    </View>
  </View>
);
const UserStory = () => (
  <View style={{marginBottom: 13, marginLeft: 12}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {userScrollData.map((story, index) => (
        <TouchableOpacity style={styles.story}>
          <View key={index}>
            <Image source={{uri: story.image}} style={styles.avatar} />
            <Text style={[styles.text, {fontWeight: '600', marginBottom: 5}]}>
              {story.name}
            </Text>
            <Text style={[styles.text, {fontSize: 10}]}>
              {story.follower} followers
            </Text>
          </View>
          <Button
            style={{
              backgroundColor: '#3399ff',
              width: '60%',
              alignSelf: 'center',
              borderWidth: 1,
              marginTop: 5,
            }}
            color="white">
            <Text
              style={{
                fontSize: 8,
                fontWeight: '500',
                borderWidth: 1,
                // backgroundColor: '#3399ff',
              }}>
              Follow
            </Text>
          </Button>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default UserProfile;
const styles = StyleSheet.create({
  user: {height: 80, width: 80, borderRadius: 80},
  text: {alignSelf: 'center'},
  story: {
    width: 140,
    height: 180,
    borderRadius: 8,
    marginRight: 5,
    borderWidth: 0.2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderColor: '#fff',
    borderWidth: 2,
    alignSelf: 'center',
    marginVertical: 12,
  },
});
