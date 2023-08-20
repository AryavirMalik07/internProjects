import React from "react";

const ToDoAdd = (props) => {
  return (
    <div>
      <li className="list-none text-white flex border-2 justify-between w-[400px] rounded-xl px-[10px] py-[4px] mt-[10px] m-auto">
        {props.item}
        <span>
          <i
            className="fa-sharp fa-solid fa-trash"
            onClick={(e) => {
              props.deleteItem(props.index); // will pass index so that data delete at particular index
            }}
          ></i>
        </span>
      </li>
    </div>
  );
};

export default ToDoAdd;
