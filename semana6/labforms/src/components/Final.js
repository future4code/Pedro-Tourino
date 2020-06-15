import React from "react";
import styled from "styled-components";

const FinalStageContainer = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }

  p {
    font-size: x-large;
    font-weight: 400;
  }
`;

export class Final extends React.Component {
  render() {
    return (
      <FinalStageContainer>
        <h1>o formulário acabou</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </FinalStageContainer>
    );
  }
}
