import { ThemeContext } from '../context/ThemeContext';
import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

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
        <Text style={uiElements.userName}>Emmanuel Robertsen</Text>
        <View style={uiElements.statContainer}>
          <View>
            <Text style={uiElements.statAmount}>45</Text>
            <Text style={uiElements.statType}>Following</Text>
          </View>
          <View style={uiElements.statBorder} />
          <View>
            <Text style={uiElements.statAmount}>30M</Text>
            <Text style={uiElements.statType}>Followers</Text>
          </View>
          <View style={uiElements.statBorder} />
          <View>
            <Text style={uiElements.statAmount}>100</Text>
            <Text style={uiElements.statType}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
