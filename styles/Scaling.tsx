import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

const isScreenSmall = width <= 375 && !DeviceInfo.hasNotch();

const guideLineBaseWidth = () => {
  if (isScreenSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = (size: number) => {
  return (width / guideLineBaseWidth()) * size;
};

const guideLineBaseHeight = () => {
  if (isScreenSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = (size: number) => {
  return (height / guideLineBaseHeight()) * size;
};

const guideLineBaseFont = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const fontSizeScale = (size: number) => {
  return Math.round((width / guideLineBaseFont()) * size);
};

export { horizontalScale, verticalScale, fontSizeScale };
