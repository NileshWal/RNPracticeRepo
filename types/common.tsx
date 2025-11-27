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
