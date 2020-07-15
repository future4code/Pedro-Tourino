import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #a1a1a1;
  border-bottom: 1px solid #a1a1a1;
  box-shadow: 0 8px 10px #e1e1e1;
`;

export const NavButtonsContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #00aaff;
    color: #fff;
    font-weight: bold;
`;
