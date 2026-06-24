import React from 'react';
import { Item } from '../types/item';

interface ItemListProps {
  items: Item[];
  onUpdate: (id: number, title: string, description: string) => void;
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onUpdate, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => onUpdate(item.id, item.title, item.description)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;