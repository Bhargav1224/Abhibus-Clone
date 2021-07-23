import React, { useState } from "react";
import style from "./index.module.css";
export const Index = () => {
  const [PriceFilter, setPriceFilter] = useState(true);
  const [seatFilter, setseatFilter] = useState(true);
  const [DTimeFilter, setDTimeFilter] = useState(true);
  const [ATimeFilter, setATimeFilter] = useState(true);
  const [RatingeFilter, setRatingeFilter] = useState(true);
  const [typeAc, setTypeAc] = useState(false);
  const [typeNonAc, setTypeNonAc] = useState(false);
  const [typeSeater, setTypeSeater] = useState(false);
  const [typeSleeper, setTypeSleeper] = useState(false);
  const[busTypeCount,setbusTypeCount] = useState(0)
  // const [priceDrop,SetPriceDrop] = useState()
const clearBusTypeFilter=()=>{
  setTypeAc(false)
  setTypeNonAc(false)
  setTypeSeater(false)
  setTypeSleeper(false)
  setbusTypeCount(0)
}


  return (
    <div>
      <div style={{ height: "180px" }}></div>
      <div className={style.sortBar}>
        <div>Sort By </div>
        <div
          onClick={() => setPriceFilter(!PriceFilter)}
          style={{ display: "flex" }}
        >
          <div>Price </div>

          <div style={{ margin: "-5px 0 0 5px" }}>
            {PriceFilter ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            )}
          </div>
        </div>
        <div
          onClick={() => setseatFilter(!seatFilter)}
          style={{ display: "flex" }}
        >
          <div>Seats </div>

          <div style={{ margin: "-5px 0 0 5px" }}>
            {seatFilter ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            )}
          </div>
        </div>
        <div
          onClick={() => setDTimeFilter(!DTimeFilter)}
          style={{ display: "flex" }}
        >
          <div>Departure Time </div>

          <div style={{ margin: "-5px 0 0 5px" }}>
            {DTimeFilter ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            )}
          </div>
        </div>
        <div
          onClick={() => setATimeFilter(!ATimeFilter)}
          style={{ display: "flex" }}
        >
          <div>Arrival Time </div>

          <div style={{ margin: "-5px 0 0 5px" }}>
            {ATimeFilter ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            )}
          </div>
        </div>
        <div
          onClick={() => setRatingeFilter(!RatingeFilter)}
          style={{ display: "flex" }}
        >
          <div>Ratings </div>

          <div style={{ margin: "-5px 0 0 5px" }}>
            {RatingeFilter ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className={style.mainBody}>
        <div style={{ marginLeft: "10%" }}>
          <div className={style.filtersBody}>
            <div>
              <div> Filters</div>
              <div >Clear ALL</div>
            </div>
            <div className={style.PriceDrop}>
              <div>Price Drop</div>
              <div>
                <input  type="checkbox" name="" id="" />
              </div>
            </div>
            <div className={style.BusType}>
              <div>
                <div>Bus Type</div>
                <div onClick={()=>clearBusTypeFilter()}>Clear({busTypeCount})</div>
              </div>
              <div className={style.BusTypeImage}>
                <div onClick={()=>{setTypeAc(!typeAc); typeAc? setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeAc?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-64/ac-1751742-1489628.png"
                   
                  />
                  <div>AC</div>
                </div>
                <div onClick={()=>{setTypeNonAc(!typeNonAc);typeNonAc?setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeNonAc?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sun-2086492-1767677.png"
                    
                  />
                  <div>NON-AC</div>
                </div>
                <div onClick={()=>{setTypeSeater(!typeSeater);typeSeater?setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeSeater?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sofa-2141960-1801961.png"
                    
                  />
                  <div>SEATER</div>
                </div>
                <div onClick={()=>{setTypeSleeper(!typeSleeper);typeSleeper?setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeSleeper?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sleeping-position-1490581-1262070.png"
                    
                  />
                  <div>SLEEPER</div>
                </div>
              </div>
            </div>
            <div className={style.BusPartner}>
                <div>
                  <div>Bus Partner</div>
                  <div>clear(0)</div>
                </div>
                <div>

                </div>
            </div>
          </div>
        </div>
        <div>card</div>
      </div>
    </div>
  );
};
