import React, { useState } from "react";
import style from "./index.module.css";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 180,
  },
});

const AirbnbSlider = withStyles({
  root: {
    color: "rgb(220,53,69)",
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid rgb(220,53,69)",
    marginTop: -6,
    marginLeft: -2,
    boxShadow: "white 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "white 0 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "white",
      marginLeft: 1,
      marginRight: 1
    }
  },

  track: {
    height: 5
  },
  rail: {
    color: "black",
    opacity: 1,
    height: 5
  }
})(Slider);
function AirbnbThumbComponent(props) {
  return <span {...props}></span>;
}

function valuetext(value) {
  return `${value}`;
}
function callback(key) {
  console.log(key);
}

let buspartners = [
  { title: "Kaimur King" },
  { title: "gogo Bus" },
  { title: "Shatabdi Travels" },
  { title: " Arzoo Travels" },
];
let BordingPoints = [
  { title: "BIT Mesra" },
  { title: "Booty More" },
  { title: "Booty More circle" },
  { title: "Dhurwa Bus Stand" },
  { title: "Gumla Petrol Pump" },
  { title: "Harmu" },
  { title: "HAWAI NAGAR" },
  { title: "Khadgarha Bus Stand" },
  { title: "Patel Chowk" },
  { title: "Ratu Road" },
  { title: "Shahid Maidan" },
  { title: "Tatisilwe" },
];

