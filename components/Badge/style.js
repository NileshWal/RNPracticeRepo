import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  fontSizeScale,
  verticalScale,
} from '../../styles/Scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(10),
    fontWeight: '600',
    lineHeight: fontSizeScale(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
