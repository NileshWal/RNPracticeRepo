import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  useColorScheme,
} from 'react-native';
import CustomText from '../components/CustomText';
import ItemProps from '../components/ItemProps';
import ToolBar from '../components/ToolBar';
import { generateMockData } from '../data/MockData';
import { globalStyles } from '../styles/globalStyles';
import { ListItem } from '../types/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme(); // 'dark' or 'light'
  const isDarkMode = scheme === 'dark';
  const uiElements = globalStyles(isDarkMode);
  const [searchText, setSearchText] = useState<string>('');
  const [data, setData] = useState<ListItem[]>([]);
  const [filteredData, setFilteredData] = useState<ListItem[]>([]);

  useEffect(() => {
    console.log('HomeScreen mounted');
    const mockData = generateMockData();
    setData(mockData);
    setFilteredData(mockData);
  }, []);

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
    <ItemProps name={item.title} count={item.id} />
  );

  return (
    <SafeAreaView
      style={[
        uiElements.container,
        {
          paddingBottom: insets.bottom, // ensures content stays above navigation bar
        },
      ]}
    >
      <ToolBar title="My App" />
      <View style={uiElements.contentContainer}>
        <CustomText />
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
