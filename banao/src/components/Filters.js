import React from "react";

const Filters = () => {
  return (
    <div className="flex items-center justify-between w-[80vw] m-auto py-[20px] border-b-[2px]">
      <div>
        <ul className="flex items-center gap-4">
          <li className="text-regular font-medium border-b-2 border-black py-[5px]">
            All Posts
          </li>
          <li className="text-regular font-medium text-slate-400 py-[5px]">
            Article
          </li>
          <li className="text-regular font-medium text-slate-400 py-[5px]">
            Event
          </li>
          <li className="text-regular font-medium text-slate-400 py-[5px]">
            Education
          </li>
          <li className="text-regular font-medium text-slate-400 py-[5px]">
            Job
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-slate-200 px-4 py-2 rounded-xl text-regular font-medium">
          Write a Post
        </button>
        <button className="bg-[#2F6CE5] px-4 py-2 rounded-xl text-regular font-medium text-white">
          Join group
        </button>
      </div>
    </div>
  );
};

export default Filters;
