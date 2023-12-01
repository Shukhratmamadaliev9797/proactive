import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__img">
          <div className="about__img-imgBox">
            <img src="/images/about.jpeg" alt="" />
          </div>
        </div>
        <div className="about__content">
          <h1>About us</h1>
          <p>
            We provide consulting services to young people wishing to study
            abroad. We help to-become-students in exploring their study
            opportunities worldwide, make university choices, and preparation of
            necessary documentation.
          </p>
          <p>
            Proactiveuz was founded in 2021 . Even though our company is
            relatively new in the CIS market, we have provided our services to
            students who wish to study abroad.
          </p>
          <p>
            The founders of the company are young people with experience
            studying abroad and with degrees from high-rank universities. Our
            personnel consists of education experts with more than 5 years of
            experience working in the CIS market and possessing a good command
            of English, Russian, Uzbek, and Turkish languages.
          </p>
        </div>
      </div>
    </div>
  );
}
