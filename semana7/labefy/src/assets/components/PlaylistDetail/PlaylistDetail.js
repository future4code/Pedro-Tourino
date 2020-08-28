import React from "react";
import axios from "axios";

// Import functional component
import { TrackCard } from "../TrackCard/TrackCard";

// Import API Headers (axios config)
import { baseUrl, axiosConfig } from "../../constants/ApiHeaders";

// Import current component styles
import { PlaylistDetailContainer } from "./PlaylistDetailStyles";
import { TrackCreationForm } from "./PlaylistDetailStyles";

export class PlaylistDetail extends React.Component {
  state = {
    tracks: [],
    trackName: "",
    artist: "",
    url: "",
  };

  // Function fetch tracks in API and render
  componentDidMount = () => {
    this.fetchTracks();
  };

  // Function fetch tracks in API
  fetchTracks = () => {
    axios
      .get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig)
      .then((res) => {
        this.setState({ tracks: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function remove tracks in API
  removeTrackFromPlaylist = (trackId) => {
    axios
      .delete(
        `${baseUrl}/${this.props.playlistId}/tracks/${trackId}`,
        axiosConfig
      )
      .then(() => {
        this.fetchTracks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function add tracks in API
  addTrackToPlaylist = (e) => {
    e.preventDefault();

    const body = {
      name: this.state.trackName,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig)
      .then(() => {
        this.fetchTracks();
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      trackName: "",
      artist: "",
      url: "",
    });
  };

  // Function adds values ​​to the track
  handleChangeInputValues = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // Function searches for tracks and removes the selected one
    const tracks = this.state.tracks.map((track) => {
      return (
        <TrackCard
          key={track.id}
          trackName={track.name}
          artist={track.artist}
          url={track.url}
          trackId={track.id}
          removeTrackFromPlaylist={this.removeTrackFromPlaylist}
        />
      );
    });

    return (
      <PlaylistDetailContainer>
        <h1>Cadastrar nova faixa</h1>

        {/* Create tracks in playlist */}
        <TrackCreationForm onSubmit={this.addTrackToPlaylist}>
          <div>
            {/* Add track name */}
            <label htmlFor="trackName">Nome da música:</label>
            <input
              placeholder="Nome da música"
              name="trackName"
              value={this.state.trackName}
              onChange={this.handleChangeInputValues}
            />
          </div>

          <div>
            {/* Add track artist */}
            <label htmlFor="artist">Artista:</label>
            <input
              placeholder="Nome do Artista"
              name="artist"
              value={this.state.artist}
              onChange={this.handleChangeInputValues}
            />
          </div>

          <div>
            {/* Add track url */}
            <label htmlFor="url">URL da música:</label>
            <input
              placeholder="URL da música"
              name="url"
              value={this.state.url}
              onChange={this.handleChangeInputValues}
            />
          </div>

          <button type="submit">Adicionar música</button>
        </TrackCreationForm>

        <h1>Faixas</h1>
        {/* Calls the tracks in the playlist */}
        {tracks}

        {/* Back to playlists */}
        <button onClick={() => this.props.changePage("playlists", "")}>
          Voltar para playlists
        </button>
      </PlaylistDetailContainer>
    );
  }
}
