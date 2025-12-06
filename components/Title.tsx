import React from 'react';
import { Text, useColorScheme } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  const scheme = useColorScheme(); // 'dark' | 'light' | null
  const isDarkMode = scheme === 'dark';
  const styles = globalStyles(isDarkMode);

  return <Text style={styles.titleTextStyle}>{title}</Text>;
};

export default Title;
