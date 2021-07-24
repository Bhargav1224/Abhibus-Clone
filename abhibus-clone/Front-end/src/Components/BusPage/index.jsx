import { Card } from "./Card";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./index.module.css";
import { FilterLeft } from "./FilterLeft";
// import {data} from "./data.json"

export const Index = () => {
	const [PriceFilter, setPriceFilter] = useState(true);
	const [seatFilter, setseatFilter] = useState(true);
	const [DTimeFilter, setDTimeFilter] = useState(true);
	const [ATimeFilter, setATimeFilter] = useState(true);
	const [RatingeFilter, setRatingeFilter] = useState(true);

	let { matchedBuses } = useSelector((state) => state.bus);

	// console.log(matchedBuses.buses);

	const [value, setValue] = useState(matchedBuses.buses || []);

	// console.log(value);

	const handlePrice = () => {
		if (PriceFilter) {
			const sample = value.sort((a, b) => {
				return b.price - a.price;
			});

			setValue(sample);
		} else {
			const sample = value.sort((a, b) => {
				return a.price - b.price;
			});

			setValue(sample);
		}
	};

	const handleSeats = () => {
		if (seatFilter) {
			const sample = value.sort((a, b) => {
				return b.availableSeats - a.availableSeats;
			});

			setValue(sample);
		} else {
			const sample = value.sort((a, b) => {
				return a.availableSeats - b.availableSeats;
			});

			setValue(sample);
		}
	};

	const handleDeparture = () => {
		if (DTimeFilter) {
			const sample = value.sort((a, b) => {
				let c = b.startTime;
				let d = a.startTime;
				console.log(parseInt(c));

				return parseInt(c) - parseInt(d);
			});

			setValue(sample);
		} else {
			const sample = value.sort((a, b) => {
				let c = b.startTime;
				let d = a.startTime;

				return parseInt(d) - parseInt(c);
			});

			setValue(sample);
		}
	};
	const handleArrival = () => {
		if (ATimeFilter) {
			const sample = value.sort((a, b) => {
				let c = b.arrivalTime;
				let d = a.arrivalTime;

				return parseInt(c) - parseInt(d);
			});

			setValue(sample);
		} else {
			const sample = value.sort((a, b) => {
				let c = b.arrivalTime;
				let d = a.arrivalTime;

				return parseInt(d) - parseInt(c);
			});

			setValue(sample);
		}
	};

	const handleRating = () => {
		if (RatingeFilter) {
			const sample = value.sort((a, b) => {
				return b.rating - a.rating;
			});

			setValue(sample);
		} else {
			const sample = value.sort((a, b) => {
				return a.rating - b.rating;
			});

			setValue(sample);
		}
	};

	useEffect(() => {
		setValue(matchedBuses.buses);
	}, [matchedBuses]);

	return (
		<div>
			<div style={{ height: "180px" }}></div>
			<div className={style.sortBar}>
				<div>Sort By </div>
				<div
					onClick={() => setPriceFilter(!PriceFilter)}
					style={{ display: "flex" }}
				>
					<div onClick={handlePrice} style={{ cursor: "pointer" }}>
						Price
					</div>

					<div style={{ margin: "-5px 0 0 5px" }}>
						{PriceFilter ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						)}
					</div>
				</div>
				<div
					onClick={() => setseatFilter(!seatFilter)}
					style={{ display: "flex" }}
				>
					<div onClick={handleSeats} style={{ cursor: "pointer" }}>
						Seats{" "}
					</div>

					<div style={{ margin: "-5px 0 0 5px" }}>
						{seatFilter ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						)}
					</div>
				</div>
				<div
					onClick={() => setDTimeFilter(!DTimeFilter)}
					style={{ display: "flex" }}
				>
					<div onClick={handleDeparture} style={{ cursor: "pointer" }}>
						Departure Time{" "}
					</div>

					<div style={{ margin: "-5px 0 0 5px" }}>
						{DTimeFilter ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						)}
					</div>
				</div>
				<div
					onClick={() => setATimeFilter(!ATimeFilter)}
					style={{ display: "flex" }}
				>
					<div onClick={handleArrival} style={{ cursor: "pointer" }}>
						Arrival Time{" "}
					</div>

					<div style={{ margin: "-5px 0 0 5px" }}>
						{ATimeFilter ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						)}
					</div>
				</div>
				<div
					onClick={() => setRatingeFilter(!RatingeFilter)}
					style={{ display: "flex" }}
				>
					<div onClick={handleRating} style={{ cursor: "pointer" }}>
						Ratings{" "}
					</div>

					<div style={{ margin: "-5px 0 0 5px" }}>
						{RatingeFilter ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
							</svg>
						)}
					</div>
				</div>
			</div>
			<div className={style.mainBody}>
				<div style={{ marginLeft: "10%" }}>
					<FilterLeft />
				</div>
				<div>
					<div className={style.topImg}>
						<img
							style={{ width: "200px" }}
							src="https://static.abhibus.com/img/diwali/banners/top-banners-rating.png"
							alt=""
							srcset=""
						/>
						<img
							style={{ width: "200px", marginLeft: "5px" }}
							src="https://static.abhibus.com/busgallery/offerbanners/Sep2020/10/top-banners-small-3.png"
							alt=""
							srcset=""
						/>
					</div>
					<div className={style.cardBody}>
						{matchedBuses.buses &&
							value?.map((item) => {
								return <Card busData={item} />;
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
