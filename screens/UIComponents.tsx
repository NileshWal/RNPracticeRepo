import React, { useState } from 'react';
import {
  Pressable,
  View,
  useColorScheme,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyles';
import CustomLogs from '../components/CustomLogs';
import useToggle from '../customHooks/useToggle';
import MyText from '../components/MyText';
import { validateLogin } from '../utils/Validations';
import CustomText from '../components/CustomText';

/** UI Components Screen
 * @returns {React.FC} UIComponents
 */
const UIComponents = () => {
  const TAG = 'UIComponents';
  const scheme = useColorScheme(); // 'dark' or 'light'
  const isDarkMode = scheme === 'dark';
  const globalStyle = globalStyles(isDarkMode);

  const [isOn, toggleIsOn] = useToggle(false);
  const [imageSource, setImageSource] = useState({
    uri: 'https://example.com',
  });

  const toggleTheme = () => {
    //setIsDarkTheme(!isDarkTheme);
    setShowText(!showText);
  };
  const [emailText, setEmailText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [showText, setShowText] = useState(true);

  /**
   * Handle Submit Button Press
   */
  const handleSubmit = () => {
    const error = validateLogin(emailText, passwordText);

    if (error) {
      alert(error);
      return;
    }
  };

  /**
   * Alert Message
   * @param message - The message to display in the alert
   */
  const alert = (message: string) => {
    Alert.alert(message);
  };

  return (
    <SafeAreaProvider style={globalStyle.appSafeAreaStyle}>
      {/* <MyText name={'Nilesh'} /> */}
      {showText && <MyText name="Nilesh" />}
      <View style={globalStyle.viewDimen} />
      <View style={globalStyle.viewContainer}>
        <CustomText
          customStyle={globalStyle.sampleTextDimen}
          customText={isOn ? 'ON' : 'OFF'}
        />
        <Switch value={showText} onValueChange={toggleTheme} />
        <TextInput
          style={globalStyle.inputFieldStyle}
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
          style={globalStyle.inputFieldStyle}
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
          <CustomText
            customStyle={globalStyle.buttonText}
            customText="Toggle Theme"
          />
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
    </SafeAreaProvider>
  );
};

export default UIComponents;
