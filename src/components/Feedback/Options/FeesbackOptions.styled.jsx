import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Item = styled.li`
  list-style-type: none;
`;

export const Btn = styled.button`
  width: 150px;
  padding: 5px;
  color: orange;
  border: 1px solid black;
  border-radius: 5px;
  :hover,
  :focus {
    color: red;
  }
`;
