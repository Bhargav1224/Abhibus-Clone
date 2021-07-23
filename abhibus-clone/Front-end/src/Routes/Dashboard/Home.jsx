import React from "react";
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
  HeadingOffers
} from "./Home.styled.js";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { OffersCarausel } from "./OffersCarausel.jsx";
import { AgencyCar } from "./AgencyCar.jsx";

const useStyles = makeStyles({
  inp: { border: "0.5px solid grey" },
  btn: {
    backgroundColor: "#c60001",
    border: "1px solid #c60001",
    color: "white",
    height: "54px",
    fontSize: "20px",
    width: "12%"
  }
});
export function Home() {
  const classes = useStyles();
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
          <TextField className={classes.inp} required id="filled-basic" label="Leaving from" variant="filled" />
          <ImgChange src="https://static.abhibus.com/assets/img/twoway.png" />
          <TextField className={classes.inp} required id="filled-basic" label="Going To" variant="filled" />
          <TextField
            required
            id="date"
            type="date"
            label="Date of Journey"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
          <TextField id="date" type="date" label="Return (optional)" InputLabelProps={{ shrink: true }} variant="outlined" />
          <Button className={classes.btn} variant="contained">
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
          <HeadingOffers>Book SRTC (State Road Transport Corporation) bus tickets at AbhiBus</HeadingOffers>
          <br />
          <br />
        </SumLines>
        <AgencyCar />
      </OffersDiv>
    </div>
  );
}