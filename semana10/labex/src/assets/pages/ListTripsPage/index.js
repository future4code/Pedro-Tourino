import React from "react";
import { Link } from "react-router-dom";

import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { ListTripsPageContainer } from "./styles";

import PageTitle from "../../components/PageTitle";
import { useListTrips } from "../../hooks/useListTrips";

const ListTripsPage = () => {
  const trips = useListTrips();

  return (
    <ListTripsPageContainer>
      <PageTitle title={"Lista de viagens"} />

      <Link to={"/create/trip"}>
        <Button variant={"contained"} color={"primary"}>
          Criar viagem
        </Button>
      </Link>

      <List component="nav">
        {trips.map((trip) => {
          return (
            <Link to={"/trip/details"}>
              <ListItem button>
                <ListItemText primary={trip.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </ListTripsPageContainer>
  );
};

export default ListTripsPage;
