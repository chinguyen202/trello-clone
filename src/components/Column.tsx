import { ReactNode } from 'react';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from '../state/AppStateContext';
import { Card } from './Card';

type ColumnProps = {
  id: string;
  text: string;
  children?: ReactNode;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
