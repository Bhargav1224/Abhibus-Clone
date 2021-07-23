import {Card} from "./Card"
import React, { useState } from "react";
import {useSelector} from "react-redux"
import style from "./index.module.css";
import { FilterLeft } from "./FilterLeft";
import {data} from "./data.json"

export const Index = () => {
  const [PriceFilter, setPriceFilter] = useState(true);
  const [seatFilter, setseatFilter] = useState(true);
  const [DTimeFilter, setDTimeFilter] = useState(true);
  const [ATimeFilter, setATimeFilter] = useState(true);
  const [RatingeFilter, setRatingeFilter] = useState(true);
  let [Busdata ,setBusData] = useState(data)
 
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
          <FilterLeft/>
        </div>
        <div>
          <div className={style.topImg}>
            <img style={{width:"200px"}} src="https://static.abhibus.com/img/diwali/banners/top-banners-rating.png" alt="" srcset="" />
            <img style={{width:"200px",marginLeft:"5px"}} src="https://static.abhibus.com/busgallery/offerbanners/Sep2020/10/top-banners-small-3.png" alt="" srcset="" />
          </div>
          <div className={style.cardBody}>
            {Busdata[0].buses.map((item)=>{
              return  <Card busData={item}/>
            })}
              
          </div>
        </div>
      </div>
    </div>
  );
};
