import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[42px] font-semibold">About Ambula</h1>
        <p className="text-xl w-[50%]">
          Ambula is an App based on UHI(Unified Health Interface) popularly
          known as 'Ayushman Bharat Digital Mission' envisioned by our
          honourable Prime Minister which connects patients live with the
          unified health network across India for all healthcare needs. Ambula
          is committed to bridge all the communication gaps prevalent in
          healthcare delivery and Ambula will impart it's contribution to this
          Noble Vision. We are always available there for you if you find any
          discomfort of health. Your trust empowers us to serve you more.
        </p>
      </div>
    </div>
  );
};

export default About;
