import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyles';
import CustomText from './CustomText';

/**
 * A customizable toolbar component with an optional back button and title.
 * @param title - The title to display in the toolbar.
 * @param isDarkMode - Boolean indicating if dark mode is enabled.
 * @param onBackPress - Optional function to handle back button press.
 */
const ToolBar = ({
  title,
  isDarkMode,
  onBackPress,
}: {
  title: string;
  isDarkMode: Boolean;
  onBackPress?: () => void;
}) => {
  const styles = globalStyles(isDarkMode);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.toolbarContainer,
        { paddingTop: insets.top, height: insets.top + 56 },
      ]}
    >
      <StatusBar
        translucent={false}
        backgroundColor="#6200EE"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      {/* Left button (optional back button) */}
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <CustomText customStyle={styles.backText} customText={'←'} />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButtonPlaceholder} />
      )}

      {/* Title */}
      <CustomText customStyle={styles.toolbarTitle} customText={title} />

      {/* Right placeholder for symmetry */}
      <View style={styles.backButtonPlaceholder} />
    </View>
  );
};

export default ToolBar;
