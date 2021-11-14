import { useState } from "react";

import { AddTrip } from "./trips/AddTrip.jsx";

function App() {
  const [allTrips, setAllTrips] = useState([
    {
      place: "m1",
      date: "2020-01-01",
      type: "tt",
    },
    {
      place: "m2",
      date: "2020-01-01",
      type: "tt2",
    },
    {
      place: "m3",
      date: "2020-01-01",
      type: "tt3",
    },
    AddTrip(newTrip){
      setAllTrips(prevState)=>{
        allTrips: [
          ...prevState.allTrips,
          newTrip
        ],
      };
    },
  ]);
}
