import { ListItem, UserStoriesItem } from '../types/common';

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
