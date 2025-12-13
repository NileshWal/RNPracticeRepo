import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

interface HeaderProps {
  title?: string;
  type?: 1 | 2 | 3;
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ title, type, color }) => {
  const styleToApply = () => {
    switch (type) {
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
      <Text style={[styleToApply(), color && { color: color }]}>{title}</Text>
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
