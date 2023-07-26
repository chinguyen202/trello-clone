import { Column } from './components/Column';
import { AppContainer } from './styles';

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do"></Column>
      <Column text="In Progress"></Column>
      <Column text="Done"></Column>
    </AppContainer>
  );
};
