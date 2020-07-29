import React from "react";

import { ContentContainer } from "./styles";

import PageTitle from "../../components/PageTitle";
import TripInfoCard from "./TripInfoCard";
import CandidatesList from "./CandidatesList";

const TripDetailsPage = () => {
  return (
    <div>
      <PageTitle title={"Detalhes da viagem"} />

      <ContentContainer>
        <TripInfoCard info={trip} />
        <CandidatesList />
      </ContentContainer>
    </div>
  );
};

export default TripDetailsPage;
