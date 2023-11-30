import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="news__title">
        <h3>
          <b>Testimonial</b>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id libero
          dolor, praesentium dolorum beatae iusto dolore eligendi quis.
        </p>
      </div>{" "}
      <div className="testimonial__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={60}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1200: {
              slidesPerView: 2.5,
            },
          }}
          className="testimonial__swiper"
        >
          <SwiperSlide className="testimonial__swiper-slide">
            <div className="testimonial__swiper-slide-img">
              <div>
                <img src="/images/countries/test-1.avif" alt="" />
              </div>
              <div>
                <h5>Harrison Phillips</h5>
                <span>Student</span>
              </div>
            </div>
            <div className="testimonial__swiper-slide-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                minus laboriosam ducimus soluta rem blanditiis quaerat tenetur
                deserunt libero numquam odit iure ullam placeat perspiciatis
                iusto, provident impedit earum at!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial__swiper-slide">
            <div className="testimonial__swiper-slide-img">
              <div>
                <img src="/images/countries/test-2.webp" alt="" />
              </div>
              <div>
                <h5>Harrison Phillips</h5>
                <span>Student</span>
              </div>
            </div>
            <div className="testimonial__swiper-slide-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                minus laboriosam ducimus soluta rem blanditiis quaerat tenetur
                deserunt libero numquam odit iure ullam placeat perspiciatis
                iusto, provident impedit earum at!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial__swiper-slide">
            <div className="testimonial__swiper-slide-img">
              <div>
                <img src="/images/countries/test-3.avif" alt="" />
              </div>
              <div>
                <h5>Harrison Phillips</h5>
                <span>Student</span>
              </div>
            </div>
            <div className="testimonial__swiper-slide-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                minus laboriosam ducimus soluta rem blanditiis quaerat tenetur
                deserunt libero numquam odit iure ullam placeat perspiciatis
                iusto, provident impedit earum at!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
