import React from "react";
import {
	Nav,
	Linked,
	Img,
	NavLinks,
	BookDiv,
	FilledCircle,
	BookingOptions,
	BookingList,
	User,
	ExpandArrow,
} from "./Navbar.styled.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Login } from "./Login.jsx";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		width: "40%",
	height: "400px",
	// border: "1px solid black",
	/* margin: auto; */
	borderRadius: "15px"
	},
}));
export function Navbar() {
	const [flag, setFlag] = React.useState(false);
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleBookings = () => {
		setFlag(!flag);
	};

	return (
		<Nav>
			<div>
				<Linked to="/">
					<Img
						src="https://static.abhibus.com/img/newlogos/logo1.png"
						alt="icon-web"
					/>
				</Linked>
			</div>
			<NavLinks>
				<Linked to="/offers">Offers</Linked>
				<Linked to="/refer-a-friend">Get Free Rides</Linked>
				<BookDiv onClick={handleBookings}>
					<span>My Bookings</span> <ExpandArrow style={{ color: "red" }} />{" "}
				</BookDiv>
				{flag && (
					<BookingOptions>
						<Linked to="/myticket">
							<BookingList>
								<FilledCircle style={{ width: "13px" }} />
								<span>Print Booking</span>
							</BookingList>
						</Linked>
						<Linked to="/cancellation">
							<BookingList>
								<FilledCircle style={{ width: "13px" }} />
								<span>Cancel Booking</span>
							</BookingList>
						</Linked>
					</BookingOptions>
				)}
				<BookDiv>
					<User />{" "}
					<div>
						<Linked type="button" onClick={handleOpen}>
							Login/Register
						</Linked>
						<Modal
							aria-labelledby="transition-modal-title"
							aria-describedby="transition-modal-description"
							className={classes.modal}
							open={open}
							onClose={handleClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
						>
							<Fade in={open}>
								<div className={classes.paper}>
									<Login />
								</div>
							</Fade>
						</Modal>
					</div>{" "}
					<ExpandArrow style={{ color: "red" }} />
				</BookDiv>
			</NavLinks>
		</Nav>
	);
}
