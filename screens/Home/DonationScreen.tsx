import React, { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
import Search from '../../components/Search/Search';
import style from './style';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../styles/GlobalStyles';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { horizontalScale } from '../../styles/Scaling';

const HomeDonation: React.FC = () => {
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);
  return (
    <SafeAreaView style={[uiElements.backgroundWhite, uiElements.flex]}>
      {/*<Search*/}
      {/*  onSearch={value => {*/}
      {/*    console.log(value);*/}
      {/*  }}*/}
      {/*/>*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(24),
        }}
      >
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeDonation;
