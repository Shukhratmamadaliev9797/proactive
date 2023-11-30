import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function FeaturedUniversities() {
  return (
    <div className="featuredUniversities">
      <div className="featuredUniversities__container">
        <div className="featuredUniversities__title">
          <h4>Featured Universities</h4>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1200: {
              slidesPerView: 5,
              spaceBetween: 70,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 70,
            },

            700: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 70,
            },
          }}
          loop={true}
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
            <img src="/images/universities/saint-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/universities/sydney-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/universities/east-london-university.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="featuredUniversities__swiper-slide">
            <img src="/images/universities/Queensland-university.png" alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="featuredUniversities__learnmore">
          <Link to="/universities">Learn more</Link>
        </div>
      </div>
    </div>
  );
}
