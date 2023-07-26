import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #48cae4;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #03045e;
  width: 300px;
  min-height: 50px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 5px 15px 12px;
  font-weight: bold;
  color: #fff;
`;
