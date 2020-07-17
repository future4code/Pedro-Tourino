import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core/";

const TripInfoCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h5"} gutterBottom>
          Informações da viagem
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TripInfoCard;
