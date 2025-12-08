import { ThemeContext } from '../context/ThemeContext';
import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { ProfileTabNavigation } from '../navigation/MainNavigation';
import CustomText from '../components/CustomText';

/* Profile Screen Component */
const Profile: React.FC = () => {
  // { navigation }

  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  return (
    <SafeAreaView style={[uiElements.backgroundWhite, uiElements.flex]}>
      <ScrollView contentContainerStyle={uiElements.flexGrow}>
        <View style={uiElements.profileImageContainer}>
          <View style={uiElements.profileImageContent}>
            <Image
              style={uiElements.profileImage}
              source={require('../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <CustomText
          customStyle={uiElements.userName}
          customText={'Emmanuel Robertsen'}
        />
        <View style={uiElements.statContainer}>
          <View>
            <CustomText customStyle={uiElements.statAmount} customText={'45'} />
            <CustomText
              customStyle={uiElements.statType}
              customText={'Following'}
            />
          </View>
          <View style={uiElements.statBorder} />
          <View>
            <CustomText
              customStyle={uiElements.statAmount}
              customText={'30M'}
            />
            <CustomText
              customStyle={uiElements.statType}
              customText={'Followers'}
            />
          </View>
          <View style={uiElements.statBorder} />
          <View>
            <CustomText
              customStyle={uiElements.statAmount}
              customText={'100'}
            />
            <CustomText
              customStyle={uiElements.statType}
              customText={'Posts'}
            />
          </View>
        </View>
        <View style={uiElements.flex}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
