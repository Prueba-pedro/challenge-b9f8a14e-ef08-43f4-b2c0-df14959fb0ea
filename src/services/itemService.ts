import { Item } from '../types/item';

let items: Item[] = [
  { id: 1, title: 'Elemento 1', description: 'Descripción del elemento 1' },
  { id: 2, title: 'Elemento 2', description: 'Descripción del elemento 2' }
];

export const addItem = (item: Item) => {
  items.push(item);
};

export const updateItem = (id: number, title: string, description: string) => {
  const item = items.find(i => i.id === id);
  if (item) {
    item.title = title;
    item.description = description;
  }
};

export const deleteItem = (id: number) => {
  items = items.filter(item => item.id!== id);
};

export const getItems = (): Item[] => items;