import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core/";

import TripInfoItem from "./TripInfoItem";

const TripInfoCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h5"} gutterBottom>
          Informações da viagem
        </Typography>

        <TripInfoItem infoName={"Nome"} info={"Viagem para Marte"} />
        <TripInfoItem infoName={"Planeta"} info={"Marte"} />
        <TripInfoItem infoName={"Data"} info={"01/01/2021"} />
        <TripInfoItem
          infoName={"Descrição"}
          info={"Viagem para colonizar Marte"}
        />
        <TripInfoItem infoName={"Duração / Dias"} info={"228"} />
      </CardContent>
    </Card>
  );
};

export default TripInfoCard;
