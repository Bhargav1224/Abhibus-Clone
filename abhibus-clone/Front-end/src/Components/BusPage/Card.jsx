import React, { useState } from "react";
import style from "./card.module.css";
import Button from "@material-ui/core/Button";
export const Card = () => {
  const [showCancellation, setShowCancellation] = useState(false);
  console.log(showCancellation);
  return (
    <div className={style.card}>
      <div>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-64-thumb/location-marker-1755259-1490316.png"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <ul>
          <li>12:05</li>
          <p>02:37 hours</p>
          <li>14:42</li>
        </ul>
      </div>
      <div className={style.busDetails}>
        <h2>GOGOBUS</h2>
        <p>NON-AC Seater (2 + 2)</p>
        <div>
          <a
            onMouseOver={() => setShowCancellation(!showCancellation)}
            href="#"
          >
            {" "}
            Cancellation Policy
          </a>
        </div>
      </div>
      <div className={style.availableSeats}>45 seats Available</div>
      <div className={style.fare}>₹ 329</div>
      <div className={style.ratings}>
        <div>
          <img
            src="https://static.abhibus.com/assets/img/star-orabge-16.png"
            alt=""
            srcset=""
          />
          <span> 3.3</span>
          <p>(Few Ratings)</p>
        </div>
        <div className={style.bookNowBtn}>
            <button>
            Select Seat 
            </button>
      
        </div>
      </div>
    </div>
  );
};
