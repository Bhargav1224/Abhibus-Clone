import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ImgCar} from "./Home.styled"

export function OffersCarausel() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1
        },
    
        mid: {
          breakpoint: { max: 800, min: 600 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };
    
  return (
    <Carousel arrows={false} responsive={responsive} infinite={true} swipeable={true} draggable={true} showDots={true}>
      <div>
        <ImgCar src="https://static.abhibus.com/busgallery/offerbanners/Jul2021/08/1625726641/476x220.png" />
      </div>
      <div>
        <ImgCar src="https://static.abhibus.com/busgallery/offerbanners/Dec2020/01/1606798420/Ola_476X220_Homepage.png" />
      </div>
      <div>
        <ImgCar src="https://static.abhibus.com/busgallery/offerbanners/Jul2021/01/1625085504/476X220.png" />
      </div>
      <div>
        <ImgCar src="https://static.abhibus.com/busgallery/offerbanners/Jul2021/01/1625101823/476X220.png" />
      </div>
      <div>
        <ImgCar src="https://static.abhibus.com/busgallery/offerbanners/Feb2021/15/1613384411/476X220.png" />
      </div>
      <div>
        <ImgCar src="https://static.abhibus.com/busgallery/offerbanners/Apr2021/10/1618038157/476X220.png" />
      </div>
    </Carousel>
  );
}
