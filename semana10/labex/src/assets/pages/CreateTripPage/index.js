import React from "react";

import { TextField, Button } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer";

const CreateTripPage = () => {
  return (
    <div>
      <PageTitle title={"Criar viagem"} />

      <FormContainer>
        <TextField label={"Nome"} />
        <TextField label={"Planeta"} />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Data"
        />
        <TextField label={"Descrição"} />
        <TextField label={"Duração / Dias"} type={"number"} />

        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Entrar
        </Button>
      </FormContainer>
    </div>
  );
};

export default CreateTripPage;
