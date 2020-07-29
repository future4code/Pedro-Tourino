import React from "react";

import { Card, CardContent, Typography, List } from "@material-ui/core/";

import CandidateItem from "./CandidateItem";

const CandidatesList = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h5"} gutterBottom>
          Lista de candidatos
        </Typography>

        <List>
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </List>
      </CardContent>
    </Card>
  );
};

export default CandidatesList;
