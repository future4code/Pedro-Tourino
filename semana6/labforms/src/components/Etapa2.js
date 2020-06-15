import React from "react";
import styled from "styled-components";

const SecondStageContainer = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }

  label {
    font-size: x-large;
    font-weight: 400;
  }

  input {
    margin: 20px;
  }
`;

export class Etapa2 extends React.Component {
  state = {
    course: "",
    institution: "",
  };

  render() {
    return (
      <SecondStageContainer>
        <h1>etapa 2 - informações do ensino superior</h1>

        <label>5. Qual curso?</label>
        <input
          type="text"
          placeholder={""}
          value={this.state.value}
          // onChange={this.}
        />

        <label>6. Qual a unidade de ensino?</label>
        <input
          type="text"
          placeholder={""}
          value={this.state.value}
          // onChange={this.}
        />
      </SecondStageContainer>
    );
  }
}
