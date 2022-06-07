import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouteScreen} from './src/Screen/route/RouteScreen';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import apolloClient from './src/apolloClient';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

function App({}) {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RouteScreen />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
