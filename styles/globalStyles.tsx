import { StyleSheet } from 'react-native';

export const globalStyles = (isDarkMode: Boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#FFFFFF' : '#FFFFFF',
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
      height: 20,
      backgroundColor: '#ffffff',
    },
    //view container
    viewContainer: {
      backgroundColor: '#ffffff',
    },
    //sample text dimens
    sampleTextDimen: {
      backgroundColor: '#ffffff',
      color: '#000000',
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
  });
