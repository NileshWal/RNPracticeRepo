import React from 'react';
import { View, Alert } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import CustomText from './CustomText';

/**
 * Props for the ItemProps component.
 * @property name - The name to display.
 * @property count - The count associated with the item.
 * @property isDarkMode - Boolean indicating if dark mode is enabled.
 */
type ItemPropsType = { name: string; count: number; isDarkMode: Boolean };

/**
 * ItemProps component that displays an item with a name and count.
 * @param name - The name to display.
 * @param count - The count associated with the item.
 * @param isDarkMode - Boolean indicating if dark mode is enabled.
 */
const ItemProps: React.FC<ItemPropsType> = ({ name, count, isDarkMode }) => {
  const styles = globalStyles(isDarkMode);

  /** Handles the click event on the item. */
  const onClickHandle = () => {
    Alert.alert('Item clicked at ' + count);
  };

  return (
    <View style={styles.itemPropsContainer}>
      <CustomText
        customOnPress={() => onClickHandle()}
        customText={name + ' ' + count}
      />
    </View>
  );
};

export default ItemProps;
