import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FeaturedUniversities() {
  return (
    <div className="featuredUniversities">
      <div className="featuredUniversities__container">
        <div className="featuredUniversities__title">
          <h4>Featured Universities</h4>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="featuredUniversities__swiper
          "
        >
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/ulster-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/sheffield-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/greenwich-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/harvard-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/cambridge-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            Slide 7
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            Slide 8
          </SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
