import React, { useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';
import { horizontalScale } from '../../styles/Scaling';

interface TabProps {
  title: string;
  isInactive?: boolean;
  customOnPress: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isInactive, customOnPress }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={() => customOnPress()}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

//accidentally types default in the video, but should actually be defaultProps
// Tab.defaultProps = {
//   isInactive: false,
//   onPress: () => {},
// };

// Tab.propTypes = {
//   title: PropTypes.string.isRequired,
//   isInactive: PropTypes.bool,
//   onPress: PropTypes.func,
// };

export default Tab;
