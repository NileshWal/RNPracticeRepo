import { useContext } from 'react';
import { Image, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../styles/GlobalStyles';

/**
 * User Profile Image Component
 * @param profileImage - Image source for the profile picture
 * @param imageDimensions - Dimensions for width and height of the image
 */
type UserProfileImage = {
  profileImage: any;
  imageDimensions: number;
};

/**
 * UserProfileImage Component
 */
const UserProfileImage: React.FC<UserProfileImage> = ({
  profileImage,
  imageDimensions,
}) => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);
  return (
    <View
      style={[uiElements.userImageContainer, { borderRadius: imageDimensions }]}
    >
      <Image
        source={profileImage}
        style={{ width: imageDimensions, height: imageDimensions }}
      />
    </View>
  );
};

export default UserProfileImage;
