export interface ListItem {
  id: number;
  title: string;
}

export interface UserStoriesItem {
  firstName: string;
  id: number;
  profileImage: object;
}

export interface UserProfileImage {
  profileImage: any;
  imageDimensions: number;
}

export interface UserPostsItem {
  firstName: string;
  lastName: string;
  location: string;
  image: any;
  profileImage: any;
  likes: number;
  comments: number;
  bookmarks: number;
}

export interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

export interface TabProps {
  title: string;
  isInactive?: boolean;
  customOnPress: () => void;
}

export interface SearchProps {
  onSearch: (searchValue: string) => void;
}

export interface BadgeProps {
  title: string;
  isInactive: boolean;
}

export interface CustomButtonProps {
  title: string;
  isDisabled?: boolean;
  customOnPress: () => void;
}

export interface HeaderProps {
  title?: string;
  type?: 1 | 2 | 3;
  color?: string;
}

/**
 * UserPost Component - Displays a user's post with profile info, image, and interaction icons.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} location - The location of the user.
 * @param {any} image - The image source for the post.
 * @param {any} profileImage - The profile image source of the user.
 * @param {number} likes - The number of likes on the post.
 * @param {number} comments - The number of comments on the post.
 * @param {number} bookmarks - The number of bookmarks on the post.
 */
export interface UserPostsItemType {
  firstName: string;
  lastName: string;
  location: string;
  image: any;
  profileImage: any;
  likes: number;
  comments: number;
  bookmarks: number;
}

/**
 * User Profile Image Component
 * @param profileImage - Image source for the profile picture
 * @param imageDimensions - Dimensions for width and height of the image
 */
export interface UserProfileImageProp {
  profileImage: any;
  imageDimensions: number;
}
