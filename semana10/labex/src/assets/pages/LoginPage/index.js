import React from "react";

import { TextField, Button } from "@material-ui/core";

import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer";

const LoginPage = () => {
  return (
    <div>
      <PageTitle title={"Login"} />

      <FormContainer>
        <TextField label={"Email"} type={"email"} />
        <TextField label={"Senha"} type={"password"} />
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Entrar
        </Button>
      </FormContainer>
    </div>
  );
};

export default LoginPage;
