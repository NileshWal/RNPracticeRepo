import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  fontSizeScale,
  verticalScale,
} from '../../styles/Scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(16),
    fontWeight: '500',
    lineHeight: fontSizeScale(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
