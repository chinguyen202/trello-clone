import { ReactNode } from 'react';
import { ColumnContainer, ColumnTitle } from '../styles';

type ColumnProps = {
  text: string;
  children?: ReactNode;
};

export const Column = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
