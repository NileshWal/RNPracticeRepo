import { useContext } from 'react';
import { Image, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../styles/GlobalStyles';
import { UserProfileImageProp } from '../../types/common';

/**
 * UserProfileImage Component
 */
const UserProfileImage: React.FC<UserProfileImageProp> = (
  itemProps: UserProfileImageProp,
) => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);
  return (
    <View
      style={[
        uiElements.userImageContainer,
        { borderRadius: itemProps.imageDimensions },
      ]}
    >
      <Image
        source={itemProps.profileImage}
        style={{
          width: itemProps.imageDimensions,
          height: itemProps.imageDimensions,
        }}
      />
    </View>
  );
};

export default UserProfileImage;
