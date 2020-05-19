import React from "react";
import styled from "styled-components";

const ThirdStageContainer = styled.div`
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

  select {
    margin: 20px;
  }
`;

export class Etapa3 extends React.Component {
  state = {
    whyNotFinished: "",
    complementaryCourse: "",
  };

  render() {
    return (
      <ThirdStageContainer>
        <h1>etapa 3 - informações gerais de ensino</h1>

        <label>7. Por que você não terminou um curso de graduação?</label>
        <input
          type="text"
          placeholder={""}
          value={this.state.value}
          // onChange={this.}
        />

        <label>8. Você fez algum curso complementar?</label>
        <select>
          <option />
          <option />
          <option />
        </select>
      </ThirdStageContainer>
    );
  }
}
