import React from "react";

// Import current component styles
import { HeaderContainer } from "./HeaderStyles";
import { NavButtonsContainer } from "./HeaderStyles";

export const Header = (props) => {
  return (
    <HeaderContainer>
      <h1>Labefy</h1>

      {/* Pages nav buttons */}
      <NavButtonsContainer>
        <button onClick={() => props.changePage("playlistCreationPage")}>
          Cadastrar Playlist
        </button>

        <button onClick={() => props.changePage("playlistManagerPage")}>
          Gerenciar Playlists
        </button>
      </NavButtonsContainer>
    </HeaderContainer>
  );
};
