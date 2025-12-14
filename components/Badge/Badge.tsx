import React, { useRef, useState } from 'react';
import { Text, Pressable } from 'react-native';

import style from './style';
import { horizontalScale } from '../../styles/Scaling';
import { BadgeProps } from '../../types/common';

const Badge: React.FC<BadgeProps> = (itemProps: BadgeProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      disabled={itemProps.isInactive}
      style={[style.badge, badgeWidth]}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title]}
      >
        {itemProps.title}
      </Text>
    </Pressable>
  );
};

export default Badge;
