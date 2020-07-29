import React from "react";
import { Link } from "react-router-dom";

import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { ListTripsPageContainer } from "./styles";

import PageTitle from "../../components/PageTitle";

const ListTripsPage = () => {
  return (
    <ListTripsPageContainer>
      <PageTitle title={"Lista de viagens"} />

      <List component="nav" aria-label="secondary mailbox folders">
        <Link to={"/trip/details"}>
          <ListItem button>
            <ListItemText primary="Viagem para Marte" />
          </ListItem>
        </Link>

        <Link to={"/trip/details"}>
          <ListItem button>
            <ListItemText primary="Viagem para Lua" />
          </ListItem>
        </Link>
      </List>

      <Link to={"/create/trip"}>
        <Button variant={"contained"} color={"primary"}>
          Criar viagem
        </Button>
      </Link>
    </ListTripsPageContainer>
  );
};

export default ListTripsPage;
