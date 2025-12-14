import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import { HeaderProps } from '../../types/common';

const Header: React.FC<HeaderProps> = (itemProps: HeaderProps) => {
  const styleToApply = () => {
    switch (itemProps.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), itemProps.color && { color: itemProps.color }]}
      >
        {itemProps.title}
      </Text>
    </View>
  );
};

//accidentally types default in the video, but should actually be defaultProps
// Header.defaultProps = {
//   title: '',
//   type: 1,
//   color: '#000000',
// };

// Header.propTypes = {
//   title: PropTypes.string,
//   type: PropTypes.number,
//   color: PropTypes.string,
// };

export default Header;
