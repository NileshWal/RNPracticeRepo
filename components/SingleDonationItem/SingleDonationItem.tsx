import React from 'react';
import { Image, View } from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

const SingleDonationItem: React.FC<SingleDonationItemProps> = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
}) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} isInactive={false} />
        </View>
        <Image
          resizeMode={'contain'}
          source={{ uri: uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={donationTitle} type={3} color={'#0A043C'} />
        <View style={style.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
      </View>
    </View>
  );
};

// SingleDonationItem.propTypes = {
//   uri: PropTypes.string.isRequired,
//   badgeTitle: PropTypes.string.isRequired,
//   donationTitle: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default SingleDonationItem;
