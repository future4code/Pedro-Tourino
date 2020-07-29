import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { TextField, Button, InputAdornment } from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  const history = useHistory();
  const [form, handleOnChangeInput] = useForm({
    email: "",
    password: "",
  });

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-tourino-mello/login",
        body
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        history.push("/list/trips");
      });
  };

  return (
    <div>
      <PageTitle title={"Login"} />

      <FormContainer onSubmit={handleOnSubmitLogin}>
        <TextField
          label={"Email"}
          type={"email"}
          onChange={handleOnChangeInput}
          name={"email"}
          value={form["email"]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AlternateEmailIcon color={"action"} />
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          label={"Senha"}
          type={"password"}
          onChange={handleOnChangeInput}
          name={"password"}
          value={form["password"]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VpnKeyIcon color={"action"} />
              </InputAdornment>
            ),
          }}
          required
        />
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Entrar
        </Button>
      </FormContainer>
    </div>
  );
};

export default LoginPage;
