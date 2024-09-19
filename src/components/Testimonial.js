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
          Feedback from our Customers,They have started to change their life it
          is your time
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
                <img src="https://instagram.flhr9-1.fna.fbcdn.net/v/t39.30808-6/458366209_17873437482156820_6132144780483386041_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flhr9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rnsN2RGmg7QQ7kNvgGHZYqA&_nc_gid=611582baca6d4e30bf3a648423205b28&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQ0OTYxMTEwMzkxNzE2NzQ2NQ%3D%3D.3-ccb7-5&oh=00_AYAwmwTkMXqUQ7QxaWbWQ89GbYiIY43j5MlYxqXWtmh3CA&oe=66F231C3&_nc_sid=7a9f4b" alt="" />
              </div>
              <div>
                <h5>Doniyor Mekhmonov</h5>
                <span>Student</span>
              </div>
            </div>
            <div className="testimonial__swiper-slide-content">
              <p>
                "Proactive Agency made my educational visa process smooth and stress-free. Their knowledgeable team not only guided me through the visa requirements but also helped me choose the right university that matched my academic goals. They provided personalized advice, ensuring all documents were in order, and I secured my visa without delays. I highly recommend Proactive Agency to any student looking for reliable and professional visa and university consulting services!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial__swiper-slide">
            <div className="testimonial__swiper-slide-img">
              <div>
                <img src="/images/countries/test-2.webp" alt="" />
              </div>
              <div>
                <h5>Javlonbek Jalolov</h5>
                <span>Student</span>
              </div>
            </div>
            <div className="testimonial__swiper-slide-content">
              <p>
               "Proactive Agency was a lifesaver during my university application and visa process. They helped me select the perfect university for my career goals and made sure I had all the right documents for my visa. Their expert guidance made everything easy and stress-free, and I got my visa quickly without any issues. I highly recommend them to any student looking to study abroad!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial__swiper-slide">
            <div className="testimonial__swiper-slide-img">
              <div>
                <img src="/images/countries/test-3.avif" alt="" />
              </div>
              <div>
                <h5>Asadbek Jurakulov</h5>
                <span>Student</span>
              </div>
            </div>
            <div className="testimonial__swiper-slide-content">
              <p>
                "I’m so grateful for Proactive Agency! They helped me find the best university program and walked me through the entire visa application. Their team made sure everything was done correctly, and I felt supported throughout the process. Thanks to them, I got my visa on time and am now studying at my dream university. Highly recommended for any student!"
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
