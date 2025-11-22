import { StyleSheet } from 'react-native';
import { getFontFamily } from '../utils/FontHelper';

export const globalStyles = (isDarkMode: Boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#FFFFFF' : '#FFFFFF',
    },
    safeAreaStyle: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleStyle: {
      color: '#022150',
      fontFamily: getFontFamily('Inter_18pt', '600'),
      fontSize: 24,
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginVertical: 2,
      marginHorizontal: 4,
      color: '#000000',
      backgroundColor: '#ffffff',
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
      fontSize: 22,
    },
    toolbarTitle: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'left',
      flex: 1, // allows text to take remaining space
    },
    customTextTitleText: {
      height: 40,
      margin: 12,
      padding: 10,
      fontSize: 18,
      fontWeight: '500',
      color: '#222',
      marginVertical: 8,
      marginHorizontal: 12,
    },
    //props styles
    itemPropsContainer: {
      height: 40,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 8,
      margin: 12,
      padding: 10,
      marginVertical: 6,
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
      height: 2,
      backgroundColor: '#ffffff',
    },
    //view container
    viewContainer: {
      borderWidth: 1,
      padding: 12,
      backgroundColor: '#ffffff',
    },
    myTextComponent: {
      color: 'green',
      backgroundColor: '#ffffff',
    },
    //sample text dimens
    sampleTextDimen: {
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: 50,
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
      fontSize: 16,
      fontWeight: '600',
    },
    //SocialMediaScreen view
    viewStyle: {
      marginLeft: 27,
      marginRight: 17,
      marginTop: 30,
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
      fontSize: 6,
      fontFamily: getFontFamily('Inter_18pt', '600'),
    },
    userStoryContainer: {
      marginTop: 20,
      marginHorizontal: 28,
    },
    storyContainer: {
      marginRight: 20,
    },
    firstName: {
      fontFamily: getFontFamily('Inter', '500'),
      fontSize: 14,
      color: '#022150',
      marginTop: 8,
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
  });
