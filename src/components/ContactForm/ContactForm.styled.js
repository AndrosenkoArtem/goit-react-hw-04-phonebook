import styled from 'styled-components';
export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  div {
    margin-right: 5px;
    font-weight: 600;
  }
  input {
    margin: 5px 0px;
    border-radius: 8px;
    border: 1px solid black;
    font-weight: 500;
  }
  span {
    display: flex;
    justify-content: center;
    color: red;
    font-weight: 500;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  }
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 7px 9px;
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid rgb(172, 172, 172);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px -2px;
  outline: none;
  transition: all 0.25s ease 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
