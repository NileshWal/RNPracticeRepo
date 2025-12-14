import React, { useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';
import { horizontalScale } from '../../styles/Scaling';
import { TabProps } from '../../types/common';

const Tab: React.FC<TabProps> = (itemProps: TabProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      disabled={itemProps.isInactive}
      style={[style.tab, itemProps.isInactive && style.inactiveTab, tabWidth]}
      onPress={() => itemProps.customOnPress()}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, itemProps.isInactive && style.inactiveTitle]}
      >
        {itemProps.title}
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
