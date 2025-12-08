import React, { useContext } from 'react';
import { globalStyles } from '../styles/GlobalStyles';
import { StyleProp, Text, TextStyle } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { GestureResponderEvent } from 'react-native';

/**
 * A customizable text component that adapts to the app's theme.
 * @param customStyle - Optional style to override the default text style.
 * @param customText - The text content to display.
 * @param customOnPress - Optional onPress event handler.
 */
interface CustomTextProps {
  customStyle?: StyleProp<TextStyle>; // <- optional style from parent
  customText?: string;
  customOnPress?: (event: GestureResponderEvent) => void;
}

/**
 * CustomText component that displays text with optional styling and onPress functionality.
 */
const CustomText: React.FC<CustomTextProps> = ({
  customStyle,
  customText,
  customOnPress,
}) => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  /**
   * Determines the style to apply to the Text component.
   * If a custom style is provided, it uses that; otherwise, it falls back to the default style.
   * @returns The style to apply to the Text component.
   */
  const handleStyle = (): StyleProp<TextStyle> => {
    return customStyle ? customStyle : uiElements.customTextTitleText;
  };

  return (
    <Text
      style={handleStyle()} // <- style override
      onPress={customOnPress}
    >
      {customText}
    </Text>
  );
};

export default CustomText;
