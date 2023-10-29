import React from "react";

export default function News() {
  return (
    <div className="news">
      <div className="news__container">
        <div className="news__title">
          <h3>
            <b>News</b>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id libero
            dolor, praesentium dolorum beatae iusto dolore eligendi quis.
          </p>
        </div>
        <div className="news__newsList">
          <div className="news__newsList-news">
            <div className="news__newsList-news-image">
              <img src="/images/cambridge-news.jpeg" alt="" />
            </div>
            <div className="news__newsList-news-content">
              <div>
                <i class="fas fa-calendar"></i>
                <span>17 Apr 2023</span>
              </div>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                illum
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                iusto. Expedita ex ipsa laboriosam delectus doloremque quae
                eveniet.
              </p>
            </div>
          </div>
          <div className="news__newsList-news">
            <div className="news__newsList-news-image">
              <img src="/images/harvard-news.jpeg" alt="" />
            </div>
            <div className="news__newsList-news-content">
              <div>
                <i class="fas fa-calendar"></i>
                <span>17 Apr 2023</span>
              </div>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                illum
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                iusto. Expedita ex ipsa laboriosam delectus doloremque quae
                eveniet.
              </p>
            </div>
          </div>
          <div className="news__newsList-news">
            <div className="news__newsList-news-image">
              <img src="/images/ulster-news.jpeg" alt="" />
            </div>
            <div className="news__newsList-news-content">
              <div>
                <i class="fas fa-calendar"></i>
                <span>17 Apr 2023</span>
              </div>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                illum
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                iusto. Expedita ex ipsa laboriosam delectus doloremque quae
                eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
