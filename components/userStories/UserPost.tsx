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

/**
 * UserPost Component - Displays a user's post with profile info, image, and interaction icons.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} location - The location of the user.
 * @param {any} image - The image source for the post.
 * @param {any} profileImage - The profile image source of the user.
 * @param {number} likes - The number of likes on the post.
 * @param {number} comments - The number of comments on the post.
 * @param {number} bookmarks - The number of bookmarks on the post.
 */
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

/**
 * UserPost Component - Displays a user's post with profile info, image, and interaction icons.
 */
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
            <CustomText
              customStyle={uiElements.username}
              customText={firstName + ' ' + lastName}
            />

            {location && (
              <CustomText
                customStyle={uiElements.location}
                customText={location}
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
          <CustomText
            customStyle={dynamicStyles.userPostViewStyleTwo(
              horizontalScale(3),
              dynamicStyles.userPostColourStyle().color,
            )}
            customText={likes.toString()}
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
            customText={comments.toString()}
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
            customText={bookmarks.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default UserPost;
