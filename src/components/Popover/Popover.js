
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import sprite from '../../pictures/icons/sprite.svg';
import { PopBtn, PopIcon, PopItem, PopList, StyledBtn, UserDefaultAvatar } from './Popover.styled';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <StyledBtn {...bindTrigger(popupState)}
            >
            <UserDefaultAvatar>OP</UserDefaultAvatar>
            <PopIcon>
              <use href={`${sprite}#icon-pop-up`}></use>
            </PopIcon>
          </StyledBtn>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <PopList>
              <PopItem>
                <PopBtn type='button'>
                  <PopIcon>
                    <use href={`${sprite}#icon-settings`}></use>
                  </PopIcon>
                  Settings
                </PopBtn>
              </PopItem>
              <PopItem>
                <PopBtn type='button'>
                  <PopIcon>
                    <use href={`${sprite}#icon-logout`}></use>
                  </PopIcon>
                  Log out
                </PopBtn>
              </PopItem>
            </PopList>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
