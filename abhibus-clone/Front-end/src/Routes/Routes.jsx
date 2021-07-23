import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Passenger } from "../Components/Passenger/Passenger";
import { Home } from "./Dashboard/Home";

export function Routes() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/passengerinfo">
					<Passenger />
				</Route>
				<Route>
					<h2>Ooops ..........!Page not Founds</h2>
				</Route>
			</Switch>
		</>
	);
}
