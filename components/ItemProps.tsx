import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

type ItemPropsType = { name: string; count: number };

const ItemProps: React.FC<ItemPropsType> = ({ name, count }) => {
  const onClickHandle = () => {
    Alert.alert('Item clicked at ' + count);
  };
  return (
    <View style={styles.itemContainer}>
      <Text onPress={() => onClickHandle()}>
        {name} {count}{' '}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    margin: 12,
    padding: 10,
    marginVertical: 6,
    backgroundColor: '#f8f8f8',
  },
});
export default ItemProps;
