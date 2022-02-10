import styled from "styled-components";
import LukeSkywalker from "../img/luke-skywalker.jpeg";

export const PilotCardContainer = styled.div`
  width: 100px;
  height: 150px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: end;
  p {
    margin: 0;
  }
  background-image: url(${LukeSkywalker});
  background-position: center;
  background-size: cover;
`;

const Image = styled.img``;

const Name = styled.p`
  color: white;
  background-color: #1f2738;
  padding: 10px;
`;

export const PilotCard = ({ name, image }) => {
  return (
    <PilotCardContainer>
      {/* <img src={LukeSkywalker} /> */}
      <Name>{name}</Name>
    </PilotCardContainer>
  );
};
