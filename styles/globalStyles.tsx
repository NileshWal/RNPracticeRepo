import { StyleSheet } from 'react-native';
import { getFontFamily } from '../utils/FontHelper';
import { fontSizeScale, horizontalScale, verticalScale } from './Scaling';

export const globalStyles = (isDarkMode: Boolean) =>
  StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? 'white' : 'white',
    },
    safeAreaStyle: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleStyle: {
      color: '#022150',
      fontFamily: getFontFamily('Inter_18pt', '600'),
      fontSize: fontSizeScale(24),
    },
    text: {
      fontSize: fontSizeScale(16),
      color: '#333',
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginVertical: verticalScale(2),
      marginHorizontal: horizontalScale(4),
      color: '#000000',
      backgroundColor: 'white',
    },
    contentContainer: {
      flex: 1,
      padding: 10,
    },
    listContainer: {
      paddingBottom: 20,
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
      width: 40,
    },
    backButtonPlaceholder: {
      width: 40,
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
      height: 40,
      margin: 12,
      padding: 10,
      fontSize: fontSizeScale(18),
      fontWeight: '500',
      color: '#222',
      marginVertical: verticalScale(8),
      marginHorizontal: horizontalScale(12),
    },
    //props styles
    itemPropsContainer: {
      height: 40,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 8,
      margin: 12,
      padding: 10,
      marginVertical: verticalScale(6),
      backgroundColor: '#f8f8f8',
    },
    //image dimens
    imageDimen: {
      width: 200,
      height: 100,
      backgroundColor: 'red',
    },
    //view dimens
    viewDimen: {
      height: 1,
      backgroundColor: 'white',
    },
    //view container
    viewContainer: {
      borderWidth: 1,
      padding: 12,
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
      padding: 12,
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
      padding: 10,
      backgroundColor: '#F9FAFB',
      borderRadius: '100',
    },
    messageNumberContainer: {
      justifyContent: 'center',
      backgroundColor: '#F35BAC',
      flexDirection: 'row',
      width: 10,
      height: 10,
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
      padding: 3,
    },
    userProfileImageContainer: {
      borderColor: '#F35BAC',
      borderWidth: 1,
      padding: 3,
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
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(5),
      paddingBottom: verticalScale(0),
      borderBottomWidth: 1,
      borderBottomColor: '#EFF2F6',
    },
    userPostThreeDot: {
      marginRight: horizontalScale(30),
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
