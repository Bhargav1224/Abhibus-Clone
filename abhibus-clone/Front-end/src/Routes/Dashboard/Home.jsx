import React, { useState } from "react";
import {
	BusBook,
	TravelOptions,
	Heading,
	Opts,
	ImgChange,
	BusImg,
	OffersDiv,
	SumLines,
	OffersView,
	HeadingOffers,
	ImgBan,
	BannerDiv,
} from "./Home.styled.js";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { OffersCarausel } from "./OffersCarausel.jsx";
import { AgencyCar } from "./AgencyCar.jsx";
import { Covid } from "./Covid.jsx";
import { AbhiData } from "./AbhiData.jsx";
import { Faq } from "./Faq.jsx";
import { AppStores } from "./AppStores.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getBusDetails } from "../../Redux/BookBus/action.js";

const useStyles = makeStyles({
	inp: { border: "0.5px solid grey" },
	btn: {
		backgroundColor: "#c60001",
		border: "1px solid #c60001",
		color: "white",
		height: "54px",
		fontSize: "20px",
		width: "16%",
	},
});
const init = {
	leaving: "",
	going: "",
	date: "",
};
export function Home(init) {
	const classes = useStyles();
	const [quires, setQuires] = useState(init);

	const { leaving, going, date } = quires;
	const dispatch = useDispatch();
	const handleChange = (e) => {
		let { name, value } = e.target;

		setQuires({ ...quires, [name]: value });
	};

	const handleSearch = (e) => {
		e.preventDefault();

		const payload = {
			leaving,
			going,
			date,
		};

		dispatch(getBusDetails(payload));

		console.log(quires);
	};

	return (
		<div>
			<BusBook>
				<Heading>Book Bus Tickets</Heading>
				<TravelOptions>
					<Opts>Bus</Opts>
					<Opts>Train</Opts>
					<Opts>Hotels</Opts>
					<Opts>Rentals</Opts>
				</TravelOptions>
				<Container>
					<TextField
						className={classes.inp}
						name="leaving"
						onChange={handleChange}
						value={leaving}
						required
						id="filled-basic"
						label="Leaving from"
						variant="filled"
					/>
					<ImgChange src="https://static.abhibus.com/assets/img/twoway.png" />
					<TextField
						className={classes.inp}
						name="going"
						onChange={handleChange}
						value={going}
						required
						id="filled-basic"
						label="Going To"
						variant="filled"
					/>
					<TextField
						required
						id="date"
						name="date"
						onChange={handleChange}
						value={date}
						type="date"
						label="Date of Journey"
						InputLabelProps={{ shrink: true }}
						variant="outlined"
					/>
					<TextField
						id="date"
						type="date"
						label="Return (optional)"
						InputLabelProps={{ shrink: true }}
						variant="outlined"
					/>
					<Button
						onClick={handleSearch}
						className={classes.btn}
						variant="contained"
					>
						Search
					</Button>
				</Container>
			</BusBook>
			<div>
				<BusImg src="https://static.abhibus.com/img/newlogos/bus-seach-bg-new.jpg" />
			</div>
			<OffersDiv>
				<SumLines>
					<HeadingOffers>AbhiBus Offers</HeadingOffers>
					<OffersView>
						<div>All Offers</div>
						<div>Bus offers</div>
						<div>View All</div>
					</OffersView>
				</SumLines>
				<OffersCarausel />
			</OffersDiv>
			<br />
			<br />
			<OffersDiv>
				<SumLines>
					<HeadingOffers>
						Book SRTC (State Road Transport Corporation) bus tickets at AbhiBus
					</HeadingOffers>
				</SumLines>
				<AgencyCar />
			</OffersDiv>
			<BannerDiv>
				<ImgBan src="/abhicust.jpg" alt="banner" />
			</BannerDiv>
			<Covid />
			<AbhiData />
			<Faq />
			<AppStores />
		</div>
	);
}
