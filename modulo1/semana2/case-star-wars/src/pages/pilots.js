import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { PilotCard } from "../components/pilot-card";

const PilotsPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  row-gap: 15px;
`;

export const PilotsPage = () => {
  const [pilots, setPilots] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(({ data }) => {
        setPilots(data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <PilotsPageContainer>
      {pilots.map((pilot, index) => (
        <PilotCard key={index} name={pilot.name} image={"imagem"} />
      ))}
    </PilotsPageContainer>
  );
};
