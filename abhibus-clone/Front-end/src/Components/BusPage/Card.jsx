import React,{useState} from 'react'
import style from "./card.module.css";
export const Card = () => {
    const [showCancellation,setShowCancellation] = useState(false)
    console.log(showCancellation)
    return (
        <div className={style.card}>
        <div>
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/location-marker-1755259-1490316.png" alt="" srcset="" />
        </div>
        <div>
          <ul>
            <li>12:05</li>
            <p>02:37 hours</p>
            <li>14:42</li>
          </ul>
        </div>
        <div>
          <h2>GOGOBUS</h2>
          <p>NON-AC Seater (2 + 2)</p>
         
          <a onMouseOver={()=>setShowCancellation(!showCancellation)} href="#"> Cancellation Policy</a>

       

        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
}
