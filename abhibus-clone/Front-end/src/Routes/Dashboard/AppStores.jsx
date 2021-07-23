import React from "react";
import { StoreCont, GridApp, MainHead, RedLine, FlexData, HeadDt, Ans } from "./Home.styled.js";

export function AppStores() {
  return (
    <StoreCont>
      <div>
        <img src="https://static.abhibus.com/img/homepage/home-3.png" alt="icon" />
      </div>
      <div>
        <MainHead>Install AbhiBus App & Make Travel a Lot of Fun</MainHead>
        <GridApp>
          <FlexData>
            <RedLine />
            <div>
              <HeadDt>Get Notified</HeadDt>
              <Ans>When the bus starts and is about to reach you.</Ans>
            </div>
          </FlexData>
          <FlexData>
            <RedLine />
            <div>
              <HeadDt>Lightning Fast</HeadDt>
              <Ans>Book in 30 seconds even on Low Network.</Ans>
            </div>
          </FlexData>
          <FlexData>
            <RedLine />
            <div>
              <HeadDt>Trusted by Millions</HeadDt>
              <Ans>Over 100,000 reviews from our customers.</Ans>
            </div>
          </FlexData>
          <FlexData>
            <RedLine />
            <div>
              <HeadDt>Enjoy Other Stuffs</HeadDt>
              <Ans>Games, offers, Free Rides and a lot more.</Ans>
            </div>
          </FlexData>
          <FlexData>
            <div>
              <img src="https://static.abhibus.com/img/homepage/android.png" alt="android" />
            </div>
            <div>
              <img src="https://static.abhibus.com/img/homepage/ios-1.png" alt="apple" />
            </div>
          </FlexData>
          <div>
            <img src="https://static.abhibus.com/img/homepage/star.png" alt="ratings" />
            <div><strong>4.5/5</strong> based on 1,02,251 reviews</div>
          </div>
        </GridApp>
      </div>
    </StoreCont>
  );
}
