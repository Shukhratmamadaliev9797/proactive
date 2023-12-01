import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div className="news">
      <div className="news__container">
        <div className="news__title">
          <h3>
            <b>News</b>
          </h3>
          <p>It is easy to join us and Don’t miss opportunities</p>
        </div>
        <div className="news__newsList">
          <div className="news__newsList-news">
            <div className="news__newsList-news-image">
              <img src="/images/cambridge-news.jpeg" alt="" />
            </div>
            <div className="news__newsList-news-content">
              <div>
                <i class="fas fa-calendar"></i>
                <span>1 Dec 2023</span>
              </div>
              <h5>🇬🇧Free seminar on educational programs in Great Britain.</h5>
              <p>
                🚀 Dear observers and young students! Are you ready for a
                special workshop organized by Proactiveuz? 🎙️...
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
                <span>1 Dec 2023</span>
              </div>
              <h5>Telegram Live Chat</h5>
              <p>
                Opportunities to study and work abroad (in England🇬🇧,
                Australia🇦🇺, Canada🇨🇦, New Zealand🇳🇿, Ireland🇮🇪 and America🇺🇸)
                during the weekly live chat; you can get live answers to the
                questions...
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
              <h5>Webinar</h5>
              <p>
                🚀 dear students, a new project is coming soon, and you can
                participate in our webinar and receive up to 50% scholarships
                for studying abroad. We will announce the winners of the
                scholarships through our Instagram and Telegram channels.
              </p>
            </div>
          </div>
        </div>
        <div className="news__learnmore">
          <Link to="/news">Learn more</Link>
        </div>
      </div>
    </div>
  );
}
