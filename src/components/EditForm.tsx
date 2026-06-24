import React, { useState } from 'react';
import { Item } from '../types/item';
import { validateItem } from '../utils/validation';

interface EditFormProps {
  item: Item;
  onSubmit: (item: Item) => void;
}

const EditForm: React.FC<EditFormProps> = ({ item, onSubmit }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem = { id: item.id, title, description };
    if (validateItem(newItem)) {
      onSubmit(newItem);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditForm;