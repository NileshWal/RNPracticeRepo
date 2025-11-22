import React from 'react';
import { View, Text, Alert } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

type ItemPropsType = { name: string; count: number; isDarkMode: Boolean };

const ItemProps: React.FC<ItemPropsType> = ({ name, count, isDarkMode }) => {
  const styles = globalStyles(isDarkMode);

  const onClickHandle = () => {
    Alert.alert('Item clicked at ' + count);
  };
  return (
    <View style={styles.itemPropsContainer}>
      <Text onPress={() => onClickHandle()}>
        {name} {count}{' '}
      </Text>
    </View>
  );
};

export default ItemProps;
