import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Passenger } from "../Components/Passenger/Passenger";
import { Home } from "./Dashboard/Home";
import { Index } from "../Components/BusPage/index";
import { Footer } from "../Components/Footer/Footer";
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
				<Route path="/bus">
					<Index />
				</Route>
				<Route>
					<h2>Ooops ..........!Page not Founds</h2>
				</Route>
			</Switch>
		</>
	);
}
