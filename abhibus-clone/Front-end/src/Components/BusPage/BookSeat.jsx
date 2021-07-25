import React from "react";
import {
	SeatBook,
	SeatDetails,
	Container,
	SeatSelect,
	LadiesSeat,
	Upper,
	Lower,
	EachSeat,
	Small,
	Front,
	UpperDiv,
	Rear,
	LowerDiv,
	NotesIcon,
	Ava,
	Selected,
	ForLad,
	Unava,
	Options,
	OptFlex,
	Span,
	Jour,
	JourCity,
	SeatTaken,
	Button,
} from "./BookSeat.styled";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
	booked: {
		backgroundColor: "grey",
	},
	notBooked: {
		backgroundColor: "white",
	},
	selec: {
		backgroundColor: "green",
	},
});

export function BookSeat({ price, details }) {
	console.log(price);
	const classes = useStyles();
	const [upperSeats, setUpperSeats] = React.useState([
		{ seatNo: 16, available: true, sel: false, fare: price },
		{ seatNo: 17, available: true, sel: false, fare: price },
		{ seatNo: 18, available: false, sel: false, fare: price },
		{ seatNo: 19, available: true, sel: false, fare: price },
		{ seatNo: 20, available: true, sel: false, fare: price },
		{ seatNo: 21, available: true, sel: false, fare: price },
		{ seatNo: 22, available: true, sel: false, fare: price },
		{ seatNo: 23, available: true, sel: false, fare: price },
		{ seatNo: 24, available: false, sel: false, fare: price },
		{ seatNo: 25, available: true, sel: false, fare: price },
		{ seatNo: 26, available: true, sel: false, fare: price },
		{ seatNo: 27, available: true, sel: false, fare: price },
		{ seatNo: 28, available: true, sel: false, fare: price },
		{ seatNo: 29, available: true, sel: false, fare: price },
		{ seatNo: 30, available: true, sel: false, fare: price },
	]);
	const [lowerSeats, setLowerSeats] = React.useState([
		{ seatNo: 1, available: true, sel: false, fare: price },
		{ seatNo: 2, available: true, sel: false, fare: price },
		{ seatNo: 3, available: false, sel: false, fare: price },
		{ seatNo: 4, available: true, sel: false, fare: price },
		{ seatNo: 5, available: true, sel: false, fare: price },
		{ seatNo: 6, available: true, sel: false, fare: price },
		{ seatNo: 7, available: true, sel: false, fare: price },
		{ seatNo: 8, available: true, sel: false, fare: price },
		{ seatNo: 9, available: false, sel: false, fare: price },
		{ seatNo: 10, available: true, sel: false, fare: price },
		{ seatNo: 11, available: true, sel: false, fare: price },
		{ seatNo: 12, available: true, sel: false, fare: price },
		{ seatNo: 13, available: true, sel: false, fare: price },
		{ seatNo: 14, available: true, sel: false, fare: price },
		{ seatNo: 15, available: true, sel: false, fare: price },
	]);

	let { arrivallocation, departurelocation, date } = details;
	const [data, setData] = React.useState({
		from: departurelocation,
		to: arrivallocation,
		date: date,
	});

	const [droping, setDroping] = React.useState("");
	const [boarding, setBoarding] = React.useState("");

	const history = useHistory();
	var count = 0;
	upperSeats.map((el) => {
		return el.available === true && count++;
	});
	lowerSeats.map((el) => {
		return el.available === true && count++;
	});
	let [seatSelected, setSeatSelected] = React.useState([]);
	// upperSeats.map(el => {
	// console.log("Upper", el)
	//  var  retVal = el.sel===true && seatSelected.push(el.seatNo)
	// console.log('selected in upper: ', seatSelected)
	// return retVal
	// })
	// lowerSeats.map(el => {
	//   console.log("Lower", el)
	//   // return el.sel==true&&seatSelected.push(el.seatNo)
	//   var  retVal = el.sel===true && seatSelected.push(el.seatNo)
	//   console.log('selected in lower: ', seatSelected)
	//   return retVal
	// })
	let total = 0;
	upperSeats.map((el) => {
		return el.sel === true && (total += Number(el.fare));
	});
	lowerSeats.map((el) => {
		return el.sel === true && (total += Number(el.fare));
	});

	const handleUpperSeats = (seatNo) => {
		// setSelected(!selected)
		// console.log(" Incoming seat number is ", seatNo)
		var temp = upperSeats.map((el) => {
			var retVal = el.seatNo === seatNo ? { ...el, sel: !el.sel } : el;
			console.log(retVal);
			if (retVal.sel === true && el.seatNo === seatNo) {
				setSeatSelected([...seatSelected, retVal.seatNo]);
			}
			/*Selected to Deselect */
			if (el.sel === true && retVal.sel == false && el.seatNo === seatNo) {
				var current = seatSelected.filter((seatNo) => {
					return seatNo != retVal.seatNo;
				});

				setSeatSelected(current);
			}
			return retVal;
		});
		// console.log('selected seats 1: ', seatSelected)
		setUpperSeats(temp);
		// console.log(temp);
		// console.log('selected seats 2: ', seatSelected)
	};
	// React.useEffect(() => {
	//   handleUpperSeats()
	// },[])
	const handleLowerSeats = (seatNo) => {
		// setSelected(!selected)
		var temp = lowerSeats.map((el) => {
			var retVal = el.seatNo === seatNo ? { ...el, sel: !el.sel } : el;
			console.log(retVal);
			if (retVal.sel === true && el.seatNo === seatNo) {
				setSeatSelected([...seatSelected, retVal.seatNo]);
			}
			/*Selected to Deselect */
			if (el.sel === true && retVal.sel == false && el.seatNo === seatNo) {
				var current = seatSelected.filter((seatNo) => {
					return seatNo != retVal.seatNo;
				});

				setSeatSelected(current);
			}
			return retVal;
		});
		setLowerSeats(temp);
		// console.log(temp);
	};

	let { matchedBuses } = useSelector((state) => state.bus);

	console.log(matchedBuses.boardingPoints);
	console.log(matchedBuses.droppingPoint);

	let object = {
		from: departurelocation,
		to: arrivallocation,
		date: date,
		seatSelected,
		total,
		droping,
		boarding,
	};

	const handleContinupayment = () => {
		let string = JSON.stringify(object);
		localStorage.setItem("details", string);

		history.push("/passengerinfo");
	};

	return (
		<Container>
			<SeatBook>
				<div>{count} Seats Available</div>
				<div>Click on seat to select/deselect seat</div>
				<SeatSelect>
					<LadiesSeat>
						<div>
							<NotesIcon />
						</div>
						<ul>
							<li>
								{" "}
								If Ladies seat is available, Single Lady traveller must choose
								the same
							</li>
							<li> Last row seats are reserved only for Male</li>
						</ul>
					</LadiesSeat>
					<UpperDiv>
						<Front>Front</Front>
						<div>
							<Upper>
								{upperSeats.slice(0, 10).map((el) => {
									return (
										<>
											{el.available ? (
												<EachSeat
													onClick={() => handleUpperSeats(el.seatNo)}
													style={
														el.sel === true
															? { backgroundColor: "green" }
															: { backgroundColor: "white" }
													}
													className={classes.notBooked}
												>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											) : (
												<EachSeat className={classes.booked}>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											)}
										</>
									);
								})}
							</Upper>
							<Upper>
								{upperSeats.slice(10, 15).map((el) => {
									return (
										<>
											{el.available ? (
												<EachSeat
													onClick={() => handleUpperSeats(el.seatNo)}
													style={
														el.sel === true
															? { backgroundColor: "green" }
															: { backgroundColor: "white" }
													}
													className={classes.notBooked}
												>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											) : (
												<EachSeat className={classes.booked}>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											)}
										</>
									);
								})}
							</Upper>
						</div>
						<Rear>Rear</Rear>
					</UpperDiv>

					<br />
					<LowerDiv>
						<Front>Front</Front>
						<div>
							<Lower>
								{lowerSeats.slice(0, 10).map((el) => {
									return (
										<>
											{el.available ? (
												<EachSeat
													onClick={() => handleLowerSeats(el.seatNo)}
													style={
														el.sel === true
															? { backgroundColor: "green" }
															: { backgroundColor: "white" }
													}
													className={classes.notBooked}
												>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											) : (
												<EachSeat className={classes.booked}>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											)}
										</>
									);
								})}
							</Lower>
							<Lower>
								{lowerSeats.slice(10, 15).map((el) => {
									return (
										<>
											{el.available ? (
												<EachSeat
													onClick={() => handleLowerSeats(el.seatNo)}
													style={
														el.sel === true
															? { backgroundColor: "green" }
															: { backgroundColor: "white" }
													}
													className={classes.notBooked}
												>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											) : (
												<EachSeat className={classes.booked}>
													<Small style={{ backgroundColor: "white" }} />
												</EachSeat>
											)}
										</>
									);
								})}
							</Lower>
						</div>
						<Rear>Rear</Rear>
					</LowerDiv>
				</SeatSelect>
				<Options>
					<OptFlex>
						<Ava></Ava>
						<Span>Available</Span>
					</OptFlex>
					<OptFlex>
						<Selected></Selected>
						<Span>Selected</Span>
					</OptFlex>
					<OptFlex>
						<Unava></Unava>
						<Span>Unavailable</Span>
					</OptFlex>
					<OptFlex>
						<ForLad></ForLad>
						<Span>For Ladies</Span>
					</OptFlex>
				</Options>
			</SeatBook>
			<SeatDetails>
				<Jour>Onwards Journey</Jour>
				<JourCity>
					From{" "}
					<strong>
						{data.from} to {data.to}
					</strong>
				</JourCity>
				<JourCity>
					on <strong>{data.date}</strong>
				</JourCity>
				<hr></hr>
				<SeatTaken>
					<div>Seat selected</div>
					<div>
						{" "}
						<span>{seatSelected.join(",")}</span>
					</div>
				</SeatTaken>
				<SeatTaken>
					<div>Total fare</div>
					<div>
						{" "}
						<span>
							&#8377;<span>{total}</span>
						</span>
					</div>
				</SeatTaken>
				<SeatTaken>
					<div>Boarding Points</div>{" "}
					<select
						name="boradingpoints"
						onChange={(e) => setBoarding(e.target.value)}
					>
						{matchedBuses.boardingPoints?.map((item) => (
							<option value={item}>{item}</option>
						))}
					</select>
				</SeatTaken>
				<SeatTaken>
					<div>Droping Points</div>{" "}
					<select
						name="droppingpoint"
						onChange={(e) => setDroping(e.target.value)}
					>
						{matchedBuses.droppingPoint?.map((item) => (
							<option value={item}>{item}</option>
						))}
					</select>
				</SeatTaken>
				<hr></hr>
				<Button
					onClick={handleContinupayment}
					disabled={seatSelected.length < 1}
				>
					Continue to Payment
				</Button>
			</SeatDetails>
		</Container>
	);
}
