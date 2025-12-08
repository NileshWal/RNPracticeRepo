import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../styles/GlobalStyles';
import UserProfileImage from './UserProfileImage';
import CustomText from '../CustomText';

type UserStoriesItemPropsType = {
  firstName: string;
  id: number;
  profileImage: object;
};

const UserStoriesItemView: React.FC<UserStoriesItemPropsType> = ({
  firstName,
  id,
  profileImage,
}) => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  return (
    <View style={uiElements.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <CustomText customStyle={uiElements.firstName} customText={firstName} />
    </View>
  );
};

export default UserStoriesItemView;
