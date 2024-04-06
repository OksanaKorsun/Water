import styled from 'styled-components';
// import Button from '@mui/material/Button';
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

export const StyledBtn = styled.button`
display: flex;
border: none;
align-items: center;
background-color: transparent;
  gap: 4px;
  width: 48px;
  height: 28px;
  padding: 0;
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
  background-color: yellow;
`;
export const PopList = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
padding: 16px;
width: 118px;
height: 88px;
border-radius: 10px;
font-size: 16px;
line-height: 20px;
`
export const PopItem = styled.li`
display: flex;
gap: 8px;
/* padding: 16px; */
align-items: center;
justify-content: space-between;
`
export const PopBtn = styled.button`
border: none;
padding: 0;
background-color: transparent;
display: flex;
gap: 8px;
align-items: center;
justify-content: space-between;
font-size: 16px;
line-height: 20px;`