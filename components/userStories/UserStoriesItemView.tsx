import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../styles/GlobalStyles';
import UserProfileImage from './UserProfileImage';

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
      <Text style={uiElements.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStoriesItemView;
