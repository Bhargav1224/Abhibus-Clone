import React, { useState } from "react";
import style from "./index.module.css";

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
  const [checked,setChecked]= useState(false)
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
  const [checkedCount,setCheckedCount] = useState(0)
const handleCheck = (status)=>{
    status?setCheckedCount(checkedCount+1):setCheckedCount(checkedCount-1)
    console.log(checkedCount)
  
}

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
          <div>Clear(0)</div>
        </div>
        <div
          style={dropDown1 ? { display: "block" } : { display: "none" }}
          className={style.BusPartnerMenu}
        >
          {buspartners.map((item) => {
            return (
              <div>
                <div>
                  <input type="checkbox" name="" id="" />
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
          <div>Clear(0)</div>
        </div>
        <div
          style={dropDown2 ? { display: "block" } : { display: "none" }}
          className={style.BusPartnerMenu}
        >
          {BordingPoints.map((item) => {
            return (
              <div>
                <div>
                  <input type="checkbox" name="" id="" />
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
          <div onClick={()=>setCheckedCount(0)}>Clear({checkedCount})</div>
        </div>
        <div
          style={dropDown3 ? { display: "block" } : { display: "none" }}
          className={style.BusPartnerMenu}
        >
          {BordingPoints.map((item,i) => {
            return (
              <div>
                <div>
                  <input onChange={(e)=>{handleCheck(e.target.checked)}}   type="checkbox" name=""  />
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
          <div style={{display:"grid",gridTemplate:"60px / 107px auto"}} className={style.DepartureTypeImage}>
            <div
              onClick={() => {
                setTypeMorning(!typeMorning);
                typeMorning
                  ? setdepartureTypeCount(departureTypeCount - 1)
                  : setdepartureTypeCount(departureTypeCount + 1);
              }}
              className={
                typeMorning ? style.BusTypeImageClick : style.BusTypeImageNotClick
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
                typeAfternoon ? style.BusTypeImageClick : style.BusTypeImageNotClick
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
                typeNight
                  ? style.BusTypeImageClick
                  : style.BusTypeImageNotClick
              }
            >
              <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/half-moon-2893731-2400600.png" />
              <div>AFTER 11PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
