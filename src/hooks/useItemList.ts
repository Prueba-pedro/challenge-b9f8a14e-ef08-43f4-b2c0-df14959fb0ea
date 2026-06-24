import React, { useState, useEffect } from 'react';
import { Item } from '../types/item';
import { getItems, addItem, updateItem, deleteItem } from '../services/itemService';

interface UseItemList {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (id: number, title: string, description: string) => void;
  deleteItem: (id: number) => void;
}

export const useItemList = (): UseItemList => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(getItems());
  }, []);

  const handleAddItem = (item: Item) => {
    addItem(item);
    setItems(getItems());
  };

  const handleUpdateItem = (id: number, title: string, description: string) => {
    updateItem(id, title, description);
    setItems(getItems());
  };

  const handleDeleteItem = (id: number) => {
    deleteItem(id);
    setItems(getItems());
  };

  return {
    items,
    addItem: handleAddItem,
    updateItem: handleUpdateItem,
    deleteItem: handleDeleteItem
  };
}