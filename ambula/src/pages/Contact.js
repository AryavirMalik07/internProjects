import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-[80vh] items-center justify-center">
        <h1 className="text-[42px] font-semibold">Subscribe To Ambula</h1>
        <div className="flex items-center justify-center">
          <img
            src="https://ambula.app/assets/images/3740749.jpg"
            className="w-[500px]"
          />
          <div>
            <form className="flex flex-col gap-[20px] items-end">
              <input
                type="text"
                placeholder="Name"
                className="w-[600px] border-[2px] border-black outline-1 outline-black px-[15px] py-[10px] active:outline-sky-500 "
              />
              <input
                type="text"
                placeholder="Name"
                className="w-[600px] border-[2px] border-black outline-1 outline-black px-[15px] py-[10px] active:outline-sky-500 "
              />
              <input
                type="text"
                placeholder="Name"
                className="w-[600px] border-[2px] border-black outline-1 outline-black px-[15px] py-[10px] active:outline-sky-500 "
              />
              <button className="bg-sky-700 px-[10px] text-white py-[5px] w-[100px] rounded-xl">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
