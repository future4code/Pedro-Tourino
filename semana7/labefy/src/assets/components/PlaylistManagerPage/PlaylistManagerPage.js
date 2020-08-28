import React from "react";

// Import class components
import { Playlists } from "../Playlists/Playlists";
import { PlaylistDetail } from "../PlaylistDetail/PlaylistDetail";

// Import current component styles
import { PlaylistManagerContainer } from "./PlaylistManagerPageStyles";

export class PlaylistManagerPage extends React.Component {
  state = {
    currentPage: "playlists",
    playlistId: "",
  };

  handleChangePage = (currentPage, playlistId) => {
    this.setState({
      currentPage: currentPage,
      playlistId: playlistId,
    });
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlists") {
        return <Playlists changePage={this.handleChangePage} />;
      } else if (this.state.currentPage === "playlistDetail") {
        return (
          <PlaylistDetail
            changePage={this.handleChangePage}
            playlistId={this.state.playlistId}
          />
        );
      }
    };

    return (
      <PlaylistManagerContainer>{renderCurrentPage()}</PlaylistManagerContainer>
    );
  }
}
