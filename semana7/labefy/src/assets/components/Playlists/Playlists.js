import React from "react";
import axios from "axios";

// Import functional component
import { PlaylistCard } from "../PlaylistCard/PlaylistCard";

// Import API Headers (axios config)
import { baseUrl, axiosConfig } from "../../constants/ApiHeaders";

// Import current component styles
import { PlaylistsContainer } from "./PlaylistsStyles";

export class Playlists extends React.Component {
  state = {
    playlists: [],
  };

  // Function fetch playlists in API and render
  componentDidMount = () => {
    this.fetchPlaylists();
  };

  // Function fetch playlists in API
  fetchPlaylists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function delete tracks in API
  deletePlaylist = (playlistId) => {
    axios
      .delete(`${baseUrl}/${playlistId}`, axiosConfig)
      .then((res) => {
        this.fetchPlaylists();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // Function searches for playlists and delete the selected one
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <PlaylistCard
          key={playlist.id}
          changePage={this.props.changePage}
          name={playlist.name}
          playlistId={playlist.id}
          deletePlaylist={this.deletePlaylist}
        />
      );
    });

    return (
      <PlaylistsContainer>
        <h1>Playlists</h1>

        {/* Calls the Playlists */}
        {playlists}
      </PlaylistsContainer>
    );
  }
}
