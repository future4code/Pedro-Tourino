import React from "react";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer";

const ApplicationFormPage = () => {
  return (
    <div>
      <PageTitle title={"Candidatar-se"} />

      <FormContainer>
        <TextField label={"Nome do candidato"} />
        <TextField label={"Idade"} type={"number"} />
        <TextField
          label={"Texto de aplicação"}
          helperText="Explique por que você é um bom candidato(a)"
        />
        <TextField label={"Profissão"} />

        <FormControl>
          <InputLabel id="select-country">Países</InputLabel>
          <Select labelId="select-country">
            <MenuItem value={"brazil"}>Brasil</MenuItem>
            <MenuItem value={"argentina"}>Argentina</MenuItem>
            <MenuItem value={"usa"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select-travels">Viagens</InputLabel>
          <Select labelId="select-travels">
            <MenuItem value={"pluto"}>Plutão</MenuItem>
            <MenuItem value={"mars"}>Marte</MenuItem>
            <MenuItem value={"uranus"}>Urano</MenuItem>
          </Select>
        </FormControl>

        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Inscrever-se
        </Button>
      </FormContainer>
    </div>
  );
};

export default ApplicationFormPage;
