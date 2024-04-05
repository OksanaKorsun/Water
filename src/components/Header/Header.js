// import { UserAuth } from 'components/UserAuth.js/UserAuth';
import PopoverPopupState from 'components/Popover/Popover';
import { Logo } from '../Logo/Logo';
import { Wrapper } from './Header.styled';
export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <PopoverPopupState/>
        {/* <UserAuth /> */}
      </Wrapper>
    </header>
  );
};
