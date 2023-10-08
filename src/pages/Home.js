import React from "react";
import Header from "../components/Header";
import FeaturedUniversities from "../components/FeaturedUniversities";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedUniversities />
      <Services />
    </div>
  );
}
