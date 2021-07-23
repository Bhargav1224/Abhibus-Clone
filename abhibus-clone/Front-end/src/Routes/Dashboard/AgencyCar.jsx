import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImgAg } from "./Home.styled";

export function AgencyCar() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			slidesToSlide: 1,
		},

		mid: {
			breakpoint: { max: 800, min: 600 },
			items: 3,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 2,
		},
	};

	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			swipeable={true}
			draggable={true}
			showDots={true}
		>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/apsrtc.png" />
				<div>APSRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/tsrtc.png" />
				<div>TSRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/Kerala-RTC.png" />
				<div>Kerala RTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/msrtc.png" />
				<div>MSRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/gsrtc.png" />
				<div>GSRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/operators/HRTC/hrtc-logo.png" />
				<div>HRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/RSRTC.png" />
				<div>RSRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/Pepsu-prtc.png" />
				<div>PRTC</div>
			</div>
			<div>
				<ImgAg src="https://static.abhibus.com//content-pages/op-logos/BSRTC.png" />
				<div>BSRTC</div>
			</div>
		</Carousel>
	);
}
