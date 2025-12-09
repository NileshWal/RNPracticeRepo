import { StyleSheet } from 'react-native';
import { getFontFamily } from '../utils/FontHelper';
import { fontSizeScale, horizontalScale, verticalScale } from './Scaling';

/**
 * Global Styles
 * @param isDarkMode - Boolean indicating if dark mode is enabled
 * @returns {StyleSheet} StyleSheet object with global styles
 */
export const globalStyles = (isDarkMode: Boolean) =>
  StyleSheet.create({
    homeScreenSafeAreaContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? '#b2b2b2' : '#b2b2b2',
    },
    socialMediaSafeAreaContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? 'white' : 'white',
    },
    appSafeAreaStyle: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleTextStyle: {
      color: '#022150',
      fontFamily: getFontFamily('Inter_18pt', '600'),
      fontSize: fontSizeScale(24),
    },
    inputFieldStyle: {
      height: verticalScale(40),
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 8,
      paddingHorizontal: horizontalScale(10),
      marginVertical: verticalScale(2),
      marginHorizontal: horizontalScale(4),
      color: '#000000',
      backgroundColor: 'white',
    },
    contentContainer: {
      flex: 1,
      paddingVertical: verticalScale(10),
      paddingHorizontal: horizontalScale(10),
    },
    listContainer: {
      paddingBottom: verticalScale(20),
    },
    //For ToolBar
    toolbarContainer: {
      backgroundColor: '#6200EE',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
    },
    backButton: {
      width: horizontalScale(40),
    },
    backButtonPlaceholder: {
      width: horizontalScale(40),
    },
    backText: {
      color: '#FFF',
      fontSize: fontSizeScale(22),
    },
    toolbarTitle: {
      color: '#FFF',
      fontSize: fontSizeScale(20),
      fontWeight: '600',
      textAlign: 'left',
      flex: 1, // allows text to take remaining space
    },
    customTextTitleText: {
      height: verticalScale(40),
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(10),
      fontSize: fontSizeScale(18),
      fontWeight: '500',
      color: '#222',
      marginVertical: verticalScale(8),
      marginHorizontal: horizontalScale(12),
    },
    //props styles
    itemPropsContainer: {
      height: verticalScale(40),
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 8,
      marginHorizontal: horizontalScale(12),
      paddingVertical: verticalScale(10),
      paddingHorizontal: horizontalScale(10),
      marginVertical: verticalScale(12),
      backgroundColor: '#f8f8f8',
    },
    //image dimens
    imageDimen: {
      width: horizontalScale(200),
      height: verticalScale(100),
      backgroundColor: 'red',
    },
    //view dimens
    viewDimen: {
      height: verticalScale(1),
      backgroundColor: 'white',
    },
    //view container
    viewContainer: {
      borderWidth: 1,
      paddingVertical: verticalScale(12),
      paddingHorizontal: horizontalScale(12),
      backgroundColor: 'white',
    },
    myTextComponent: {
      color: 'green',
      backgroundColor: 'white',
    },
    //sample text dimens
    sampleTextDimen: {
      backgroundColor: 'white',
      color: '#000000',
      fontSize: fontSizeScale(50),
      fontFamily: getFontFamily('Inter_18pt', '500'),
    },
    buttonDimen: {
      borderWidth: 2,
      backgroundColor: '#007AFF',
      paddingVertical: verticalScale(12),
      paddingHorizontal: horizontalScale(12),
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: fontSizeScale(16),
      fontWeight: '600',
    },
    //SocialMediaScreen view
    viewStyle: {
      marginHorizontal: horizontalScale(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    messageIconStyle: {
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(10),
      backgroundColor: '#F9FAFB',
      borderRadius: '100',
    },
    messageNumberContainer: {
      justifyContent: 'center',
      backgroundColor: '#F35BAC',
      flexDirection: 'row',
      width: horizontalScale(10),
      height: verticalScale(10),
      borderRadius: 10,
      alignItems: 'center',
      position: 'absolute',
      right: 6,
      top: 7,
    },
    messageNumberStyle: {
      color: '#FFFFFF',
      fontSize: fontSizeScale(6),
      fontFamily: getFontFamily('Inter_18pt', '600'),
    },
    userStoryContainer: {
      marginTop: verticalScale(15),
      marginHorizontal: horizontalScale(20),
    },
    storyContainer: {
      marginRight: horizontalScale(20),
    },
    firstName: {
      fontFamily: getFontFamily('Inter_18pt', '300'),
      fontSize: fontSizeScale(14),
      color: '#022150',
      marginTop: verticalScale(8),
      textAlign: 'center',
    },
    userImageContainer: {
      borderColor: '#F35BAC',
      borderWidth: 1,
      paddingVertical: verticalScale(3),
      paddingHorizontal: horizontalScale(3),
    },
    userProfileImageContainer: {
      borderColor: '#F35BAC',
      borderWidth: 1,
      paddingVertical: verticalScale(3),
      paddingHorizontal: horizontalScale(3),
    },
    userContainer: {
      flexDirection: 'row',
      paddingHorizontal: horizontalScale(10),
    },
    userTextContainer: {
      justifyContent: 'center',
      marginLeft: horizontalScale(10),
    },
    user: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: horizontalScale(10),
    },
    username: {
      color: '#000',
      fontFamily: getFontFamily('Inter_18pt', '600'), //this font weight should have been a string
      fontSize: fontSizeScale(16),
    },
    location: {
      color: '#79869F',
      marginLeft: horizontalScale(-4), //This is not really needed I just missed a space on location text right before the location prop, that is why we needed marginLeft
      fontFamily: getFontFamily('Inter', '400'), //this font weight should have been a string
      fontSize: fontSizeScale(12),
      marginTop: verticalScale(5),
    },
    postImage: {
      alignItems: 'center',
      marginVertical: verticalScale(18),
      marginHorizontal: horizontalScale(10),
    },
    userPostContainer: {
      marginHorizontal: horizontalScale(5),
      paddingBottom: verticalScale(0),
      borderBottomWidth: 1,
      borderBottomColor: '#EFF2F6',
    },
    userPostItemContainer: {
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(5),
      paddingBottom: verticalScale(0),
      borderBottomWidth: 1,
      borderBottomColor: '#EFF2F6',
    },
    userPostThreeDot: {
      marginRight: horizontalScale(30),
    },
    //Profile Screen styles
    backgroundWhite: {
      backgroundColor: '#FFFFFF',
    },
    flex: {
      flex: 1,
    },
    flexGrow: {
      flexGrow: 1,
    },
    profileImage: {
      width: horizontalScale(110),
      height: horizontalScale(110),
    },
    profileImageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: verticalScale(32),
    },
    profileImageContent: {
      borderWidth: 1,
      borderColor: '#0150EC',
      padding: horizontalScale(4),
      borderRadius: horizontalScale(110),
    },
    userName: {
      marginTop: verticalScale(20),
      textAlign: 'center',
      fontFamily: getFontFamily('Inter', '600'),
      fontSize: fontSizeScale(20),
    },
    statAmount: {
      fontFamily: getFontFamily('Inter', '600'),
      fontSize: fontSizeScale(20),
      color: '#022150',
      textAlign: 'center',
    },
    statType: {
      fontFamily: getFontFamily('Inter', '400'),
      fontSize: fontSizeScale(16),
      color: '#79869F',
      textAlign: 'center',
    },
    statContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: horizontalScale(40),
      paddingVertical: verticalScale(30),
      borderBottomWidth: 1,
      borderColor: '#E9EFF1',
    },
    statBorder: {
      borderRightWidth: 1,
      borderColor: '#E9EFF1',
    },
    tabStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

//Dynamic styles
export const dynamicStyles = {
  userPostViewStyleOne: (
    marginLeft: number = 10,
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse',
    paddingBottom: number = 0,
  ) => ({
    marginLeft,
    flexDirection,
    paddingBottom,
  }),
  userPostViewStyleTwo: (marginLeft: number = 10, color: string) => ({
    marginLeft,
    color,
  }),
  userPostColourStyle: (color: string = '#79869F') => ({
    color,
  }),
};
