import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  ColorValue,
} from 'react-native';
import CustomText from '../components/CustomText';
import ItemProps from '../components/ItemProps';
import { generateMockData } from '../data/MockData';
import { globalStyles } from '../styles/globalStyles';
import { ListItem } from '../types/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);
  const [searchText, setSearchText] = useState<string>('');
  const [data, setData] = useState<ListItem[]>([]);
  const [filteredData, setFilteredData] = useState<ListItem[]>([]);
  const [stateText, setStateText] = useState(0);

  useEffect(() => {
    console.log('HomeScreen mounted');
    const mockData = generateMockData();
    setData(mockData);
    setFilteredData(mockData);
  }, []);

  useEffect(() => {
    console.log('HomeScreen mounted ' + stateText);
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
        uiElements.container,
        {
          paddingBottom: insets.bottom, // ensures content stays above navigation bar
        },
      ]}
    >
      <View style={{ backgroundColor: themeColor(isDarkTheme) }}>
        <Text style={{ color: themeColor(!isDarkTheme) }}>
          Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
        </Text>
      </View>

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
          style={uiElements.input}
          placeholder="Search text..."
          placeholderTextColor="#888"
          onChangeText={handleSearch}
          value={searchText}
        />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={uiElements.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