export const FilterLeft = () => {
  const [typeAc, setTypeAc] = useState(false);
  const [typeNonAc, setTypeNonAc] = useState(false);
  const [typeSeater, setTypeSeater] = useState(false);
  const [typeSleeper, setTypeSleeper] = useState(false);
  const [busTypeCount, setbusTypeCount] = useState(0);
  const [dropDown1, setdropDown1] = useState(true);
  const [dropDown2, setdropDown2] = useState(true);
  const [dropDown3, setdropDown3] = useState(true);
  // const [checked,setChecked]= useState(false)
  const clearBusTypeFilter = () => {
    setTypeAc(false);
    setTypeNonAc(false);
    setTypeSeater(false);
    setTypeSleeper(false);
    setbusTypeCount(0);
  };

  const [typeMorning, setTypeMorning] = useState(false);
  const [typeAfternoon, setTypeAfternoon] = useState(false);
  const [typeevening, setTypeevening] = useState(false);
  const [typeNight, setTypeNight] = useState(false);
  const [departureTypeCount, setdepartureTypeCount] = useState(0);
  const clearDepartureTypeFilter = () => {
    setTypeMorning(false);
    setTypeAfternoon(false);
    setTypeevening(false);
    setTypeNight(false);
    setdepartureTypeCount(0);
  };
  const [boardingPointCount, setboardingPointCount] = useState(0);
  const handleboardingPointCount = (status) => {
    status
      ? setboardingPointCount(boardingPointCount + 1)
      : setboardingPointCount(boardingPointCount - 1);
  };
  const [BusPartnerCount, setBusPartnerCount] = useState(0);
  const handleBusPartnerCount = (status) => {
    status
      ? setBusPartnerCount(BusPartnerCount + 1)
      : setBusPartnerCount(BusPartnerCount - 1);
  };
  const [DroppingPointCount, setDroppingPointCount] = useState(0);
  const handleDroppingPointCount = (status) => {
    status
      ? setDroppingPointCount(DroppingPointCount + 1)
      : setDroppingPointCount(DroppingPointCount - 1);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.filtersBody}>
      <div>
        <div> Filters</div>
        <div>Clear ALL</div>
      </div>
      <div className={style.PriceDrop}>
        <div>Price Drop</div>
        <div>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className={style.BusType}>
        <div>
          <div>Bus Type</div>
          <div onClick={() => clearBusTypeFilter()}>Clear({busTypeCount})</div>
        </div>
        <div className={style.BusTypeImage}>
          <div
            onClick={() => {
              setTypeAc(!typeAc);
              typeAc
                ? setbusTypeCount(busTypeCount - 1)
                : setbusTypeCount(busTypeCount + 1);
            }}
            className={
              typeAc ? style.BusTypeImageClick : style.BusTypeImageNotClick
            }
          >
            <img src="https://cdn.iconscout.com/icon/free/png-64/ac-1751742-1489628.png" />
            <div>AC</div>
          </div>
          <div
            onClick={() => {
              setTypeNonAc(!typeNonAc);
              typeNonAc
                ? setbusTypeCount(busTypeCount - 1)
                : setbusTypeCount(busTypeCount + 1);
            }}
            className={
              typeNonAc ? style.BusTypeImageClick : style.BusTypeImageNotClick
            }
          >
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sun-2086492-1767677.png" />
            <div>NON-AC</div>
          </div>
          <div
            onClick={() => {
              setTypeSeater(!typeSeater);
              typeSeater
                ? setbusTypeCount(busTypeCount - 1)
                : setbusTypeCount(busTypeCount + 1);
            }}
            className={
              typeSeater ? style.BusTypeImageClick : style.BusTypeImageNotClick
            }
          >
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sofa-2141960-1801961.png" />
            <div>SEATER</div>
          </div>
          <div
            onClick={() => {
              setTypeSleeper(!typeSleeper);
              typeSleeper
                ? setbusTypeCount(busTypeCount - 1)
                : setbusTypeCount(busTypeCount + 1);
            }}
            className={
              typeSleeper ? style.BusTypeImageClick : style.BusTypeImageNotClick
            }
          >
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sleeping-position-1490581-1262070.png" />
            <div>SLEEPER</div>
          </div>
        </div>
      </div>
      <div className={style.BusPartner}>
        <div>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => setdropDown1(!dropDown1)}
          >
            <div> Bus Partner </div>
            <div>
              <img
                style={{ width: "20px" }}
                src={
                  dropDown1
                    ? "https://cdn.iconscout.com/icon/premium/png-64-thumb/up-arrow-486356-2365018.png"
                    : "https://cdn.iconscout.com/icon/premium/png-64-thumb/down-arrow-486336-2364998.png"
                }
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div onClick={() => setBusPartnerCount(0)}>
            Clear({BusPartnerCount})
          </div>
        </div>
        <div
          style={dropDown1 ? { display: "block" } : { display: "none" }}
          className={style.BusPartnerMenu}
        >
          {buspartners.map((item) => {
            return (
              <div>
                <div>
                  <input
                    onChange={(e) => {
                      handleBusPartnerCount(e.target.checked);
                    }}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.BusPartner}>
        <div style={{ gap: "30px" }}>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => setdropDown2(!dropDown2)}
          >
            <div> Boarding Point </div>
            <div>
              <img
                style={{ width: "20px" }}
                src={
                  dropDown2
                    ? "https://cdn.iconscout.com/icon/premium/png-64-thumb/up-arrow-486356-2365018.png"
                    : "https://cdn.iconscout.com/icon/premium/png-64-thumb/down-arrow-486336-2364998.png"
                }
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div onClick={() => setboardingPointCount(0)}>
            Clear({boardingPointCount})
          </div>
        </div>
        <div
          style={dropDown2 ? { display: "block" } : { display: "none" }}
          className={style.BusPartnerMenu}
        >
          {BordingPoints.map((item) => {
            return (
              <div>
                <div>
                  <input
                    onChange={(e) => {
                      handleboardingPointCount(e.target.checked);
                    }}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.BusPartner}>
        <div style={{ gap: "30px" }}>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => setdropDown3(!dropDown3)}
          >
            <div> Dropping Point </div>
            <div>
              <img
                style={{ width: "20px" }}
                src={
                  dropDown3
                    ? "https://cdn.iconscout.com/icon/premium/png-64-thumb/up-arrow-486356-2365018.png"
                    : "https://cdn.iconscout.com/icon/premium/png-64-thumb/down-arrow-486336-2364998.png"
                }
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div onClick={() => setDroppingPointCount(0)}>
            Clear({DroppingPointCount})
          </div>
        </div>
        <div
          style={dropDown3 ? { display: "block" } : { display: "none" }}
          className={style.BusPartnerMenu}
        >
          {BordingPoints.map((item, i) => {
            return (
              <div>
                <div>
                  <input
                    onChange={(e) => {
                      handleDroppingPointCount(e.target.checked);
                    }}
                    type="checkbox"
                    name=""
                  />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className={style.DepartureType}>
          <div>
            <div>Departure Time</div>
            <div onClick={() => clearDepartureTypeFilter()}>
              Clear({departureTypeCount})
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplate: "60px / 107px auto" }}
            className={style.DepartureTypeImage}
          >
            <div
              onClick={() => {
                setTypeMorning(!typeMorning);
                typeMorning
                  ? setdepartureTypeCount(departureTypeCount - 1)
                  : setdepartureTypeCount(departureTypeCount + 1);
              }}
              className={
                typeMorning
                  ? style.BusTypeImageClick
                  : style.BusTypeImageNotClick
              }
            >
              <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sunrise-101-584112.png" />
              <div>BEFORE 10AM</div>
            </div>
            <div
              onClick={() => {
                setTypeAfternoon(!typeAfternoon);
                typeAfternoon
                  ? setdepartureTypeCount(departureTypeCount - 1)
                  : setdepartureTypeCount(departureTypeCount + 1);
              }}
              className={
                typeAfternoon
                  ? style.BusTypeImageClick
                  : style.BusTypeImageNotClick
              }
            >
              <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sun-2086492-1767677.png" />
              <div>10AM - 5PM</div>
            </div>
            <div
              onClick={() => {
                setTypeevening(!typeevening);
                typeevening
                  ? setdepartureTypeCount(departureTypeCount - 1)
                  : setdepartureTypeCount(departureTypeCount + 1);
              }}
              className={
                typeevening
                  ? style.BusTypeImageClick
                  : style.BusTypeImageNotClick
              }
            >
              <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sunset-3918664-3245988.png" />
              <div>5PM - 11PM</div>
            </div>
            <div
              onClick={() => {
                setTypeNight(!typeNight);
                typeNight
                  ? setdepartureTypeCount(departureTypeCount - 1)
                  : setdepartureTypeCount(departureTypeCount + 1);
              }}
              className={
                typeNight ? style.BusTypeImageClick : style.BusTypeImageNotClick
              }
            >
              <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/half-moon-2893731-2400600.png" />
              <div>AFTER 11PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.PriceRange}>
        <div>Price Range</div>
        <div>₹ {value.toString().split(",")[0]} - ₹ {value.toString().split(",")[1]}</div>
        <div className={classes.root}>
         
          <div className={classes.root}>
            <AirbnbSlider
            min={713}
            onChange={handleChange}
            max={3000}
            value={value}
            getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              ThumbComponent={AirbnbThumbComponent}
              getAriaLabel={(index) =>
                index === 0 ? "Minimum price" : "Maximum price"
              }
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
