import styled from 'styled-components';

export const BtnDefaultStyled = styled.button`
  background-color: #0175d8;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: .4s;
  margin-left: 10px;

  &:hover {
    background-color: #fff;
    color: #0175d8;
    border: 1px solid #0175d8;
  }

  :disabled {
    background-color: gray;
    cursor: auto;
  }
`;