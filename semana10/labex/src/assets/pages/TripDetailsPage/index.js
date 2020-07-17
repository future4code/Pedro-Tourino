import React from "react";

import { ContentContainer } from "./styles";

import PageTitle from "../../components/PageTitle";
import TripInfo from "./TripInfo";
import CandidatesList from "./CandidatesList";

const TripDetailsPage = () => {
  return (
    <div>
      <PageTitle title={"Detalhes da viagem"} />

      <ContentContainer>
        <TripInfo />
        <CandidatesList />
      </ContentContainer>
    </div>
  );
};

export default TripDetailsPage;
