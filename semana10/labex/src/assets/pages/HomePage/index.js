import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import { ButtonsContainer } from "./styles";

import PageTitle from "../../components/PageTitle";

const HomePage = () => {
  return (
    <div>
      <PageTitle title={"LabeX"} />

      <ButtonsContainer>
        <Link to={"/application/form"}>
          <Button variant={"contained"} color={"primary"}>
            Candidatar-se
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button variant={"outlined"} color={"secondary"}>
            Área do administrador
          </Button>
        </Link>
      </ButtonsContainer>
    </div>
  );
};

export default HomePage;
