// import { UserAuth } from 'components/UserAuth.js/UserAuth';
// import PopoverPopupState from 'components/Popover/Popover';
// import PopoverPopupState from 'components/AvatarLogo/AvatarLogo';
import { Logo } from '../Logo/Logo';
import { Wrapper } from './Header.styled';
import UserLogo from 'components/UserLogo/UserLogo';
// import { AvatarLogo } from 'components/AvatarLogo/AvatarLogo';
export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <UserLogo/>
        {/* <UserAuth /> */}
      </Wrapper>
    </header>
  );
};
