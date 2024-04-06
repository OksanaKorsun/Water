// import { Button } from '@mui/material';

import { UserLogo } from "components/UserLogo/UserLogo";
import { CustomPopover } from "components/UserLogoModal/UserLogoModal";
import PopupState from 'material-ui-popup-state';

// import PopoverPopupState from "components/Popover/Popover";
// import { LogoContainer, User } from "./AvatarLogo.styled";

// import sprite from '../../../pictures/icons/sprite.svg';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <UserLogo bindTrigger={popupState} />
          <CustomPopover popupState={popupState} />
        </div>
      )}
    </PopupState>
  );
}