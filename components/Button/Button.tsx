import React from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  customOnPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled,
  customOnPress,
}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={() => customOnPress()}
    >
      <Text style={style.title}>{title}</Text>
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
