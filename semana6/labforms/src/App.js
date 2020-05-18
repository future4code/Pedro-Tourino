import React from "react";
import styled from "styled-components";

import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Final } from "./components/Final";

const AppContainer = styled.div``;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Etapa1 />
        <Etapa2 />
        <Etapa3 />
        <Final />
      </AppContainer>
    );
  }
}

export default App;
