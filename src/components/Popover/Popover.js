// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import sprite from '../../pictures/icons/sprite.svg';
import { PopIcon, StyledBtn, UserDefaultAvatar } from './Popover.styled';
// import { deepPurple } from '@mui/material/colors';
export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <StyledBtn
            variant="contained"
            {...bindTrigger(popupState)}
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
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <ul>
              <li>
                <button>
                  <PopIcon>
                    <use href={`${sprite}#icon-settings`}></use>
                  </PopIcon>
                  Settings
                </button>
              </li>
              <li>
                <button>
                  <PopIcon>
                    <use href={`{sprite}#icon-pop-up`}></use>
                  </PopIcon>
                  Log out
                </button>
              </li>
            </ul>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
