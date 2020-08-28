import React from "react";

// Import current component styles
import { PlaylistCardContainer } from "./PlaylistCardStyles";
import { NameContainer } from "./PlaylistCardStyles";
import { DeleteButton } from "./PlaylistCardStyles";

export const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      <button
        onClick={() => props.changePage("playlistDetail", props.playlistId)}
      >
        Abrir playlist
      </button>

      <NameContainer>{props.name}</NameContainer>

      <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)}>
        X
      </DeleteButton>
    </PlaylistCardContainer>
  );
};
