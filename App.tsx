/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, View, useColorScheme, Text, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from './context/ThemeContext';
import ToolBar from './components/ToolBar';
import useToggle from './customHooks/useToggle';
import MyText from './components/MyText';
import { globalStyles } from './styles/globalStyles';
import CustomLogs from './components/CustomLogs';

function App() {
  // const getUser = _userName => {
  //   const API_URL = `https://api.github.com/users/${_userName}`;
  //   return fetch(API_URL).then(response => response.json());
  // };

  // getUser('openai')
  //   .then(val => console.log('success val ' + val))
  //   .catch(err => console.error('error val ' + err));

  const TAG = 'App';
  const scheme = useColorScheme(); // 'dark' or 'light'
  const isDarkMode = scheme === 'dark';
  const globalStyle = globalStyles(isDarkMode);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkMode);
  const [showText, setShowText] = useState(true);
  const [imageSource, setImageSource] = useState({
    uri: 'https://example.com',
  });

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
        <View style={globalStyle.viewDimen} />
        <Text style={globalStyle.sampleTextDimen}>{isOn ? 'ON' : 'OFF'}</Text>
        <Button title="Toggle Theme" onPress={toggleTheme} />
        {/* <Image
          source={imageSource}
          style={globalStyle.imageDimen}
          resizeMode={'center'}
          onError={() => {
            CustomLogs.debug(TAG, 'Error while loading image');
            setImageSource(require('./assets/images/cake.png'));
          }}
        />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
          }}
          style={globalStyle.imageDimen}
        /> */}
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
