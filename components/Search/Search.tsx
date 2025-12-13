import React, { useRef, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fontSizeScale } from '../../styles/Scaling';
import style from './style';

interface SearchProps {
  onSearch: (searchValue: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const textInputRef = useRef<TextInput | null>(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={fontSizeScale(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

// Search.defaultProps = {
//   onSearch: () => {},
// };

// Search.propTypes = {
//   onPress: PropTypes.func,
// };

export default Search;
