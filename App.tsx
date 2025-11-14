/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, View, useColorScheme, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from './context/ThemeContext';
import ToolBar from './components/ToolBar';
import useToggle from './customHooks/useToggle';
import MyText from './components/MyText';

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
  const [showText, setShowText] = useState(true);

  const toggleTheme = () => {
    //setIsDarkTheme(!isDarkTheme);
    setShowText(!showText);
  };

  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <SafeAreaProvider>
        <ToolBar title="My App" isDarkMode={isDarkTheme} />
        {showText && <MyText name="Nilesh" />}
        {/* <MyText name={'Nilesh'} /> */}
        <Button title="Toggle Theme" onPress={toggleTheme} />
        <View style={{ height: 20, backgroundColor: '#ffffff' }} />
        <Text style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          {isOn ? 'ON' : 'OFF'}
        </Text>
        <HomeScreen />
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}

export default App;

//Class component example
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     console.log('componentDidMount called');
//   }

//   shouldComponentUpdate(
//     nextProps: Readonly<{}>,
//     nextState: Readonly<{}>,
//     nextContext: any,
//   ): boolean {
//     console.log('shouldComponentUpdate called');
//     return true;
//   }

//   getSnapshotBeforeUpdate(
//     prevProps: Readonly<{}>,
//     prevState: Readonly<{}>,
//   ): any {
//     console.log('getSnapshotBeforeUpdate called');
//     return null;
//   }

//   componentDidUpdate(
//     prevProps: Readonly<{}>,
//     prevState: Readonly<{}>,
//     snapshot?: any,
//   ): void {
//     console.log('componentDidUpdate called');
//   }

//   componentWillUnmount(): void {
//     console.log('componentWillUnmount called');
//   }

//   render() {
//     return (
//       <SafeAreaProvider>
//         <ToolBar title="My App" isDarkMode={false} />
//         <Text
//           style={{ color: '#000000' }}
//           onPress={() => {
//             this.setState({ name: 'Nilesh' });
//           }}
//         >
//           'ON' : 'OFF' {this.state.name}
//         </Text>
//       </SafeAreaProvider>
//     );
//   }
// }

// export default App;
