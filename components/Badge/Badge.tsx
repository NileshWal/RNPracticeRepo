import React, { useRef, useState } from 'react';
import { Text, Pressable } from 'react-native';

import style from './style';
import { horizontalScale } from '../../styles/Scaling';

interface BadgeProps {
  title: string;
  isInactive: boolean;
}

const Badge: React.FC<BadgeProps> = ({ title, isInactive = false }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable disabled={isInactive} style={[style.badge, badgeWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Badge;
