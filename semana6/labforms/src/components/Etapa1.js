import React from "react";
import styled from "styled-components";

const StageContainer = styled.div`
  h1 {
    text-transform: uppercase;
  }

  h2 {
    font-weight: 500;
  }
`;

export class Etapa1 extends React.Component {
  render() {
    return (
      <StageContainer>
        <h1>etapa 1 - dados gerais</h1>
        <h2>1. Qual o seu nome?</h2>
        <input />
        <h2>2. Qual sua idade?</h2>
        <input />
        <h2>3. Qual seu email?</h2>
        <input />
        <h2>4. Qual a sua escolaridade?</h2>
        <select>
          <option />
          <option />
          <option />
        </select>
      </StageContainer>
    );
  }
}
