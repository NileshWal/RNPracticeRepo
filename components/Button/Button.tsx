import React from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';
import { CustomButtonProps } from '../../types/common';

const Button: React.FC<CustomButtonProps> = (itemProps: CustomButtonProps) => {
  return (
    <Pressable
      disabled={itemProps.isDisabled}
      style={[style.button, itemProps.isDisabled && style.disabled]}
      onPress={() => itemProps.customOnPress()}
    >
      <Text style={style.title}>{itemProps.title}</Text>
    </Pressable>
  );
};

//accidentally types default in the video, but should actually be defaultProps
// Button.defaultProps = {
//   isDisabled: false,
//   onPress: () => {},
// };

// Button.propTypes = {
//   title: PropTypes.string.isRequired,
//   isDisabled: PropTypes.bool,
//   onPress: PropTypes.func,
// };

export default Button;
