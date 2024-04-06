import styled from 'styled-components';
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
`;
export const PopItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;
export const PopBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
  color: #407BFF;
`;
export const PopIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: blue;
`;
