import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyles';
import Title from '../components/Title';
import { userStoriesMockData } from '../data/MockData';
import UserStoriesItemView from '../components/userStories/UserStoriesItemView';

const SocialMediaScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  return (
    <SafeAreaView
      style={[
        uiElements.container,
        {
          paddingBottom: insets.bottom, // ensures content stays above navigation bar
        },
      ]}
    >
      <View style={uiElements.viewStyle}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={uiElements.messageIconStyle}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
          <View style={uiElements.messageNumberContainer}>
            <Text style={uiElements.messageNumberStyle}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={uiElements.userStoryContainer}>
        <FlatList
          horizontal={true}
          data={userStoriesMockData()}
          renderItem={({ item }) => {
            return (
              <UserStoriesItemView
                firstName={item.firstName}
                id={item.id}
                profileImage={item.profileImage}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SocialMediaScreen;
