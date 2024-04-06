
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PopIcon, StyledBtn, UserDefaultAvatar } from './Popover.styled';
import sprite from '../../pictures/icons/sprite.svg'
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//   button: {
//     width: '48px',
//     padding: '0',
//   },
// });
// const classes = useStyles();
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <UserDefaultAvatar>OP</UserDefaultAvatar>
            <PopIcon>
              <use href={`${sprite}#icon-pop-up`}></use>
            </PopIcon>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}