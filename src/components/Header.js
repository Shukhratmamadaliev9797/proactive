import React from "react";
import NavigationBar from "./NavigationBar";
import Button from "react-bootstrap/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

export default function Header() {
  return (
    <div className="header">
      <div>
        <NavigationBar />
      </div>

      <div className="header__container">
        <div className="header__textBox">
          <h1>
            We Help to <span>Build</span> Your <span>Dream</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, animi libero repellendus tenetur veniam eos qui velit
            quibusdam possimus corrupti rem .
          </p>
          <button>Contact Us</button>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={7}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[]}
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
        </Swiper>
      </div>
    </div>
  );
}
