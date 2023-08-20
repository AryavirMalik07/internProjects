import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-[30px] justify-center py-[20px] h-[80vh]">
        <div>
          <img
            src="https://ambula.app/assets/images/Icon.png"
            alt="image"
            className="w-[100px]"
          />
        </div>
        <div>
          <h1 className="text-[42px] font-semibold">Our Mission</h1>
        </div>
        <div className="w-[50%]">
          <p className="text-xl">
            At Ambula, we are deeply committed to the belief that every person
            deserves access to high-quality healthcare services. We believe in a
            democratic approach to health, and through the use of technology, we
            strive to make emergency and trauma care assistance more
            transparent, easily accessible, and user-friendly for all
            individuals in India. By bridging the communication gap in
            healthcare delivery, we hope to empower individuals to take control
            of their health and well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
