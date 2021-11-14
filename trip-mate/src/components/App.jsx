import React, { Component } from "react";

// components
import { AddTrip } from "./trips/AddTrip";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [
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
      ],
    };
    this.AddTrip = this.AddTrip.bind(this);
  }

  AddTrip(newTrip) {
    this.setState((prevState) => {
      return {
        allTrips: [
          ...prevState.allTrips,
          newTrip,
        ],
      };
    });
  }
  countDays(filter) {
    const { allTrips } = this.state;
    return allTrips.filter((trip) => filter ? trip.type === filter : trip)
      .length;
  }

  // swich goes to first matching route

  render() {
    return (
      <div className="app">
        <Router>
          <div className="route-container">
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  <TripsCount
                    {...props}
                    total={this.countDays()}
                    tt={this.countDays("mm1")}
                    tt2={this.countDays("mm2")}
                    tt3={this.countDays("mm3")}
                  />;
                }}
              >
              </Route>
              <Route
                path="/list/:filer"
                render={(props) => {
                  <TripsList
                    {...props}
                    days={this.state.allTrips}
                  />;
                }}
              >
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
