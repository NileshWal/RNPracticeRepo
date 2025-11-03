import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = () => {
  const [titleText, setTitleText] = useState<string>('Original State');
  const handlePress = (): void => setTitleText('Text changed');

  return (
    <Text style={styles.titleText} onPress={handlePress}>
      {' '}
      {titleText}{' '}
    </Text>
  );
};

const styles = StyleSheet.create({
  input: { height: 40, margin: 12, padding: 10 },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    marginVertical: 8,
    marginHorizontal: 12,
  },
});

export default CustomText;
