import React from "react";
import Data from "../Data/Data";
const Cards = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-[50px]">
      {Data.map((item) => (
        <div className="w-[400px] h-[350px] border-[2px] rounded-xl">
          <img
            className="w-full h-[50%] rounded-xl "
            src={item.img}
            alt={item.img}
          />
          <div className="flex flex-col items-start gap-2 w-[100%] mt-[10px] px-[10px]">
            <h1 className="font-medium text-regular ">{item.topic}</h1>
            <h1 className="font-semibold text-normal">{item.heading}</h1>
            <p className="font-regular text-regular text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
