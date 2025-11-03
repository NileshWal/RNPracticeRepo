import { ListItem } from '../types/common';

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
