import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import { dynamicStyles, globalStyles } from '../../styles/GlobalStyles';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import UserProfileImage from './UserProfileImage';
import { horizontalScale, verticalScale } from '../../styles/Scaling';

type UserPostsItemType = {
  firstName: string;
  lastName: string;
  location: string;
  image: any;
  profileImage: any;
  likes: number;
  comments: number;
  bookmarks: number;
};

const UserPost: React.FC<UserPostsItemType> = ({
  firstName,
  lastName,
  location,
  image,
  profileImage,
  likes,
  comments,
  bookmarks,
}) => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  return (
    <View style={uiElements.userPostItemContainer}>
      <View style={uiElements.user}>
        <View style={uiElements.userContainer}>
          <UserProfileImage profileImage={profileImage} imageDimensions={48} />
          <View style={uiElements.userTextContainer}>
            <Text style={uiElements.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={uiElements.location}> {location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={24}
          style={uiElements.userPostThreeDot}
          color={dynamicStyles.userPostColourStyle().color}
        />
      </View>
      <View style={uiElements.postImage}>
        <Image source={image} />
      </View>
      <View
        style={dynamicStyles.userPostViewStyleOne(
          horizontalScale(27),
          'row',
          verticalScale(10),
        )}
      >
        <View style={dynamicStyles.userPostViewStyleOne(0, 'row')}>
          <FontAwesomeIcon
            icon={faHeart}
            color={dynamicStyles.userPostColourStyle().color}
          />
          <Text
            style={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
          >
            {likes}
          </Text>
        </View>
        <View
          style={dynamicStyles.userPostViewStyleOne(horizontalScale(27), 'row')}
        >
          <FontAwesomeIcon
            icon={faMessage}
            color={dynamicStyles.userPostColourStyle().color}
          />
          <Text
            style={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
          >
            {comments}
          </Text>
        </View>
        <View
          style={dynamicStyles.userPostViewStyleOne(horizontalScale(27), 'row')}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            color={dynamicStyles.userPostColourStyle().color}
          />
          <Text
            style={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
          >
            {bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
