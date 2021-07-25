import { Card } from "./Card";
import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { FilterLeft } from "./FilterLeft";
import { Footer } from "../Footer/Footer";
import { TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getBusDetails } from "./../../Redux/BookBus/action.js";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
const ImgChange = styled.img`
  left: 26%;
  top: 70.5%;
  position: absolute;
  width: 30px;
`;


// import {data} from "./data.json"
const useStyles = makeStyles({
  inp: { border: "0.5px solid grey" },
  btn: {
    backgroundColor: "#c60001",
    border: "1px solid #c60001",
    color: "white",
    height: "54px",
    fontSize: "20px",
    width: "16%"
	},
	cont: {
		margin: "20px auto",
		display: "flex",
		justifyContent: "space-between",
		width: "70%"
  }
});
const init = {
  leaving: "",
  going: "",
  date: ""
};

export const Index = () => {
  const [PriceFilter, setPriceFilter] = useState(true);
  const [seatFilter, setseatFilter] = useState(true);
  const [DTimeFilter, setDTimeFilter] = useState(true);
  const [ATimeFilter, setATimeFilter] = useState(true);
  const [RatingeFilter, setRatingeFilter] = useState(true);

  let { matchedBuses } = useSelector(state => state.bus);

  const [value, setValue] = useState(matchedBuses.buses || []);
  const classes = useStyles();
  const [quires, setQuires] = useState(init);
  let history = useHistory();
  const { leaving, going, date } = quires;
  const dispatch = useDispatch();
  const handleChange = e => {
    let { name, value } = e.target;

    setQuires({ ...quires, [name]: value });
  };

  const handleSearch = e => {
    e.preventDefault();

    const payload = {
      leaving,
      going,
      date
    };

    dispatch(getBusDetails(payload));

    console.log(quires);

    history.push("/bus");
  };

  // console.log(value);

  const filter = typeAc => {
    console.log(typeAc);
    if (!typeAc) {
      const filter = value
        .filter(item => item.AC)
        .map(item => {
          return item;
        });

      setValue(filter);
    } else {
      setValue(matchedBuses.buses);
    }
  };

  const seater = typeSeater => {
    console.log(typeSeater);
    if (!typeSeater) {
      const filter = value
        .filter(item => item.Seater)
        .map(item => {
          return item;
        });

      setValue(filter);
    } else {
      setValue(matchedBuses.buses);
    }
  };

  const buspartnersfn = (checked, status) => {
    if (status) {
      const filter = value
        .filter(item => item.busTypeName === checked)
        .map(item => {
          return item;
        });
      setValue(filter);
    } else {
      setValue(matchedBuses.buses);
    }
  };

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

  useEffect(
    () => {
      setValue(matchedBuses.buses);
    },
    [matchedBuses]
  );

  let details = {
    arrivallocation: matchedBuses?.arrivalLocation,
    departurelocation: matchedBuses?.departureLocation,
    date: matchedBuses?.journeyDate
  };

  // let values = JSON.stringify(value);

  // localStorage.setItem("buses", values);

  // // let buses = localStorage.getItem("buses");

  // // let busdata = JSON.parse(buses);
  // // console.log(busdata);

  // const detail = localStorage.getItem("buses");
  // let valuedata = JSON.parse(detail);
  // console.log(valuedata);

  return (
    <>
		  <div>
        <Container className={classes.cont}>
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
          <TextField id="date" type="date" label="Return (optional)" InputLabelProps={{ shrink: true }} variant="outlined" />

          <Button onClick={handleSearch} className={classes.btn} variant="contained">
            Search
          </Button>
        </Container>
        <div />
        <div className={style.sortBar}>
          <div>Sort By </div>
          <div onClick={() => setPriceFilter(!PriceFilter)} style={{ display: "flex" }}>
            <div onClick={handlePrice} style={{ cursor: "pointer" }}>
              Price
            </div>

            <div style={{ margin: "-5px 0 0 5px" }}>
              {PriceFilter ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              )}
            </div>
          </div>
          <div onClick={() => setseatFilter(!seatFilter)} style={{ display: "flex" }}>
            <div onClick={handleSeats} style={{ cursor: "pointer" }}>
              Seats{" "}
            </div>

            <div style={{ margin: "-5px 0 0 5px" }}>
              {seatFilter ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              )}
            </div>
          </div>
          <div onClick={() => setDTimeFilter(!DTimeFilter)} style={{ display: "flex" }}>
            <div onClick={handleDeparture} style={{ cursor: "pointer" }}>
              Departure Time{" "}
            </div>

            <div style={{ margin: "-5px 0 0 5px" }}>
              {DTimeFilter ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              )}
            </div>
          </div>
          <div onClick={() => setATimeFilter(!ATimeFilter)} style={{ display: "flex" }}>
            <div onClick={handleArrival} style={{ cursor: "pointer" }}>
              Arrival Time{" "}
            </div>

            <div style={{ margin: "-5px 0 0 5px" }}>
              {ATimeFilter ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              )}
            </div>
          </div>
          <div onClick={() => setRatingeFilter(!RatingeFilter)} style={{ display: "flex" }}>
            <div onClick={handleRating} style={{ cursor: "pointer" }}>
              Ratings{" "}
            </div>

            <div style={{ margin: "-5px 0 0 5px" }}>
              {RatingeFilter ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className={style.mainBody}>
          <div style={{ marginLeft: "10%" }}>
            <FilterLeft filter={filter} seater={seater} buspartnersfn={buspartnersfn} />
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
                value?.map(item => {
                  return <Card busData={item} details={details} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
