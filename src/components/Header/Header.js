import { UserAuth } from 'components/UserAuth.js/UserAuth';
import { Logo } from '../Logo/Logo';
import { Wrapper } from './Header.styled';
export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <UserAuth />
      </Wrapper>
    </header>
  );
};
