import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { Card } from './components/Card';
import { AppContainer } from './styles';
import { useAppState } from './state/AppStateContext';

export const App = () => {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(e) => console.log(e)}
      />
    </AppContainer>
  );
};
