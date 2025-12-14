import React, { useContext } from 'react';
import { View, Image } from 'react-native';
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
import CustomText from '../CustomText';
import { UserPostsItemType } from '../../types/common';

/**
 * UserPost Component - Displays a user's post with profile info, image, and interaction icons.
 */
const UserPost: React.FC<UserPostsItemType> = (
  itemProps: UserPostsItemType,
) => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  return (
    <View style={uiElements.userPostItemContainer}>
      <View style={uiElements.user}>
        <View style={uiElements.userContainer}>
          <UserProfileImage
            profileImage={itemProps.profileImage}
            imageDimensions={48}
          />
          <View style={uiElements.userTextContainer}>
            <CustomText
              customStyle={uiElements.username}
              customText={itemProps.firstName + ' ' + itemProps.lastName}
            />

            {itemProps.location && (
              <CustomText
                customStyle={uiElements.location}
                customText={itemProps.location}
              />
            )}
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
        <Image source={itemProps.image} />
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
          <CustomText
            customStyle={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
            customText={itemProps.likes.toString()}
          />
        </View>
        <View
          style={dynamicStyles.userPostViewStyleOne(horizontalScale(27), 'row')}
        >
          <FontAwesomeIcon
            icon={faMessage}
            color={dynamicStyles.userPostColourStyle().color}
          />
          <CustomText
            customStyle={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
            customText={itemProps.comments.toString()}
          />
        </View>
        <View
          style={dynamicStyles.userPostViewStyleOne(horizontalScale(27), 'row')}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            color={dynamicStyles.userPostColourStyle().color}
          />
          <CustomText
            customStyle={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
            customText={itemProps.bookmarks.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default UserPost;
