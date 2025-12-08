import { ListItem, UserPostsItem, UserStoriesItem } from '../types/common';

/* Mock data for testing and development purposes */
const nameList = [
  'Alice Johnson',
  'Bob Smith',
  'Charlie Brown',
  'Diana Ross',
  'Ethan Hunt',
  'Fiona Gallagher',
  'George Michael',
  'Hannah Lee',
  'Ian McKenzie',
  'Julia Roberts',
  'Kevin Hart',
  'Liam Neeson',
  'Mia Wong',
  'Noah Davis',
  'Olivia Taylor',
  'Paul Walker',
  'Quinn Adams',
  'Rachel Green',
  'Sam Wilson',
  'Tina Turner',
  'Uma Patel',
  'Victor Hugo',
  'Wendy Clark',
  'Xavier Thomas',
  'Yara Martinez',
  'Zane Malik',
];

/* Function to generate mock list data */
export const generateMockData = (): ListItem[] =>
  nameList.map((name, index) => ({ id: index + 1, title: name }));

const userStories = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Angel',
    id: 2,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'White',
    id: 3,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Olivier',
    id: 4,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    id: 5,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nicolas',
    id: 6,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nino',
    id: 7,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nana',
    id: 8,
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    id: 9,
    profileImage: require('../assets/images/default_profile.png'),
  },
];

export const userStoriesMockData = (): UserStoriesItem[] => userStories;

const userPostList = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Boston, MA',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 1,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Jennifer',
    lastName: 'Wilkson',
    location: 'Worcester, MA',
    likes: 1301,
    comments: 25,
    bookmarks: 70,
    id: 2,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Worcester, MA',
    likes: 100,
    comments: 8,
    bookmarks: 3,
    id: 3,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    lastName: 'Vacheishvili',
    location: 'New York, NY',
    likes: 200,
    comments: 16,
    bookmarks: 6,
    id: 4,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nicolas',
    lastName: 'Namoradze',
    location: 'Berlin, Germany',
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    id: 5,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
];

export const userPostMockData = (): UserPostsItem[] => userPostList;
