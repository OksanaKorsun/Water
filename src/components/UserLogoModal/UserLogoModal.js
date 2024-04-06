import Popover from '@mui/material/Popover';
import { bindPopover } from 'material-ui-popup-state';
import sprite from '../../pictures/icons/sprite.svg';
import { PopList, PopItem, PopBtn, PopIcon } from './UserLogoModal.styled';
export const CustomPopover = ({ popupState }) => {
  return (
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
          <PopBtn type="button">
            <PopIcon>
              <use href={`${sprite}#icon-settings`}></use>
            </PopIcon>
            Setting
          </PopBtn>
        </PopItem>
        <PopItem>
          <PopBtn type="button">
            <PopIcon>
              <use href={`${sprite}#icon-logout`}></use>
            </PopIcon>
            Log out
          </PopBtn>
        </PopItem>
      </PopList>
    </Popover>
  );
};
