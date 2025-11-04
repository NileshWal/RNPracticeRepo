import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/globalStyles';

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
          <Text style={styles.backText}>{'←'}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.backButtonPlaceholder} />
      )}

      {/* Title */}
      <Text style={styles.toolbarTitle}>{title}</Text>

      {/* Right placeholder for symmetry */}
      <View style={styles.backButtonPlaceholder} />
    </View>
  );
};

export default ToolBar;
