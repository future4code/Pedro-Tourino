import React from "react";
import axios from "axios";

// Import API Headers (axios config)
import { baseUrl, axiosConfig } from "../../constants/ApiHeaders";

// Import current component styles
import { PlaylistCreationFormContainer } from "./PlaylistCreationPageStyles";
import { PlaylistCreationForm } from "./PlaylistCreationPageStyles";

export class PlaylistCreationPage extends React.Component {
  state = {
    inputNameValue: "",
  };

  handleChangeInputNameValue = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };

  createPlaylist = (e) => {
    e.preventDefault();

    const body = {
      name: this.state.inputNameValue,
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then(() => {
        alert("Playlist cadastrada com sucesso");
      })
      .catch((err) => [console.log(err)]);

    this.setState({ inputNameValue: "" });
  };

  render() {
    return (
      <PlaylistCreationFormContainer>
        <h1>Cadastrar nova Playlist</h1>

        <PlaylistCreationForm onSubmit={this.createPlaylist}>
          <label htmlFor="playlistNameInput">Nova Playlist</label>
          <input
            placeholder="Nome da Playlist"
            type="text"
            name="playlistNameInput"
            value={this.state.inputNameValue}
            onChange={this.handleChangeInputNameValue}
          />
          <button type="submit">Cadastrar Playlist</button>
        </PlaylistCreationForm>
      </PlaylistCreationFormContainer>
    );
  }
}
