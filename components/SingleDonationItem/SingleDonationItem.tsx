import React from 'react';
import { Image, View } from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';
import { SingleDonationItemProps } from '../../types/common';

const SingleDonationItem: React.FC<SingleDonationItemProps> = (
  itemProps: SingleDonationItemProps,
) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={itemProps.badgeTitle} isInactive={false} />
        </View>
        <Image
          resizeMode={'contain'}
          source={{ uri: itemProps.uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={itemProps.donationTitle} type={3} color={'#0A043C'} />
        <View style={style.price}>
          <Header
            title={'$' + itemProps.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleDonationItem;
