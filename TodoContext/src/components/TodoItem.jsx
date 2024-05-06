import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [todoEditable, setTodoEditable] = useState(false);
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();

  const updateText = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setTodoEditable(false);
  };
  const updateChange = () => {
    toggleComplete(todo.id);
  };
  console.log(todo.isCompleted);
  return (
    <div
      className={`flex ${
        todo.isCompleted ? "bg-green-200 " : ""
      } bg-white py-2 px-4 rounded-2xl text-xl gap-x-2 font-semibold h-12`}
    >
      <input
        type="checkbox"
        name=""
        id=""
        onChange={updateChange}
        checked={todo.isCompleted}
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!todoEditable}
        className={`bg-transparent w-full ${
          todoEditable ? "border-2 border-black rounded-r-md" : ""
        } outline-none capitalize ${todo.isCompleted ? "line-through" : ""}`}
        disabled={todo.isCompleted}
      />
      <button
        className=" shadow-md h-full w-12 border-2 border-gray-200 rounded-lg disabled:opacity-50 mx-auto"
        onClick={() => {
          if (todo.isCompleted) return;
          if (todoEditable) {
            updateText();
          } else {
            setTodoEditable((prev) => (prev === false ? true : false));
          }
        }}
        disabled={todo.isCompleted}
      >
        {todoEditable ? "📁" : "✏️"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="shadow-md h-full w-12 border-2 border-gray-200 rounded-lg disabled:opacity-50 mx-auto"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
