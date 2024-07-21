import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import "./banner.css"


const Banner = () =>{
  return (
    <Carousel indicators={false}>
     
      <Carousel.Item interval={3000}>
        <img src='assets/images/banner (2).jpg' alt='banner-imgs'  />
        <Carousel.Caption>
          <h3 className="caption_heading">Shop Now!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src='assets/images/banner (3).jpg' alt='banner-imgs'  />
      <Carousel.Caption>
        <h3 className="caption_heading">Discounts & Savings</h3>
      </Carousel.Caption>
    </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src='assets/images/banner (5).jpg' alt='banner-imgs' />
        <Carousel.Caption >
          <h3 className="caption_heading">Win Exciting Rewards!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;