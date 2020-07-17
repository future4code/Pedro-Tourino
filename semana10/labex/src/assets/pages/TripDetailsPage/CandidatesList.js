import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const CandidatesList = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" variant={"h5"} gutterBottom>
          Lista de candidatos
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography color="textSecondary">adjective</Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CandidatesList;
