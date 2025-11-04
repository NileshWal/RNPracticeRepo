/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, View, useColorScheme } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from './context/ThemeContext';
import ToolBar from './components/ToolBar';

function App() {
  // const getUser = _userName => {
  //   const API_URL = `https://api.github.com/users/${_userName}`;
  //   return fetch(API_URL).then(response => response.json());
  // };

  // getUser('openai')
  //   .then(val => console.log('success val ' + val))
  //   .catch(err => console.error('error val ' + err));

  const scheme = useColorScheme(); // 'dark' or 'light'
  const isDarkMode = scheme === 'dark';
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkMode);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <SafeAreaProvider>
        <ToolBar title="My App" isDarkMode={isDarkTheme} />
        <View>
          <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
        <HomeScreen />
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}

export default App;
