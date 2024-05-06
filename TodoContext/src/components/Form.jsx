import React, { useState } from "react";
import { useTodo } from "../context";

const Form = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({ id: Date.now(), todo: todo, isCompleted: false });
    setTodo("");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white px-4 py-2 rounded-xl    flex justify-between text-xl"
      >
        <input
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className=" w-full mr-2 focus:outline-none text-gray-700 font-bold"
        />
        <button
          type="submit"
          className="rounded-full  flex items-center justify-center bg-yellow-400 w-[50px] h[50px] text-md text-white hover:bg-yellow-600"
        >
          ✓
        </button>
      </form>
    </div>
  );
};

export default Form;
