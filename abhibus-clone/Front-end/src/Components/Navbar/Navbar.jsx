import React from "react";
import { Nav, Linked, Img, NavLinks, BookDiv, BookingOptions, BookingList } from "./Navbar.styled.js";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
          <span>My Bookings</span> <ArrowDropDownIcon style={{ color: "red" }} />{" "}
        </BookDiv>{" "}
        {flag && (
          <BookingOptions>
            <Linked>
              <BookingList>
                <FiberManualRecordIcon style={{ color: "red", width: "11px", paddingRight:"5px" }} />
                <span>Print Booking</span>
              </BookingList>
              <BookingList>
                <FiberManualRecordIcon style={{ color: "red", width: "11px", paddingRight:"5px" }} />
                <span>Cancel Booking</span>
              </BookingList>
            </Linked>
          </BookingOptions>
        )}
        <BookDiv>
          <span>Login/Register</span> <ArrowDropDownIcon style={{ color: "red" }} />
        </BookDiv>
      </NavLinks>
    </Nav>
  );
}
