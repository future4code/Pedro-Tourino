import React from "react";

// Import current component styles
import { TrackCardContainer } from "./TrackCardStyles";
import { TrackContainer } from "./TrackCardStyles";
import { ArtistContainer } from "./TrackCardStyles";
import { DeleteButton } from "./TrackCardStyles";

export const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <TrackContainer>{props.trackName} - </TrackContainer>
        <ArtistContainer>{props.artist}</ArtistContainer>

        <DeleteButton
          onClick={() => props.removeTrackFromPlaylist(props.trackId)}
        >
          X
        </DeleteButton>
      </div>

      <audio controls="controls">
        <source src={props.url} type="audio/ogg" />
      </audio>
    </TrackCardContainer>
  );
};
