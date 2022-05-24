import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouteScreen} from './src/Screen/route/RouteScreen';

function App() {
  return (
    <NavigationContainer>
      <RouteScreen />
    </NavigationContainer>
  );
}

export default App;
