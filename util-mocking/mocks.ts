import { Item } from 'api-services/src';

export const items: Item[] = [
  {
    id: '1',
    name: 'Name #1',
    description: 'Description #1',
    price: 10,
    quantity: 1,
    image: new File([], 'image.png'),
    category: 'Category #1',
  },
  {
    id: '2',
    name: 'Name #2',
    description: 'Description #2',
    price: 20,
    quantity: 2,
    image: new File([], 'image.png'),
    category: 'Category #2',
  },
  {
    id: '3',
    name: 'Name #3',
    description: 'Description #3',
    price: 30,
    quantity: 3,
    image: new File([], 'image.png'),
    category: 'Category #3',
  },
];
