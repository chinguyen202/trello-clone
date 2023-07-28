import { useState } from 'react';
import { NewItemButton, NewItemContainer, NewItemInput } from '../styles';
import { useFocus } from '../utils/useFocus';

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();
  return (
    <NewItemContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemContainer>
  );
};
