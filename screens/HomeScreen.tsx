import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
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

  const renderItem = ({ item }: { item: ListItem }) => (
    <ItemProps name={item.title} count={item.id} isDarkMode={isDarkTheme} />
  );

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
          <Text style={{ color: themeColor(!isDarkTheme) }}>
            Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
          </Text>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faEnvelope} />
        </TouchableOpacity>
        <View style={uiElements.contentContainer}>
          <CustomText isDarkMode={isDarkTheme} />
          <Text
            style={uiElements.customTextTitleText}
            onPress={() => {
              setStateText(stateText + 1);
            }}
          >
            {stateText}
          </Text>
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
