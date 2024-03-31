
import { GlobalStyle } from './GlobalStyle';
import { Header } from '../components/Header/Header';
import { MainContent } from './Main/MainContent/MainContent';
import {AuthForm} from './AuthForm/AuthForm'
import { SignUpForm } from './SignUpForm/SignUpForm';
export const App = () => {
  return (
    <div>
      <Header/>
      <GlobalStyle />
      <MainContent />
      <AuthForm />
      <SignUpForm/>
    </div>
  );
};
