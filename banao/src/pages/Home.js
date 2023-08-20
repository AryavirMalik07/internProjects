import React from "react";
import Cards from "../components/Cards";
import Filters from "../components/Filters";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Filters />
      <Cards />
    </div>
  );
};

export default Home;
