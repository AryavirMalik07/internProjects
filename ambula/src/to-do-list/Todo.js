import React, { useState } from "react";

const Todo = (props) => {
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="m-auto p-[10px] w-[400px] ">
      <div className="flex items-center gap-[20px]">
        <input
          className="rounded-md w-[250px] px-[10px] py-[5px] outline-0"
          type="text"
          placeholder="enter new task"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="rounded-[100%] text-white bg-sky-900 p-[10px] h-[50px] w-[50px] text-center text-[20px] hover:bg-sky-400 "
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Todo;
