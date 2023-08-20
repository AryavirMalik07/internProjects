import React from "react";
// import heroImage from "../images/hero.jpg";
const HeroSection = () => {
  return (
    <div className="   bg-heroImage bg-cover bg-no-repeat w-full h-[50vh]">
      <div className="flex flex-col items-start gap-2 absolute top-[40%] left-[5%] ">
        <h1 className="text-white text-3xl font-medium">
          Computer Engineering
        </h1>
        <h1 className="text-white text-medium font-regular">
          142,765 Computer Engineers Follow this
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
