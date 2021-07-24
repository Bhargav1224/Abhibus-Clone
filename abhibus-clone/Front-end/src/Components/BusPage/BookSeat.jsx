import React from "react";
import { SeatBook, SeatDetails, Container, SeatSelect, LadiesSeat, Upper, Lower } from "./BookSeat.styled";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import AirlineSeatFlatOutlinedIcon from "@material-ui/icons/AirlineSeatFlatOutlined";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  booked: {
    color: "grey"
  },
  notBooked: {
    color: "white"
  },
  selec: {
    color: "green"
  }
});
export function BookSeat() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  const [seats, setSeats] = React.useState([
    { seatNo: 1, available: true, sel: false },
    { seatNo: 2, available: true, sel: false },
    { seatNo: 3, available: false, sel: false },
    { seatNo: 4, available: true, sel: false },
    { seatNo: 5, available: true, sel: false },
    { seatNo: 6, available: true, sel: false },
    { seatNo: 7, available: true, sel: false },
    { seatNo: 8, available: true, sel: false },
    { seatNo: 9, available: false, sel: false },
    { seatNo: 10, available: true, sel: false },
    { seatNo: 11, available: true, sel: false },
    { seatNo: 12, available: true, sel: false },
    { seatNo: 13, available: true, sel: false },
    { seatNo: 14, available: true, sel: false },
    { seatNo: 15, available: true, sel: false }
  ]);
  const handleClick = () => {
    // setSelected(!selected)
    seats.filter(el => {
      console.log(el.seatNo);
      // return el.seatNo === index + 1 ? { ...el, sel: !el.sel } : el
    });
    // setSeats(temp)
  };
  return (
    <Container>
      <SeatBook>
        <div>10 Seats Available</div>
        <div>Click on seat to select/deselect seat</div>
        <SeatSelect>
          <LadiesSeat>
            <div>
              <SpeakerNotesIcon />
            </div>
            <ul>
              <li> If Ladies seat is available, Single Lady traveller must choose the same</li>
              <li> Last row seats are reserved only for Male</li>
            </ul>
          </LadiesSeat>
          <Upper>
            {seats.map((el) => {
              return (
                <div key={el.seatNo}>
                  {el.available ? (
                    <AirlineSeatFlatOutlinedIcon
                      onClick={handleClick}
                      className={el.sel === true ? classes.selec : classes.notBooked}
                    />
                  ) : (
                    <AirlineSeatFlatOutlinedIcon className={classes.booked} />
                  )}
                </div>
              );
            })}
          </Upper>
          <Lower>
            {seats.map(el => {
              return (
                <>
                  {" "}
                  {el.available ? (
                    <AirlineSeatFlatOutlinedIcon onClick={handleClick} className={classes.notBooked} />
                  ) : (
                    <AirlineSeatFlatOutlinedIcon className={classes.booked} />
                  )}{" "}
                </>
              );
            })}
          </Lower>
        </SeatSelect>
      </SeatBook>
      <SeatDetails />
    </Container>
  );
}
