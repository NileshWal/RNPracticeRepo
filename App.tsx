/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Pressable,
  View,
  useColorScheme,
  Text,
  TextInput,
  Alert,
} from 'react-native';
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
  const [emailText, setEmailText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');

  const handleSubmit = () => {
    if (!emailText.trim()) {
      alert('Please enter your email');
      return;
    }

    if (!validateEmail(emailText)) {
      alert('Enter a valid email address');
      return;
    }

    if (!passwordText.trim()) {
      alert('Please enter your password');
      return;
    }

    if (passwordText.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    toggleTheme();
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const alert = (message: string) => {
    Alert.alert(message);
  };

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <SafeAreaProvider>
        <ToolBar title="My App" isDarkMode={isDarkTheme} />
        {showText && <MyText name="Nilesh" />}
        {/* <MyText name={'Nilesh'} /> */}
        <View style={globalStyle.viewDimen} />
        <View style={globalStyle.viewContainer}>
          <Text style={globalStyle.sampleTextDimen}>{isOn ? 'ON' : 'OFF'}</Text>
          <TextInput
            style={globalStyle.input}
            placeholder="Email"
            placeholderTextColor="#888"
            onChangeText={value => {
              CustomLogs.debug(TAG, 'email value ' + value);
              setEmailText(value);
            }}
            value={emailText}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
          />
          <TextInput
            style={globalStyle.input}
            placeholder="Password"
            placeholderTextColor="#888"
            onChangeText={value => {
              CustomLogs.debug(TAG, 'password valus ' + value);
              setPasswordText(value);
            }}
            value={passwordText}
            secureTextEntry={true}
          />
          <Pressable style={globalStyle.buttonDimen} onPress={handleSubmit}>
            <Text style={globalStyle.buttonText}>Toggle Theme</Text>
          </Pressable>
        </View>
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
        <View style={globalStyle.viewDimen} />
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
