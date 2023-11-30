import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__textBox">
          <h1>
            We Help to <span>Build</span> Your <span>Dream</span>
          </h1>
          <p>Change The World With Us We are Here to Assist</p>
          <button>Contact Us</button>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={7}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            1200: {
              slidesPerView: 5,
              spaceBetween: 7,
            },
            1000: {
              slidesPerView: 4,
            },

            700: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
          }}
          className="header__swiper"
        >
          <SwiperSlide className="header__swiper-slide">
            <img src="/images/london.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="header__swiper-slide">
            {" "}
            <img src="/images/newyork.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="header__swiper-slide">
            {" "}
            <img src="/images/canada.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="header__swiper-slide">
            <img src="/images/australia.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="header__swiper-slide">
            <img src="/images/france.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="header__swiper-slide">
            {" "}
            <img src="/images/newyork.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="header__swiper-slide">
            <img src="/images/australia.jpeg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
