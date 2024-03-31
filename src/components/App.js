
import { GlobalStyle } from './GlobalStyle';
import { Header } from '../components/Header/Header';
import { MainContent } from './Main/MainContent/MainContent';
export const App = () => {
  return (
    <div>
      <Header/>
      <GlobalStyle />
      <MainContent/>
    </div>
  );
};
