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
      marginVertical: 6,
      marginHorizontal: 12,
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
  });
