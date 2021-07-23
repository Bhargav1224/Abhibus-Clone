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
  HeadingOffers,ImgBan,BannerDiv
} from "./Home.styled.js";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { OffersCarausel } from "./OffersCarausel.jsx";
import { AgencyCar } from "./AgencyCar.jsx";
import { Covid } from "./Covid.jsx";
import { AbhiData } from "./AbhiData.jsx";
import { Faq } from "./Faq.jsx";
import { AppStores } from "./AppStores.jsx";
const obj = {
  leaveFrom: "",
  arriveTo: "",
  doj: "",
  rj:""
  
}
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
  const [data, setData] = React.useState(obj)
  
  const handleChange = (e) => {
  const{name,value}=e.target
    setData({ ...data, [name]: value })
  }
  const handleClick = {
    
  }
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
        <Box width={1}>
          <TextField name="leaveFrom" className={classes.inp} required id="filled-basic" label="Leaving from" variant="filled" onChange={handleChange} />
          <ImgChange src="https://static.abhibus.com/assets/img/twoway.png" />
          <TextField name="arriveTo" className={classes.inp} required id="filled-basic" label="Going To" variant="filled" onChange={handleChange} />
          <TextField
            required
            name="doj"
            id="date"
            type="date"
            label="Date of Journey"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField name="rj" id="date" type="date" label="Return (optional)" InputLabelProps={{ shrink: true }} variant="outlined" onChange={handleChange} />
          <Button onCLicked={handleClick} className={classes.btn} variant="contained">
            Search
          </Button>
        </Box>
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
        </SumLines>
        <AgencyCar />
      </OffersDiv>
      <BannerDiv>
        <ImgBan src="/abhicust.jpg" alt="banner"/>
      </BannerDiv>
      <Covid />
      <AbhiData />
      <Faq />
      <AppStores/>
    </div>
  );
}
