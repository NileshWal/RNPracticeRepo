/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  // const getUser = _userName => {
  //   const API_URL = `https://api.github.com/users/${_userName}`;
  //   return fetch(API_URL).then(response => response.json());
  // };

  // getUser('openai')
  //   .then(val => console.log('success val ' + val))
  //   .catch(err => console.error('error val ' + err));

  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

export default App;
