import React from "react";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core/";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const CandidateItem = () => {
  return (
    <ListItem>
      <ListItemText primary="Candidato 1" />

      <ListItemSecondaryAction>
        <IconButton>
          <ThumbUpIcon color={""} />
        </IconButton>

        <IconButton>
          <ThumbDownIcon color={""} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CandidateItem;
