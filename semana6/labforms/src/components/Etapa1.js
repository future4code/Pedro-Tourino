import React from "react";
import styled from "styled-components";

const FirstStageContainer = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }

  label {
    font-size: xx-large;
    font-weight: 400;
  }

  input {
    margin: 20px;
  }

  select {
    margin: 20px;
  }
`;

export class Etapa1 extends React.Component {
  state = {
    name: "",
    age: 0,
    email: "",
    schooling: "",
  };

  render() {
    return (
      <FirstStageContainer>
        <h1>etapa 1 - dados gerais</h1>

        <label>1. Qual o seu nome?</label>
        <input
          type="text"
          placeholder={""}
          value={this.state.value}
          // onChange={this.}
        />

        <label>2. Qual sua idade?</label>
        <input
          type="text"
          placeholder={""}
          value={this.state.value}
          // onChange={this.}
        />

        <label>3. Qual seu email?</label>
        <input
          type="text"
          placeholder={""}
          value={this.state.value}
          // onChange={this.}
        />

        <label>4. Qual a sua escolaridade?</label>
        <select>
          <option />
          <option />
          <option />
        </select>
      </FirstStageContainer>
    );
  }
}
