import { UserAuth } from 'components/UserAuth.js/UserAuth';
import { Logo } from '../Logo/Logo';
export const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <UserAuth />
      </div>
    </header>
  );
};
