import React, { useState } from "react";
import style from "./card.module.css";
import Button from "@material-ui/core/Button";
import { BookSeat } from "./BookSeat";
export const Card = ({ busData,details }) => {
	const [showCancellation, setShowCancellation] = useState(false);
	console.log(showCancellation);
	// console.log(busData)

	const [seates, setSeates] = useState(false);
	
	const hangleSeates = () => {
		setSeates(!seates)
	}
	return (
		<>
		<div className={style.card}>
			<div>
				<img
					src="https://cdn.iconscout.com/icon/premium/png-64-thumb/location-marker-1755259-1490316.png"
					alt=""
					srcset=""
				/>
			</div>
			<div>
				<ul>
					<li>{busData.startTime}</li>
					<p>{busData.travelTime} hours</p>
					<li>{busData.arrivalTime}</li>
				</ul>
			</div>
			<div className={style.busDetails}>
				<h2>{busData.busTypeName}</h2>
				<p>{busData.travelerAgentName}</p>
				<div>
					<a
						onMouseOver={() => setShowCancellation(!showCancellation)}
						href="#"
					>
						{" "}
						Cancellation Policy
					</a>
				</div>
			</div>
			<div className={style.availableSeats}>
				{busData.availableSeats} seats Available
			</div>
			<div className={style.fare}>₹ {busData.price}</div>
			<div className={style.ratings}>
				<div>
					<img
						src="https://static.abhibus.com/assets/img/star-orabge-16.png"
						alt=""
						srcset=""
					/>
					<span> {busData.rating}</span>
					<p>(Few Ratings)</p>
				</div>
				<div className={style.bookNowBtn}>
					<button onClick={hangleSeates}>Select Seat</button>

				</div>
				
			</div>

			</div>
			{seates&&<BookSeat price={busData.price} busname={busData.busTypeName} details={details} />}
			</>

	);
};
