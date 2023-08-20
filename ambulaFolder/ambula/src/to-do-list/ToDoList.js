import React, { useState } from "react";
import Todo from "./Todo";
import ToDoAdd from "./ToDoAdd";

const ToDoList = () => {
  // normal usestate initialize with array
  const [listTodo, setListTodo] = useState([]);

  const [count, setCount] = useState(0);
  const addList = (inputText) => {
    // if condition is because if user add empty list it will not be submited... it will only add if something is written in the input area
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
      const incr = () => {
        setCount = count + 1;
      };
    }
  };

  // const [count, setCount] = useState(0);

  const deleteListItem = (key) => {
    // we will first copy our TODO LIST in an another list then delete the item
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="bg-gray-800 h-[100vh]">
      <div className="m-auto w-[50%] p-[10px] bg-yellow-700 h-fit rounded-2xl ">
        <h1 className="text-white text-xl font-semibold mb-[5px]">TODO</h1>
        <hr />
        <Todo addList={addList} />

        {listTodo.map((listItem, i) => {
          return (
            <ToDoAdd
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
        {/* <h1 className="text-white">{count}</h1> */}
      </div>
    </div>
  );
};

export default ToDoList;

// API KEY
// 4af101e429a64033981d6ff9410cb6b2
