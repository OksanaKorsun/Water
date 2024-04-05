import styled from 'styled-components';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
export const PopIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: red;
`;
export const PopDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledBtn = styled(Button)`
  background-color: transparent;
  display: flex;
  gap: 4px;
  width: 48px;
  height: 28px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 28px;
  height: 28px;
`;

export const UserDefaultAvatar = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
