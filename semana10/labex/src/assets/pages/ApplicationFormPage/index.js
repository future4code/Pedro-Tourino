import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer";
import { useForm } from "../../hooks/useForm";
import { useListTrips } from "../../hooks/useListTrips";

const ApplicationFormPage = () => {
  const trips = useListTrips();

  const [form, handleOnChangeInput] = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: null,
  });

  const handleOnSubmitApplication = (e) => {
    e.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      profession: form.profession,
      country: form.country,
      applicationText: form.applicationText,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-tourino-mello/trips/${form.trip.id}/apply`,
        body
      )
      .then((res) => {});
  };

  return (
    <div>
      <PageTitle title={"Candidatar-se"} />

      <FormContainer onSubmit={handleOnSubmitApplication}>
        <TextField
          label={"Nome do candidato"}
          onChange={handleOnChangeInput}
          name={"name"}
          value={form["name"]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircleIcon color={"action"} />
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          type={"number"}
          label={"Idade"}
          onChange={handleOnChangeInput}
          name={"age"}
          value={form["age"]}
          required
        />
        <TextField
          label={"Texto de aplicação"}
          onChange={handleOnChangeInput}
          name={"applicationText"}
          value={form["applicationText"]}
          helperText="Explique por que você é um bom candidato(a)"
          required
        />
        <TextField
          label={"Profissão"}
          onChange={handleOnChangeInput}
          name={"profession"}
          value={form["profession"]}
          required
        />

        <FormControl>
          <InputLabel id="select-country">Países</InputLabel>
          <Select
            labelId="select-country"
            onChange={handleOnChangeInput}
            name={"country"}
            value={form["country"]}
            required
          >
            <MenuItem value={"brazil"}>Brasil</MenuItem>
            <MenuItem value={"argentina"}>Argentina</MenuItem>
            <MenuItem value={"usa"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select-trip">Viagens</InputLabel>
          <Select
            labelId="select-trip"
            onChange={handleOnChangeInput}
            name={"trip"}
            value={form["trip"]}
            required
          >
            {trips.map((trip) => {
              return <MenuItem value={trip}>{trip.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Enviar
        </Button>
      </FormContainer>
    </div>
  );
};

export default ApplicationFormPage;
