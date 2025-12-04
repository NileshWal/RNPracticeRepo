import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyles';
import Title from '../components/Title';
import { userPostMockData, userStoriesMockData } from '../data/MockData';
import UserStoriesItemView from '../components/userStories/UserStoriesItemView';
import { UserPostsItem, UserStoriesItem } from '../types/common';
import UserPost from '../components/userStories/UserPost';
import CustomLogs from '../components/CustomLogs';
import { verticalScale } from '../styles/Scaling';

const SocialMediaScreen: React.FC = () => {
  const TAG = 'SocialMediaScreen';
  //const insets = useSafeAreaInsets();
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  //For Usr Stories
  const userStoriesSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState<
    UserStoriesItem[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  //For User Posts
  const userPostsSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderData, setUserPostsRenderData] = useState<
    UserPostsItem[]
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  useEffect(() => {
    //For user stories
    setIsLoadingUserStories(true);
    const getStoriesInitialData = pagination<UserStoriesItem>(
      userStoriesMockData(),
      1,
      userStoriesSize,
    );
    setUserStoriesRenderData(getStoriesInitialData);
    setIsLoadingUserStories(false);

    //For user posts
    setIsLoadingUserPosts(true);
    const getPostInitialData = pagination<UserPostsItem>(
      userPostMockData(),
      1,
      userPostsSize,
    );
    setUserPostsRenderData(getPostInitialData);
    setIsLoadingUserPosts(false);
  }, []);

  /**
   *
   * @param database
   * @param currentPage
   * @param pageSize
   * @returns
   */
  const pagination = <T,>(
    database: T[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  /**
   *
   */
  const loadMoreUserStories = useCallback(() => {
    if (isLoadingUserStories) return;

    setIsLoadingUserStories(true);

    const contentToAppend = pagination(
      userStoriesMockData(),
      userStoriesCurrentPage + 1,
      userStoriesSize,
    );

    if (contentToAppend.length > 0) {
      setUserStoriesCurrentPage(prev => prev + 1);
      setUserStoriesRenderData(prev => [...prev, ...contentToAppend]);
    }

    setIsLoadingUserStories(false);
  }, [isLoadingUserStories, userStoriesCurrentPage, userStoriesSize]);

  /**
   *
   */
  const loadMoreUserPost = useCallback(() => {
    if (isLoadingUserPosts) return;

    setIsLoadingUserPosts(true);

    const contentToAppend = pagination(
      userPostMockData(),
      userPostsCurrentPage + 1,
      userPostsSize,
    );

    if (contentToAppend.length > 0) {
      setUserPostsCurrentPage(prev => prev + 1);
      setUserPostsRenderData(prev => [...prev, ...contentToAppend]);
    }

    setIsLoadingUserPosts(false);
  }, [isLoadingUserPosts, userPostsCurrentPage, userPostsSize]);

  const renderHeader = () => (
    <>
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
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreUserStories}
          horizontal={true}
          data={userStoriesRenderData}
          renderItem={({ item }) => {
            return (
              <UserStoriesItemView
                key={'UserStory' + item.id}
                firstName={item.firstName}
                id={item.id}
                profileImage={item.profileImage}
              />
            );
          }}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView
      style={[
        uiElements.safeAreaContainer,
        {
          // paddingBottom: verticalScale(insets.bottom), // ensures content stays above navigation bar
          paddingBottom: verticalScale(0),
        },
      ]}
    >
      <View style={uiElements.userPostContainer}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={userPostsRenderData}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            CustomLogs.debug(TAG, 'We have reached the end of posts');
            loadMoreUserPost;
          }}
          renderItem={({ item }) => {
            return (
              <View style={uiElements.userPostContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bookmarks={item.bookmarks}
                  profileImage={item.profileImage}
                  location={item.location}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SocialMediaScreen;
