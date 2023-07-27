import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { Card } from './components/Card';
import { AppContainer } from './styles';

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="In Progress"></Column>
      <Column text="Done"></Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
