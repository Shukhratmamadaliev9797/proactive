import React from "react";
import Header from "../components/Header";
import FeaturedUniversities from "../components/FeaturedUniversities";
import Services from "../components/Services";
import News from "../components/News";
import Countries from "../components/Countries";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedUniversities />
      <Services />
      <News />
      <Countries />
      <Testimonial />
    </div>
  );
}
