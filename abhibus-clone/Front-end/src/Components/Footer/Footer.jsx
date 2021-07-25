import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
	Circle,
	FlexDiv,
	Social,
	FootCont,
	GridItems,
	Head1,
	Li,
	FlexCont2,
	FlexCont3,
	FootCont2,
} from "./Footer.styled";
export function Footer() {
	return (
		<>
			<FlexDiv>
				<Social>We are Social! Connect with us on</Social>
				<Circle>
					<FacebookIcon />
				</Circle>
				<Circle>
					<InstagramIcon />
				</Circle>
				<Circle>
					<TwitterIcon />
				</Circle>
				<Circle>
					<PinterestIcon />
				</Circle>
				<Circle>
					<YouTubeIcon />
				</Circle>
			</FlexDiv>
			<FootCont>
				<GridItems>
					<div>
						<Head1>Popular Bus Routes</Head1>
						<ul>
							<Li>Hyderabad-Bangalore Buses</Li>
							<Li>Pune-Shirdi Buses</Li>
							<Li>Chennai-Coimbatore Buses</Li>
							<Li>Hyderabad-Visakhapatnam Buses</Li>
							<Li>Bangalore-Hyderabad Buses</Li>
							<Li>Bangalore-Vijayawada Buses</Li>
							<Li>Hyderabad-Chennai Buses</Li>
							<Li>Chennai-Bangalore Buses</Li>
							<Li>Bangalore-Chennai Buses</Li>
							<Li>Hyderabad-Vijayawada Buses</Li>
						</ul>
					</div>
					<div>
						<Head1>Popular Train Routes</Head1>
						<ul>
							<Li>Hyderabad - Tirupati Trains</Li>
							<Li>Bangalore - Hyderabad Trains</Li>
							<Li>Chennai - Hyderabad Trains</Li>
							<Li>Bangalore - Mysore Trains</Li>
							<Li>Delhi - Coimbatore Trains</Li>
							<Li>Guntur to Hyderabad Trains</Li>
							<Li>Bangalore to Bhubaneswar Trains</Li>
							<Li>Bangalore to Channarayapatna Trains</Li>
							<Li>Coimbatore to Ernakulam Trains</Li>
							<Li>Pune to Hyderabad Trains</Li>
						</ul>
					</div>
					<div>
						<Head1>Popular Hotel Cities</Head1>
						<ul>
							<Li>Hotels in Hyderabad</Li>
							<Li>Hotels in Jaipur</Li>
							<Li>Hotels in Mangalore</Li>
							<Li>Hotels in Bengaluru</Li>
							<Li>Hotels in Vizag</Li>
							<Li>Hotels in Goa</Li>
							<Li>Hotels in Mysore</Li>
							<Li>Hotels in Shirdi</Li>
							<Li>Hotels in Coimbatore</Li>
							<Li>Hotels in Coorg</Li>
						</ul>
					</div>
					<div>
						<Head1>Popular Bus Operators</Head1>
						<ul>
							<Li>APSRTC</Li>
							<Li>TSRTC</Li>
							<Li>BSRTC</Li>
							<Li>Kerala RTC</Li>
							<Li>Orange Travels</Li>
							<Li>SRS Travels</Li>
							<Li>Morning Star Travels</Li>
							<Li>Kaveri Travels</Li>
							<Li>Diwakar Travels</Li>
						</ul>
					</div>
					<div>
						<Head1>More Useful Links</Head1>
						<ul>
							<Li>Check PNR Status</Li>
							<Li>Train Running Status</Li>
							<Li>Bus Rentals</Li>
							<Li>APSRTC Bus Booking</Li>
							<Li>TSRTC Bus Booking</Li>
							<Li>Kerala RTC Bus Booking</Li>
							<Li>MSRTC Bus Booking</Li>
							<Li>Hotel Bookings</Li>
							<Li>Bus Booking Offers</Li>
						</ul>
					</div>
				</GridItems>
			</FootCont>
			<FootCont2>
				<FlexCont2>
					<div>
						Operators <span>|</span>
					</div>
					<div>
						Routes <span>|</span>
					</div>
					<div>
						Train Routes <span>|</span>
					</div>
					<div>
						Offers <span>|</span>
					</div>
					<div>
						Mobile <span>|</span>
					</div>
					<div>
						About <span>|</span>
					</div>
					<div>
						News <span>|</span>
					</div>
					<div>
						Career <span>|</span>
					</div>
					<div>
						Contact <span>|</span>
					</div>
					<div>
						Abhibus Community <span>|</span>
					</div>
					<div>Booking Tips</div>
				</FlexCont2>
				<FlexCont3>
					<div>
						FAQs <span>|</span>
					</div>
					<div>
						Terms <span>|</span>
					</div>
					<div>
						Privacy <span>|</span>
					</div>
					<div>Agent Login</div>
				</FlexCont3>
			</FootCont2>
		</>
	);
}
