import React, {useReducer, useState, useEffect, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../home';
import {UserScreen} from '../user';
import {ReelScreen} from '../reel';
import {ShoppingScreen} from '../shopping';
import {SearchScreen} from '../search';
import {SignupScreen} from '../SignupScreen';
import {LoginScreen} from '../LoginScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SplashScreen from '../../Component/SplashScreen';
import {AuthContext} from '../../useAuth';
import {login} from '../LoginScreen/graphql/mutations';
import {useMutation} from '@apollo/client';
import {StyleSheet, Text, View, Alert} from 'react-native';
import FollowScreen from '../following/FollowScreen';
import Favorites, {FavoritesScreen} from '../favorites';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AuthStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{showLabel: false}}>
      {/* tabBar=
      {props => (
        <View>
          <CustomTabBar {...props} />
        </View>
      )} */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reel"
        component={ReelScreen}
        options={{
          //   tabBarLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="movie-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export function RouteScreen({navigation, props}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken !== null ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="Follow" component={FollowScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
      ) : (
        <AuthStackScreens />
      )}
    </AuthContext.Provider>
  );
}
