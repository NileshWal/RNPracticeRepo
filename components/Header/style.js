import { StyleSheet } from 'react-native';
import { fontSizeScale } from '../../styles/Scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(24),
    lineHeight: fontSizeScale(29),
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(18),
    lineHeight: fontSizeScale(22),
    fontWeight: '600',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(16),
    lineHeight: fontSizeScale(19),
    fontWeight: '600',
  },
});

export default style;
