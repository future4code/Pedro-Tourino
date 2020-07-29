import { useState, useEffect } from "react";
import axios from "axios";

export const useListTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-tourino-mello/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      });
  }, []);

  return trips;
};
