import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__title">
          <h3>
            <b>Our Services</b>
          </h3>
          <p>
            We have expert consultants on board to guide your foreign study
            aspirations. We cover the following services, and your other
            requirements as well.
          </p>
        </div>
        <div className="services__services1">
          <div className="services__service">
            <div className="services__service-icon">
              <i class="icon fas fa-lightbulb"></i>
            </div>
            <h5>
              <b>Career Counselling</b>
            </h5>
            <p>
              We identify your strengths and suggest your appropriate courses
              for your growth
            </p>
            <Link>
              Learn more <i class="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
          <div className="services__service">
            <span className="services__service-icon">
              <i class="icon fas fa-university"></i>
            </span>
            <h5>University Admissions</h5>
            <p>
              We do the end to end processing of your application, including SOP
              and Thesis.
            </p>
            <Link>
              Learn more <i class="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
          <div className="services__service">
            <span className="services__service-icon">
              <i class="icon fas fa-plane"></i>
            </span>
            <h5>Pre-Departure Briefing</h5>
            <p>
              We actively prepare you for your departure in all aspects so that
              you can fulfill your dream.
            </p>
            <Link>
              Learn more <i class="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
          <div className="services__service">
            <span className="services__service-icon">
              <i class="icon fas fa-building"></i>
            </span>
            <h5>Accomodation</h5>
            <p>
              We plan for your temporary accomodation when you land for your
              convenience
            </p>
            <Link>
              Learn more <i class="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
          <div className="services__service">
            <span className="services__service-icon">
              <i class="icon fas fa-id-card"></i>
            </span>
            <h5>Visa Consultancy</h5>
            <p>
              We provide you visa consultancy service to make your visa process
              hassle free
            </p>
            <Link>
              Learn more <i class="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
        </div>
        <div className="services__services2"></div>
      </div>
    </div>
  );
}
