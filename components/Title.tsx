import React from 'react';
import { useColorScheme } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import CustomText from './CustomText';

/**
 * Title Component to display screen titles
 */
interface TitleProps {
  title: string;
}

/**
 * Title Component
 * @param title - The title text to display
 * @returns A styled title component
 */
const Title: React.FC<TitleProps> = ({ title }) => {
  const scheme = useColorScheme(); // 'dark' | 'light' | null
  const isDarkMode = scheme === 'dark';
  const styles = globalStyles(isDarkMode);

  return <CustomText customStyle={styles.titleTextStyle} customText={title} />;
};

export default Title;
