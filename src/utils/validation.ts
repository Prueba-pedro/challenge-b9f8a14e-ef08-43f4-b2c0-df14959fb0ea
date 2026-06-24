import { Item } from '../types/item';

export const validateItem = (item: Item): boolean => {
  if (!item.title ||!item.description) {
    return false;
  }
  return true;
};