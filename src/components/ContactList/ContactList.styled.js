import styled from 'styled-components';
export const Ul = styled.ul`
  list-style: none;
  display: inline-grid;
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 7px 9px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid #acacac;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: 0.25s ease;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
`;
export const Li = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 7px 9px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid #acacac;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
  outline: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  div {
    margin-right: 15px;
  }
`;
