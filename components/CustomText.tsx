import React, { useState } from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

const CustomText = ({ isDarkMode }: { isDarkMode: Boolean }) => {
  const uiElements = globalStyles(isDarkMode);
  const [titleText, setTitleText] = useState<string>('Original State');
  const handlePress = (): void => setTitleText('Text changed');

  return (
    <Text style={uiElements.customTextTitleText} onPress={handlePress}>
      {' '}
      {titleText}{' '}
    </Text>
  );
};

export default CustomText;
