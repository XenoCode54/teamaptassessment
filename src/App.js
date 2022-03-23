import { Main } from './Components/Main/Main';
import { AppContainer } from './Components/Main/Main.styled';
import { Side } from './Components/Side/Side';

function App() {
  return (
    <AppContainer>
      <Side />
      <Main />
    </AppContainer>
  );
}

export default App;
