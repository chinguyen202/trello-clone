import { useState, KeyboardEvent } from 'react';
import { NewItemButton, NewItemContainer, NewItemInput } from '../styles';
import { useFocus } from '../utils/useFocus';

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();
  const handleAddText = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd(text);
    }
  };

  return (
    <NewItemContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemContainer>
  );
};
