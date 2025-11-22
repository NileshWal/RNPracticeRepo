import { useContext } from 'react';
import { Image, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../styles/GlobalStyles';

type UserProfileImage = {
  profileImage: any;
  imageDimensions: number;
};

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
