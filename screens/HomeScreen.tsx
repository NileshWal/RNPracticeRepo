import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  ColorValue,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../components/CustomText';
import ItemProps from '../components/ItemProps';
import { generateMockData } from '../data/MockData';
import { globalStyles } from '../styles/GlobalStyles';
import { ListItem } from '../types/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';
import CustomLogs from '../components/CustomLogs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

/**
 *  HomeScreen component displaying a searchable list of items.
 * @returns {React.FC} The HomeScreen component.
 */
const HomeScreen: React.FC = () => {
  const TAG = 'HomeScreen';
  const insets = useSafeAreaInsets();
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);
  const [searchText, setSearchText] = useState<string>('');
  const [data, setData] = useState<ListItem[]>([]);
  const [filteredData, setFilteredData] = useState<ListItem[]>([]);
  const [stateText, setStateText] = useState(0);

  useEffect(() => {
    CustomLogs.debug(TAG, 'HomeScreen mounted');
    const mockData = generateMockData();
    setData(mockData);
    setFilteredData(mockData);
  }, []);

  useEffect(() => {
    CustomLogs.debug(TAG, 'HomeScreen mounted ' + stateText);
  }, [stateText]);

  // Handle search input change
  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === '') {
      // If empty, reset to full list
      setFilteredData(data);
    } else {
      // Filter case-insensitive
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  /* Render each item in the FlatList */
  const renderItem = ({ item }: { item: ListItem }) => (
    <ItemProps name={item.title} count={item.id} isDarkMode={isDarkTheme} />
  );

  /* Determine theme color based on current theme */
  const themeColor = (item: boolean): ColorValue =>
    item ? '#222222' : '#ffffff';

  return (
    <SafeAreaView
      style={[
        uiElements.homeScreenSafeAreaContainer,
        {
          paddingBottom: insets.bottom, // ensures content stays above navigation bar
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{ backgroundColor: themeColor(isDarkTheme) }}>
          <CustomText
            customStyle={{ color: themeColor(!isDarkTheme) }}
            customText={'Current Theme: ' + (isDarkTheme ? 'Dark' : 'Light')}
          />
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faEnvelope} />
        </TouchableOpacity>
        <View style={uiElements.contentContainer}>
          <CustomText
            customStyle={uiElements.customTextTitleText}
            customText={(stateText + 1).toString()}
          />
          <TextInput
            style={uiElements.inputFieldStyle}
            placeholder="Search text..."
            placeholderTextColor="#888"
            onChangeText={handleSearch}
            value={searchText}
            autoFocus={true}
          />
          <FlatList
            nestedScrollEnabled
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={uiElements.listContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
