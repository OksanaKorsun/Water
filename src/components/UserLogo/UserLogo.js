import { CustomPopover } from 'components/UserLogoModal/UserLogoModal';
import sprite from '../../pictures/icons/sprite.svg';
import { StyledBtn, UserDefaultAvatar, PopIcon, User, LogoAvatar } from './UserLogo.styled';
import PopupState, { bindTrigger } from 'material-ui-popup-state';

export default function UserLogo() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <StyledBtn {...bindTrigger(popupState)}>
            <User>Name</User>
            <LogoAvatar>
              <UserDefaultAvatar>OP</UserDefaultAvatar>
              <PopIcon>
                <use href={`${sprite}#icon-pop-up`}></use>
              </PopIcon>
            </LogoAvatar>
          </StyledBtn>
          <CustomPopover popupState={popupState} />
        </div>
      )}
    </PopupState>
  );
}
