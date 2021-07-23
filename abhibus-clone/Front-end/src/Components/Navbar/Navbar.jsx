import React from "react";
import { Nav, Linked, Img, NavLinks, BookDiv,FilledCircle, BookingOptions, BookingList,User,ExpandArrow } from "./Navbar.styled.js";

export function Navbar() {
  const [flag, setFlag] = React.useState(false);

  const handleBookings = () => {
    setFlag(!flag);
  };

  return (
    <Nav>
      <div>
        <Linked to="/">
          <Img src="https://static.abhibus.com/img/newlogos/logo1.png" alt="icon-web" />
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
                <FilledCircle style={{ width:"13px"}}/>
                <span>Print Booking</span>
              </BookingList>
            </Linked>
            <Linked to="/cancellation">
              <BookingList>
                <FilledCircle style={{ width:"13px"}}  />
                <span>Cancel Booking</span>
              </BookingList>
            </Linked>
          </BookingOptions>
        )}
        <BookDiv>
          <User/>{" "}
          <span>Login/Register</span> <ExpandArrow style={{ color: "red" }} />
        </BookDiv>
      </NavLinks>
    </Nav>
  );
}
